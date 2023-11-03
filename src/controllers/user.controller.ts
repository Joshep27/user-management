import { Request, Response, Router } from "express";
import { UserService } from "../services";

export class UserController {
	public readonly router: Router;
	public readonly route: string;

	constructor() {
		this.route = "/users";
		this.router = Router();
		this.router.post("/signup", this.signUp);
		this.router.post("/signin", this.signIn);
        this.router.get("/me", this.logged);
		this.router.delete("/logout", this.logout);
	}

	public async signUp(req: Request, res: Response) {
		try {
			return res.json(await UserService.create(req.body));
		} catch (error: any) {
			res.status(400).json({
				message: error.message,
			});
		}
	}

	public async signIn(req: Request, res: Response) {
		try {
			const token = await UserService.auth(req.body);
			return res.json({ auth: true, token });
		} catch (error: any) {
			res.status(400).json({
				message: error.message,
			});
		}
	}

	public async logged(req: Request, res: Response) {
		try {
			const token = Array.isArray(req.headers["x-access-token"])
				? req.headers["x-access-token"][0]
				: req.headers["x-access-token"];

			if (!token) {
				throw new Error("No token provided");
			} else {
				return res.json(await UserService.checkToken(token));
			}
		} catch (error: any) {
			res.status(400).json({
				message: error.message,
			});
		}
	}
	
	public async logout(req: Request, res: Response) {
		try {
			const token = Array.isArray(req.headers["x-access-token"])
				? req.headers["x-access-token"][0]
				: req.headers["x-access-token"];

			if (!token) {
				throw new Error("No token provided");
			} else {
				return res.json(await UserService.closeToken(token));
			}
		} catch (error: any) {
			res.status(400).json({
				message: error.message,
			});
		}
	}


}
