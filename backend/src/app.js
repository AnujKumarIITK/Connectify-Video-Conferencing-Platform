import express from "express";

import { createServer } from "node:http";
import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));

app.use(
  cors({
    origin: "https://apnavideocall-video-conferencing-wy0n.onrender.com",
    methods: ["GET", "POST"],
    credentials: true
  })
);

app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {

    app.set("mongo_user");
    const connectionDb = await mongoose.connect("mongodb+srv://anujkwork24:Anujkumar002bro@apnavideocallcluster.qnisyg5.mongodb.net/");
    console.log(`MongoDB connected HOST: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
        console.log(`Server is listening on port ${app.get("port")}`);
    });
    
}

start();


