import { serveStatic } from "@biliblitz/node-server";
import { chain } from "@biliblitz/node-server/tools";
import { serve } from "@hono/node-server";

const fetch = chain(
  serveStatic({ root: "./dist/static/" }),
  () => new Response("404 NOT FOUND", { status: 404 })
);

serve({ fetch }, (info) => {
  console.log(`Listening on http://localhost:${info.port}/`);
});
