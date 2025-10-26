import authObj from "../appwrite"
import { Client, Databases, Query } from "appwrite";

class userDatabase {
    client = new Client()
    database

    constructor(){
        this.client
            .setProject(authObj.projectId)
            .setEndpoint(authObj.endPoint)
        this.database = new Databases(this.client)
    }

    async createPost({userId,topic,slug,description,content,imageUrl}) {
        try {
            return await this.database.createDocument(
                authObj.databaseId,
                authObj.tableId,
                slug,
                {
                    topic,
                    userId,
                    description,
                    content,
                    imageUrl
                }
            )  
        } catch (error) {
            console.error(error)
        }

    }

    async getpost(slug,userId) {
        try {
            return await this.database.getDocument(
                authObj.databaseId,
                authObj.tableId,
                slug,
                Query.equal("userId",[userId])
            ) 
        } catch (error) {
            console.error(error)
        }
    }

    async getAllPost(userId){
        try {
            return await this.database.listDocuments(
                authObj.databaseId,
                authObj.tableId,
                Query.equal("userId",[userId])
            )
        } catch (error) {
            console.error(error)
        }
    }

    async updatePost({userId,topic,slug,description,content,imageUrl}){
        try {
            return await this.database.updateDocument(
                authObj.databaseId,
                authObj.tableId,
                slug,
                {
                    topic,
                    userId,
                    description,
                    content,
                    imageUrl
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    async deletePost(slug,userId){
        try {
            return await this.database.deleteDocument(
               authObj.databaseId,
                authObj.tableId,
                slug,
                Query.equal("userId",[userId])
            )
        } catch (error) {
            console.error(error)
        }
    }

};

const userdb = new userDatabase

export default userdb