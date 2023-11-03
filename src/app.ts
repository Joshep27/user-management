import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { UserController } from "./controllers";
import { mongoDb } from "./databases";

const app = express();
const port = 3000;
app.use(express.json()); 
app.use(cors());

//Environment Variables
dotenv.config();

//Database Connection
mongoDb.connect();

//Controllers
const userController = new UserController();
app.use(userController.route, userController.router);

app.get("/", (req, res) => {
	res.send("API for authentication and authorization users");
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
