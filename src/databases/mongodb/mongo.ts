import mongoose from "mongoose";
import { Database } from "../database";

export class MongoDb extends Database<void> {
	constructor() {
		super();
		this.type = process.env.MONGO_TYPE || "";
		this.host = process.env.MONGO_HOST || "";
		this.port = process.env.MONGO_PORT || "";
		this.dbName = process.env.MONGO_DBNAME || "";
	}

	public connect(): void {
		mongoose
			.connect(this.getUri())
			.then(() => {
				console.log("Connected to database!");
			})
			.catch((error) => {
				console.log("Connection failed!", error);
			});
	}
}
