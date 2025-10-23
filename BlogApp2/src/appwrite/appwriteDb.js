import authObj from "../appwrite"
import { Client, Databases } from "appwrite";

class userDatabase {
    client = new Client()
    database

    constructor(){
        this.client
            .setProject(authObj.projectId)
            .setEndpoint(authObj.endPoint)
        this.database = new Databases(this.client)
    }

    async createrow(id,{email,name,author,password}) {
        try {
            return await this.database.createDocument(
                authObj.databaseId,
                authObj.tableId,
                id,
                {
                    email,
                    name,
                    author,
                    password,
                }
            )  
        } catch (error) {
            console.error(error)
        }

    }
};

const userdb = new userDatabase

export default userdb