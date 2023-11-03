import { UserModel } from "../databases";
import { UserDto } from "../dtos";


export class UserService {

    static async create(user: UserDto){
        const exist = await UserModel.find({email: user.email})
        if (!exist){
            return UserModel.create(user);
        }
        else{
            throw new Error('The user is already registered');
        }
        
    }

}