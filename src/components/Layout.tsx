import { FC } from "hono/jsx";

export const Layout = (props: { children?: any; text: string }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.text}</title>

        <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/mini.global.js"></script>
      </head>
      <body class={`bg-stone-100`}>{props.children}</body>
    </html>
  );
};
