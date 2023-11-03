import { UserModel, TokenModel } from "../databases";
import { UserDto } from "../dtos";
import jwt from "jsonwebtoken";


export class UserService {
	static async create(user: UserDto) {
		const exist = await UserModel.findOne({ email: user.email });
		if (!exist) {
			return UserModel.create(user);
		} else {
			throw new Error("The user is already registered");
		}
	}

	static async auth(user: UserDto) {
		const exist = await UserModel.findOne({ email: user.email });
		if (exist) {
			const token = jwt.sign({ id: exist._id }, process.env.SECRET || "", { expiresIn: "1h" });
			TokenModel.create({ token, userId: exist._id });
			return token;
		} else {
			throw new Error("The user does not exist");
		}
	}

	static async checkToken(token: string) {
		const tokenDecoded = jwt.verify(token, process.env.SECRET || "") as { id: string }
		const user = await UserModel.findById(tokenDecoded.id)
		if (user) {
			return user;
		}
		else{
			throw new Error("No user found");
		}

	}

	static async closeToken(token: string){
		const clear = await TokenModel.deleteOne({token});
		if (clear.deletedCount > 0) {
			return {closed: true}
		}else{
			throw new Error("No token found");
		}
	}


}
