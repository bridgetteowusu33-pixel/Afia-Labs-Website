// Cloudflare Pages Function middleware — gates the entire /read-room-r7k92x/*
// tree behind a single shared password set as the READING_ROOM_PASSWORD env var
// in the Cloudflare Pages dashboard.
//
// Rotate the password by editing the env var in the dashboard. Existing logged-in
// users get bounced to the login page on their next request.

interface Env {
  READING_ROOM_PASSWORD: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env, next } = context;
  const url = new URL(request.url);

  // No password configured = open access (fail-open during initial deploy is
  // acceptable; once env var is set the gate engages)
  if (!env.READING_ROOM_PASSWORD) return next();

  const expected = await sha256(env.READING_ROOM_PASSWORD);
  const cookie = request.headers.get('cookie') || '';
  const match = /(?:^|;\s*)reading-access=([^;]+)/.exec(cookie);

  if (match && match[1] === expected) {
    return next();
  }

  // Not authenticated — redirect to login, preserving target path
  const target = encodeURIComponent(url.pathname + url.search);
  return Response.redirect(
    `${url.origin}/reading-access?from=${target}`,
    302,
  );
};

async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
