import { Request, Response, request } from "express"
import { LoginRequest } from "../types/LoginRequest"
import { UserModel } from "../models/UserModel"


export const getUser = async (req:Request, res:Response) => {
    const id =parseInt(req.params.id);
    const user = await UserModel.getUserById(id);

    res.send(user)
}

export const getUsers = async (req:Request, res:Response) => {
    const users = await UserModel.getALL()
    res.send(users)
}


export const login = (req:Request, res:Response) => {
    const loginRequest: LoginRequest = req.query;
    if (!loginRequest.username || !loginRequest.password) {
        return res.send( {
            message: "Login Successful"})
    }
    res.send ({
        message: "Login Successful"
    })

}
