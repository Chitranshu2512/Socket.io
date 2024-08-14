import express from  "express"
import {Server} from "socket.io"
import {createServer} from "http"
import cors from "cors"

const port = 8000;

const app = express()
const server = createServer(app)
const io = new Server(server, {
    cors:{
        origin: "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST"]
    }
})

app.use(cors());


app.get('/', (req, res) => {
    res.send("Hello world")
});

io.on("connection", (socket) => {
    console.log("user connected");
    console.log("Id: ", socket.id);
    socket.emit("welcome", "welcome to the server")


    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id)
    })
});

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
});
