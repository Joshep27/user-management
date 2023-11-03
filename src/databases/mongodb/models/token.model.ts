import { Schema, Document, model } from "mongoose";

export interface Token extends Document {
	token: string;
	userId: Schema.Types.ObjectId;
	createdAt: Date;
}

const tokenSchema = new Schema<Token>(
	{
		token: { type: String, required: true },
		userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
		createdAt: { type: Date, default: Date.now },
	},
	{ versionKey: false }
);

tokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });

export const TokenModel = model<Token>("Token", tokenSchema);
