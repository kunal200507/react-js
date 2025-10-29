import authObj from "../appwrite"
import { Client, Account, ID } from "appwrite";

let errors ={
    loginError:""
} 

class authentication {
    client = new Client();
    account;

    constructor(){
        this.client
            .setProject(authObj.projectId)
            .setEndpoint(authObj.endPoint)
        this.account = new Account(this.client)
    }

    async createAccount({email, password,name}) {
        try {
            const user = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )

            return user

        } catch (error) {
            console.error(error) 
        }
    }

    async userLogin({email, password}) {
        try {
            const result = await this.account.createEmailPasswordSession(email, password)
            return result
        } catch (error) {
            console.log(error.message)
            errors.loginError = error.message
        }
    }

    async userLogout() {
        try {
            const logout = await this.account.deleteSessions()
            return logout
        } catch (error) {
            console.error(error)
        }
    }


    async getUser(){
        try {
            const user = await this.account.get()
            return user
        } catch (error) {
            console.error(error)
        }
    }
};

const userAuth = new authentication
export {userAuth,errors} 

