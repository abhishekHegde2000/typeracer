import { Server } from "socket.io";

export function setupListeners(io: Server) {
    io.on("connection", (socket) => {
        console.log("New connection - ", socket.id);

        socket.on("join-game", (roomId: string, name: string) => {
            if (!roomId) return socket.emit("error", "Room id is required");

            if (!name) return socket.emit("error", "Name is required");

            socket.join(roomId);
        });
    });
}
