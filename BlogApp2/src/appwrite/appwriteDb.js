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

    async createPost({content,description,imageUrl,slug,topic,userId,name}) {
        console.log(slug)
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
                    imageUrl,
                    name
                }
            )  
        } catch (error) {
            console.error(error)
        }

    }

    async getpost(slug) {
        try {
            return await this.database.getDocument(
                authObj.databaseId,
                authObj.tableId,
                slug,
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
                [Query.equal("userId",[userId])]
            )
        } catch (error) {
            console.error(error)
        }
    }

    async updatePost({content,description,imageUrl,slug,topic,userId,name}){
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
                    imageUrl,
                    name
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    async deletePost(slug){
        try {
            return await this.database.deleteDocument(
               authObj.databaseId,
                authObj.tableId,
                slug,
            )
        } catch (error) {
            console.error(error)
        }
    }

    async getAllPostsbyAllUsers(){
        try {
            return await this.database.listDocuments(
                authObj.databaseId,
                authObj.tableId,
            )
        } catch (error) {
            console.error(error)
        }
    }

    async getSixPosts(){
        try {
            return await this.database.listDocuments(
                authObj.databaseId,
                authObj.tableId,
                [Query.limit(6)]
            )
        } catch (error) {
            console.log(error)
        }
    }

};

const userdb = new userDatabase

export default userdb