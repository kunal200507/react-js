import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class Authentication{
    client = new Client();
    account

    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    };

    async userSignUp({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);

            if (userAccount) {
                return this.userLogin({email,password})
            } else {
                console.log("Account not form: error")
            }

        } catch (error) {
            throw error;
        }
    }

    async userLogin({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);

        } catch (error) {
            throw error;
        }
    }

    async userAuthenticationState(){
        try {
            const userAuthStatus = await this.account.get()
            if (userAuthStatus) {
                return userAuthStatus;
            } else {
                return null;
            }
        } catch (error) {
            console.log("Appwrite serive :: userAuthenticationState :: error", error);
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error)
        }
    }

};

const AuthObject = new Authentication()

export default AuthObject