import express, { Express } from "express";
import {Server} from 'http'
import { inject, injectable } from "inversify";
import { ExceptionFilter } from "./common/errors/exception.filter";
import { ILogger } from "./logger/logger.interface";
import { LoggerService } from "./logger/logger.service";
import { TYPES } from "./types";
import { UserController } from "./users/users.controller";
import 'reflect-metadata'

@injectable()
export class App {
    app: Express
    server: Server
    port: number


    constructor( 
        @inject(TYPES.ILogger) private logger: ILogger,
        @inject(TYPES.UserController) private userController: UserController, 
        @inject(TYPES.ExceptionFilter) private exceptionFilter: ExceptionFilter) {
        this.app = express()
        this.port = 3000
    }

    useRoutes() {
        this.app.use('/users', this.userController.router)
    }

    useExceptionFilters() {
        this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
    }

    public async init() {
        this.useRoutes()
        this.useExceptionFilters()
        this.server = this.app.listen(this.port)
        this.logger.log(`App is up on port: ${this.port}`);
    }
}