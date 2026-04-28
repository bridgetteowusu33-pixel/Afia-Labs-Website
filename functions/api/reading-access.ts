// Login handler for the reading-room password gate.
// POSTs from /reading-access land here. On correct password, sets a hashed
// auth cookie and redirects back to the originally requested page.

interface Env {
  READING_ROOM_PASSWORD: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);

  const formData = await request.formData();
  const password = String(formData.get('password') || '');
  const from = String(formData.get('from') || '/read-room-r7k92x');

  // Sanity-check redirect target — must be a same-origin reading-room path
  const safeFrom = from.startsWith('/read-room-r7k92x') ? from : '/read-room-r7k92x';

  if (!env.READING_ROOM_PASSWORD || password !== env.READING_ROOM_PASSWORD) {
    return Response.redirect(
      `${url.origin}/reading-access?error=1&from=${encodeURIComponent(safeFrom)}`,
      302,
    );
  }

  const cookieValue = await sha256(password);
  const oneYear = 60 * 60 * 24 * 365;

  return new Response(null, {
    status: 302,
    headers: {
      Location: `${url.origin}${safeFrom}`,
      'Set-Cookie': `reading-access=${cookieValue}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${oneYear}`,
    },
  });
};

async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
