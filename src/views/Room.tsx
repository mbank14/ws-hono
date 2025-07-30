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
                <div id="descReadyUser">
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