import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../utils/protectRoute.js";

const messageRouter = Router();

messageRouter.post("/send/:id", protectRoute, sendMessage);
messageRouter.get("/:id", protectRoute, getMessages);

export default messageRouter;
