import { FC } from "hono/jsx"
import { Button } from "../components/Button"
import { Layout } from "../components/Layout"

export const HomePage: FC = () => {
    return (
       <Layout text="HONO JSX">
           <main class={`h-[90%] flex flex-col gap-[50px]`}>
            <h1 class={`text-center`}>Bermain bersama dengan HonoJS</h1>
            <div class={`p-4 bg-stone-300 rounded-md border border-stone-200 border-b-[2px] border-solid`}>
                <div class={`flex gap-2 items-center`}>
                    <input class={`w-full`} type="text"  />
                    <p>kirim</p>
                </div>
                <Button size="medium" variant="primary" text="Play" />
            </div>
           </main>  
           <Footer />
       </Layout>
    )
}

export const Footer = () =>{
    return(
        <div class={`p-3 bg-red-200 text-center rounded-4`}>
            <p>2025 mencoba <a href="https://github.com/mbank14">Hono</a></p>
        </div>
    )
}