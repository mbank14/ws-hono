

export const Layout = (props: { children?: any; text: string }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.text}</title>

        <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/mini.global.js"></script>
      </head>
      <body class={`h-full bg-stone-100 flex flex-col items-center justify-center w-full p-0 m-0`}>{props.children}</body>
    </html>
  );
};
