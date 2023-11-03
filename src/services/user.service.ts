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
}
