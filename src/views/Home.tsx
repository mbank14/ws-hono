// import { FC } from "hono/jsx";
import { html } from "hono/html";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";
import { InputText } from "../components/InputText";

export const HomePage = () => {
  return (
    <Layout text="HONO JSX">
      <main class={`h-[90%] flex flex-col gap-[50px] max-w-[500px]`}>
        <h1 class={`text-center`}>Bermain bersama dengan HonoJS</h1>
        <div
          class={`p-4 bg-slate-200 rounded-md border border-stone-200 border-b-[2px] border-solid`}
        >
          <div class={`flex gap-2 items-center mb-4`}>
            <InputText
              type="text"
              id="inputRoom"
              placeholder="Masukan nama room"
              name="inputRoom"
              className="w-full bg-slate-50 border border-solid border-slate-300 px-2 py-3 rounded-lg"
            />
            {/* <input class={`w-full`} type="text" /> */}
            <Button id="join" label="Join" size="small" variant="secondary" />
          </div>
          <div className="w-full border-0 border-b-[2px] border-solid border-slate-300 mb-4"></div>
          <Button
            size="small"
            variant="primary"
            label="Buat Room"
            id="clickIni"
            fullWidth
          />
        </div>
      </main>
      <Footer></Footer>
      {html`<script src="/js/script.js" defer></script>`}
    </Layout>
  );
};

export const Footer = () => html`
  <footer class="py-3 bg-red-200 text-center rounded-4 w-full">
    <p>2025 mencoba <a href="https://github.com/mbank14">Hono</a></p>
  </footer>
`;
