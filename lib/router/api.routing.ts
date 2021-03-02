import * as express from 'express';
import { Router } from 'express';
import { ServiceRouter } from './service.routing';


export class ApiRouterFactory {
    private constructor() {}

  static getApiRouter () {
    const router: Router = express.Router();

    const ServiceRoute : Router = new ServiceRouter().router;


    router.use('/service', ServiceRoute);

    router.get('/', function(req, res){
        res.status(200).json({message: "Server is hitting..."})
    });
    return router;
  }
}
