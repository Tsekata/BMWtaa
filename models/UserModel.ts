import {promises} from "fs";
import { User } from "../types/Users";


export class UserModel {
    

    static async getALL():Promise<User[]> {
        const data = await promises.readFile("models/db.json","utf-8");
        return JSON.parse(data);
    }
    
    static async getUserById(id: number):Promise<User | undefined> {
        const data = await promises.readFile("models/db.json","utf-8");
        const formattedData = JSON.parse(data) as User[];
        return formattedData.find(user => user.id == id);
    }
    
   

}