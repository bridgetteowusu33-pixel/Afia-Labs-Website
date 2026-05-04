// Inquiry handler for the /services/ page form. Validates the POST body,
// silently swallows honeypot submissions, and forwards real inquiries to
// support@afialabs.net via the Mailchannels REST API (free for Cloudflare
// Pages Functions, no API key required).
//
// TODO: Verify Mailchannels Domain Lockdown and SPF/DNS records before
// relying on production email delivery. Mailchannels has tightened
// sender-authorization rules over time (Domain Lockdown TXT record, SPF
// includes, DKIM). Pull the current setup steps from the live Cloudflare
// Pages + Mailchannels docs at deploy time, apply what's required now,
// and confirm with a real test send before treating the form as live.

interface Payload {
  name?: string;
  email?: string;
  business?: string;
  current_url?: string;
  project_type?: string;
  budget?: string;
  message?: string;
  website_homepage?: string;
}

const FROM_ADDRESS = 'inquiries@afialabs.net';
const FROM_NAME = 'Afia Labs Studio';
const TO_ADDRESS = 'support@afialabs.net';
const TO_NAME = 'Afia Labs Support';
const MAX_MESSAGE_LENGTH = 5000;

export const onRequestPost: PagesFunction = async (context) => {
  const { request } = context;

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return json({ ok: false, error: 'invalid-json' }, 400);
  }

  // Honeypot: if a bot filled the hidden field, pretend everything is fine.
  if (body.website_homepage && body.website_homepage.trim() !== '') {
    return json({ ok: true });
  }

  const name = trim(body.name);
  const email = trim(body.email);
  const businessName = trim(body.business);
  const currentUrl = trim(body.current_url);
  const projectType = trim(body.project_type);
  const budget = trim(body.budget);
  const message = trim(body.message).slice(0, MAX_MESSAGE_LENGTH);

  if (!name || !email || !projectType || !budget || !message) {
    return json({ ok: false, error: 'missing-fields' }, 400);
  }
  if (!isEmail(email)) {
    return json({ ok: false, error: 'invalid-email' }, 400);
  }

  const subject = `New project inquiry from ${name} (${projectType})`;
  const submittedAt = new Date().toISOString();

  const textBody = [
    `New project inquiry via afialabs.net/services/`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Business: ${businessName || '(not provided)'}`,
    `Current site: ${currentUrl || '(not provided)'}`,
    `Project type: ${projectType}`,
    `Budget: ${budget}`,
    `Submitted: ${submittedAt} UTC`,
    ``,
    `Message:`,
    message,
  ].join('\n');

  const htmlBody = `
<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;color:#1a0a2e;line-height:1.6;">
  <h2 style="margin:0 0 16px;font-size:18px;">New project inquiry</h2>
  <p style="margin:0 0 16px;color:#5b5675;font-size:14px;">Submitted via afialabs.net/services/ on ${escapeHtml(submittedAt)} UTC.</p>
  <table style="border-collapse:collapse;font-size:14px;">
    <tr><td style="padding:6px 16px 6px 0;color:#8e87a0;">Name</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(name)}</td></tr>
    <tr><td style="padding:6px 16px 6px 0;color:#8e87a0;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
    <tr><td style="padding:6px 16px 6px 0;color:#8e87a0;">Business</td><td style="padding:6px 0;">${escapeHtml(businessName) || '<em style="color:#8e87a0;">not provided</em>'}</td></tr>
    <tr><td style="padding:6px 16px 6px 0;color:#8e87a0;">Current site</td><td style="padding:6px 0;">${currentUrl ? `<a href="${escapeHtml(currentUrl)}">${escapeHtml(currentUrl)}</a>` : '<em style="color:#8e87a0;">not provided</em>'}</td></tr>
    <tr><td style="padding:6px 16px 6px 0;color:#8e87a0;">Project type</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(projectType)}</td></tr>
    <tr><td style="padding:6px 16px 6px 0;color:#8e87a0;">Budget</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(budget)}</td></tr>
  </table>
  <h3 style="margin:24px 0 8px;font-size:15px;">Message</h3>
  <p style="margin:0;white-space:pre-wrap;">${escapeHtml(message)}</p>
</body></html>`.trim();

  try {
    const mcRes = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: TO_ADDRESS, name: TO_NAME }],
          },
        ],
        from: { email: FROM_ADDRESS, name: FROM_NAME },
        reply_to: { email, name },
        subject,
        content: [
          { type: 'text/plain', value: textBody },
          { type: 'text/html', value: htmlBody },
        ],
      }),
    });

    if (!mcRes.ok) {
      const detail = await mcRes.text().catch(() => '');
      console.error('Mailchannels send failed', mcRes.status, detail);
      return json({ ok: false, error: 'send-failed' }, 502);
    }
  } catch (err) {
    console.error('Mailchannels request threw', err);
    return json({ ok: false, error: 'send-failed' }, 502);
  }

  return json({ ok: true });
};

function trim(value: string | undefined): string {
  return typeof value === 'string' ? value.trim() : '';
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function json(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
