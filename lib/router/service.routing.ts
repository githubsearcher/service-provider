import * as express from 'express';
import { Router } from 'express';
import { ServiceController }from '../controller/service.controller';
export class ServiceRouter {
    private _serviceController : ServiceController;
    router: Router;
    constructor() {
        this.router= express.Router();
        this._serviceController = new ServiceController();
        this.initRoutes();
    }
    
    initRoutes(){
     this.router.get('/',  this._serviceController.getServices);
    }
}
