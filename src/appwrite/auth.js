import conf from "../conf/conf";
import {Client,Account,ID} from "appwrite"

export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl);
        this.client.setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email, password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                
            } else {
                return 
            }
        } catch (error) {
            throw error ;
        }
    }
}
const authService =new AuthService();

export default  authService