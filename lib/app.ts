import * as express from "express";
import * as bodyParser from "body-parser";
import { ApiRouterFactory } from './router/api.routing';
const port = process.env.PORT || 8080 ;
class App {

    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();        
    }

    private config(): void {
         this.app.use(function(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT , PATCH, DELETE, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,  x-xsrf-token, Content-Type, Authorization');
           next();
          });

        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
        this.app.use('/', ApiRouterFactory.getApiRouter());
        this.app.listen(port, () => {
            console.log('Express server listening on port ' + port);
        });
    }
}

export default new App().app;