import {Router } from "express";
import { getUser, login, getUsers } from "../controllers/UserControllers";


export const UserRouter = Router();
UserRouter.get("/user/:id", getUser)
UserRouter.get("/users", getUsers)
UserRouter.get("/login", login)
