import { Schema, Document, model } from "mongoose";

export interface User extends Document {
	email: string;
	password: string;
}

const userSchema = new Schema<User>(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ versionKey: false }
);

export const UserModel = model<User>("User", userSchema);
