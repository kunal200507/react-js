import config from "../config/config";
import { Client, ID, database, Databases, Storage, Query } from "appwrite";

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
    }

    async createPost({ title, content, featuredImage, status, userId, slug }) {
        try {
            return await this.databases.createDocument({
                databaseId: config.appwriteDatabaseId,
                collectionId: config.appwriteCollectionId,
                documentId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            });
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error)
        }
    }

    async updatePost({ title, content, featuredImage, status, userId }) {
        try {
            await this.databases.updateDocument({
                databaseId: config.appwriteDatabaseId,
                collectionId: config.appwriteCollectionId,
                documentId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            });
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error)
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument({
                databaseId: config.appwriteDatabaseId,
                collectionId: config.appwriteCollectionId,
                documentId: slug,
            });

        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error)
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument({
                databaseId: config.appwriteDatabaseId,
                collectionId: config.appwriteCollectionId,
                documentId: slug,
            })

        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error)
        }
    }

    async getPosts() {
        try {
            return await this.databases.listDocuments({
                databaseId: config.appwriteDatabaseId,
                collectionId: config.appwriteCollectionId,
                queries: [Query.equal("status", ["active"])],
            })
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error)
        }
    }

    async fileUpload() {
        try {
            await this.bucket.createFile(
                {
                    bucketId: config.appwriteBucketId,
                    fileId: ID.unique(),
                    file: document.getElementById('uploader').files[0]
                }
            )

        } catch (error) {
            console.log("Appwrite serive :: fileUpload :: error", error)
        }
    }
};

const databaseconfig = new DatabaseConfig()

export default databaseconfig