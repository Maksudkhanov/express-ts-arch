import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { HTTPError } from "../common/errors/http-error.class";
import { LoggerService } from "../logger/logger.service";

export class UserController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger)
        this.bindRoutes([
            {path: '/login', method: 'post', func: this.login},
            {path: '/register', method: 'post', func: this.register}
        ])
    }

    login(req: Request, res: Response, next: NextFunction) {
        // this.ok(res, 'login')
        next(new HTTPError(401, 'Register Error', 'Login'))
    }

    register(req: Request, res: Response, next: NextFunction) {
        // this.ok(res, 'register')
        
    }
}     