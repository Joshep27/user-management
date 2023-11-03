import {MongoDb} from './mongodb/mongo'
import dotenv from "dotenv";
dotenv.config();
export const mongoDb = new MongoDb();
export {UserModel} from './mongodb/models/user.model'
export {TokenModel} from './mongodb/models/token.model'
