// import { useState } from "hono/jsx"
import { html } from "hono/html"
import { Layout } from "../components/Layout"
import { Button } from "../components/Button"


export const RoomPage = () =>{
    // const [data, setData] = useState();
    const data = ""
    return(
        <Layout text="Play Room">
            <div>
                <div>

                {data ? (
                    <p>
                        tinggal 2 orang lagi yang belum, colek temen kamu sekarang !
                    </p>
                ) : (
                    <p>Belum ada yang mulai, jadilah yang pertama dan ingatkan teman kamu!!</p>
                )}
                </div>

                <div>
                    <Button label="Play" size="medium" variant="primary" id="playBtn" />
                </div>
            </div>
            {html`
            <script src="/js/ws-room.js" defer></script>
            `}
        </Layout>
    )
}