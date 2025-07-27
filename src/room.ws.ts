
import {Hono} from 'hono'
import {createBunWebSocket} from 'hono/bun'
import type { ServerWebSocket } from 'bun'

const room = new Hono()

const { upgradeWebSocket, websocket} = createBunWebSocket<ServerWebSocket>() 

room.get('/ws',
    upgradeWebSocket((c)=> {
        return {
            onOpen(evt, ws){},
            onMessage(evt, ws){},
            onError(evt, ws){}
        }
    })
);


export default {
    room,
    websocket
}