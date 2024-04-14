import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";
import { protectRoute } from "../utils/protectRoute.js";

const userRouter = Router();

userRouter.get("/", protectRoute, getUsers);

export default userRouter;
