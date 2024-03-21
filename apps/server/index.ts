import { createServer } from "http";
import { Server } from "socket.io";
import { setupListeners } from "./setupListners";

const PORT = process.env.PORT || 8080;

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

setupListeners(io);

httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
