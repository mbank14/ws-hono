// import { useState } from "hono/jsx"
import { html } from "hono/html"
import { Layout } from "../components/Layout"
import { Button } from "../components/Button"


export const RoomPage = (props: {roomName:string}) => {

    const data = ""
    return(
        <Layout text="Play Room">
            <div>
                <p class={`text-xl font-bold`} id="roomName">{props.roomName}</p>
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