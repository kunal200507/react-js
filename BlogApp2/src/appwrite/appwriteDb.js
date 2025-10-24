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

    async createrow({topic,slug,description,content,imageUrl}) {
        try {
            return await this.database.createDocument(
                authObj.databaseId,
                authObj.tableId,
                id,
                {
                    topic,
                    description,
                    content,
                    imageUrl,
                }
            )  
        } catch (error) {
            console.error(error)
        }

    }
};

const userdb = new userDatabase

export default userdb