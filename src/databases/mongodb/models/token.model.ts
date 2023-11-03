import { Schema, Document, model } from "mongoose";

export interface Token extends Document {
	token: string;
	userId: Schema.Types.ObjectId;
}

const tokenSchema = new Schema<Token>({
	token: { type: String, required: true},
	userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true},
});

export const TokenModel = model<Token>("Token", tokenSchema);
