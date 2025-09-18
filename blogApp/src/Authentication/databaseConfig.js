import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

class DatabaseConfig {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)

        // console.log(config.appwriteProjectId)
    }

    async createPost({ title, content, featuredImage, status, userId, slug }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error)
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            );

        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error)
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )

        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error)
            return false
        }
    }

    async getPosts() {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                [Query.equal("status", ["active"])],
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error)
            return false
        }
    }

    async fileUpload(file) {
        try {
            return await this.bucket.createFile(

                config.appwriteBucketId,
                ID.unique(),
                file

            )

        } catch (error) {
            console.log("Appwrite serive :: fileUpload :: error", error)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId,
            )
            // return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error)
            return false
        }
    }

    filePreview(fileId) {
        return this.bucket.getFilePreview(

            config.appwriteBucketId,
            fileId,

        )
    }
};

const databaseconfig = new DatabaseConfig()

export default databaseconfig