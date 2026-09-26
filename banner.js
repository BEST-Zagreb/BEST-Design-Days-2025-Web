// Serves the archived files untouched and adds a noindex header, so search engines keep sending people
// to the current site instead of this edition. Unlike the other archives, no visible notice is added.
export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex");
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  },
};
