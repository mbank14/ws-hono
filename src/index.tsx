import { Hono } from "hono";
import { HomePage } from "./views/Home";
import { jsxRenderer } from "hono/jsx-renderer";
import { RoomPage } from "./views/Room";
import { serveStatic } from "hono/bun";
import { cors } from "hono/cors";
// import { poweredBy } from 'hono/powered-by';

import room, { websocket } from './room.ws'

const app = new Hono();
app.use(
  "/*",
  cors({
    origin: ["http://localhost", "https://localhost"],
    allowMethods: ["GET", "POST"],
    exposeHeaders: ["Content-Type"],
    maxAge: 300,
  })
);

app.use(jsxRenderer());
// app.use("*", poweredBy());

// app.use("*", async (c, next) => {
//   console.log("URL requested:", c.req.path);
//   await next();
// });

app.use(
  "/js/*",
  serveStatic({
    root: "./src/public",
    onNotFound: (path, c) => {
      console.log(`${path} is not found, you access ${c.req.path}`);
    },
  })
);

app.get("/", (c) => {
  return c.html(<HomePage />);
});
app.get("/play/:name", (c) => {
  return c.html(<RoomPage />);
});
app.route("/ws", room);

export default {
  fetch: app.fetch,
  websocket
};
