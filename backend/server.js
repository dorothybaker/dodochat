import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import path from "path";

import authRouter from "./routes/auth.route.js";
import { connectToDB } from "./utils/connectToDB.js";
import messageRouter from "./routes/message.route.js";
import userRouter from "./routes/user.route.js";
import { app, server } from "./socket/socket.js";

config();
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, (req, res) => {
  connectToDB();
  console.log(`Server running on port ${PORT}`);
});
