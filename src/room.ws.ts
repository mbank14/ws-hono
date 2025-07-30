import { Hono } from "hono";
import { createBunWebSocket } from "hono/bun";
import type { ServerWebSocket } from "bun";
import { WSContext } from "hono/ws";

const room = new Hono();

const { upgradeWebSocket, websocket } = createBunWebSocket<ServerWebSocket>();

type User = {
  id: string | number;
  socket: WSContext<ServerWebSocket<undefined>>;
  isUserReady: boolean;
};

const roomUser: Record<string, User[]> = {};

let roomName: string = "";
let userId: string = "";

room.get(
  "/play",
  upgradeWebSocket((c) => {
    // userId++;

    return {
      onOpen(evt, ws) {
        console.log("Connected ");
        ws.send(JSON.stringify({ message: "Hello from server !" }));
      },

      onMessage(evt, ws) {
        console.log(evt.data);
        let dataParse: any;

        try {
          dataParse = JSON.parse(evt?.data.toString());
        } catch (error) {
          ws.send("Invalid JSON");
          return;
        }

        dataParse = JSON.parse(evt.data.toString());
        roomName = dataParse.roomName;
        userId = dataParse.userId;

        if (!roomUser[roomName]) {
          roomUser[roomName] = [];
        }
        
        const thisUser = roomUser[roomName].find((u) => u.id == userId);
        
        if (!thisUser) {
          roomUser[roomName].push({
            id: userId,
            socket: ws,
            isUserReady: false,
          });
        }

        // console.log(thisUser);
        console.log(roomUser);

        if (dataParse.type === "STATUS_USER") {
          roomName = dataParse.roomName;

          if (!roomName) return console.warn("Room name not found !!");

          if(thisUser) thisUser.isUserReady = dataParse.isUserReady;
        console.warn(thisUser);
        
          if (roomUser[roomName].every((u) => u.isUserReady)) {
            roomUser[roomName].forEach((u) => {
              u.socket.send(
                JSON.stringify({
                  type: "PLAY",
                  message: "Everyone is ready",
                })
              );
            });
          } else {
            roomUser[roomName].forEach((u) => {
              u.socket.send(
                JSON.stringify({
                  type: "PLAY",
                  message: "Waiting for " + roomUser[roomName].filter(u => !u.isUserReady).length + " more",
                })
              );
            });
          }
          console.warn(roomUser[roomName]);
          
        }
      },

      onClose(evt, ws) {
        if (roomName && roomUser[roomName]) {
          roomUser[roomName] = roomUser[roomName].filter(
            (u) => u.id !== userId
          );
        }
        // console.log(userId);
        // console.log(roomUser);
      },
      onError(evt, ws) {},
    };
  })
);

export default room;
export { websocket };
