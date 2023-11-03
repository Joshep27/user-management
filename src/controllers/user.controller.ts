import { Request, Response, Router } from "express";
import { UserService } from "../services";


export class UserController {
    public readonly router: Router;
    public readonly route: string;

    constructor(){
        this.route = '/users'
        this.router = Router();
        this.router.post("/signup", this.signUp)

    }

    public async signUp(req: Request, res: Response){
        try {
           return res.json(await UserService.create(req.body))
        } catch (error: any) {
            res.status(400).json({
                message: error.message
            })
        }

    }

}