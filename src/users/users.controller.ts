import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { BaseController } from "../common/base.controller";
import { HTTPError } from "../common/errors/http-error.class";
import { ILogger } from "../logger/logger.interface";
import { LoggerService } from "../logger/logger.service";
import { TYPES } from "../types";
import 'reflect-metadata'
import { IUserController } from "./users.controller.interface";


@injectable()
export class UserController extends BaseController implements IUserController{
    constructor(
         @inject(TYPES.ILogger) private loggerService: ILogger
         ) {
        super(loggerService)
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