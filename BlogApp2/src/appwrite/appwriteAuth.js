import authObj from "../appwrite"
import { Client, Account, ID } from "appwrite";

class authentication {
    client = new Client();
    account;

    async createAccount(id, email, password) {
        this.client
            .setProject(authObj.projectId)
            .setEndpoint(authObj.endPoint)
        this.account = new Account(this.client)

        try {
            const user = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password,
            })

            return user

        } catch (error) {
            console.error(error)
        }
    }

    async userLogin(email, password) {
        try {
            const result = await this.account.createEmailPasswordSession({
                email: email,
                password: password,
            })
            return result
        } catch (error) {
            console.error(error)
        }
    }

    async userLogout(id) {
        try {
            const logout = await this.account.deleteSession({
                sessionId: id
            })
            return logout
        } catch (error) {
            console.error(error)
        }
    }

    async deleteUser(){
        try {
            await this.account.delete()
        } catch (error) {
            console.error(error)
        }
    }
};

const userAuth = new authentication

export default userAuth

