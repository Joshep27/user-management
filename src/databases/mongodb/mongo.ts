import mongoose from "mongoose";
import { Database } from "../database";

export class MongoDb extends Database<void> {
	constructor() {
		super();
		this.type = "mongodb";
		this.host = "localhost";
		this.port = "27017";
		this.dbName = "db";
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
