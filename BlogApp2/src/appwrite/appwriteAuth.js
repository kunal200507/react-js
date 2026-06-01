import authObj from "../appwrite"
import { Client, Account, ID } from "appwrite";

const errors = {
    type: "",
    errorMessage: ""
}

function setError(type, message) {
    errors.type = type
    errors.errorMessage = message
}

function clearErrors() {
    errors.type = ""
    errors.errorMessage = ""
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

    async createAccount({email, password, name}) {
        clearErrors()
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
            setError("signUp", error.message)
            return null
        }
    }

    async userLogin({email, password}) {
        clearErrors()
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.error(error.message)
            setError("login", error.message)
            return null
        }
    }

    async userLogout() {
        clearErrors()
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.error(error)
            setError("logout", error.message)
            return null
        }
    }

    async getUser(){
        try {
            return await this.account.get()
        } catch {
            return null
        }
    }
}

const userAuth = new authentication()
export { userAuth, errors, clearErrors }
