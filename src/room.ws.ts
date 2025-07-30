
import {Hono} from 'hono'
import {createBunWebSocket} from 'hono/bun'
import type { ServerWebSocket } from 'bun'

const room = new Hono()

const { upgradeWebSocket, websocket} = createBunWebSocket<ServerWebSocket>() 

room.get('/play',
    upgradeWebSocket((c)=> {
        return {
            onOpen(evt, ws){
                console.log("Connected ");
                ws.send(JSON.stringify({message: "Hello from server !"}));
            },
            onMessage(evt, ws){
                console.log(evt.data);
            },
            onClose(evt, ws){},
            onError(evt, ws){}
        }
    })
);


export default room;
export { websocket}; 