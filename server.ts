// @ts-ignore
import { serve, file } from "bun";

serve({
  port: 3001,
  async fetch(req: any) {
    const url = new URL(req.url);
    const path = url.pathname;

    // Serve static assets
    const staticFile = file(`.${path}`);
    if (await staticFile.exists()) {
      return new Response(staticFile);
    }

    // Determine file path for HTML pages
    let filePath;
    if (path === "/" || path === "/index") {
      filePath = "./index.html";
    } else if (path.endsWith(".html")) {
      filePath = `.${path}`;
    } else {
      filePath = `.${path}.html`;
    }

    // Try to serve the HTML file if it exists
    const f = file(filePath);
    if (await f.exists()) {
      return new Response(f, {
        headers: { "Content-Type": "text/html" },
      });
    }

    // 404
    const errorPage = file("./404.html");
    if (await errorPage.exists()) {
      return new Response(errorPage, {
        status: 404,
        headers: { "Content-Type": "text/html" },
      });
    }

    return new Response("404 Not Found", { status: 404 });
  },
});

console.log("Listening on http://localhost:3001");
