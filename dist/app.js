"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const api_routing_1 = require("./router/api.routing");
const port = process.env.PORT || 8080;
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT , PATCH, DELETE, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,  x-xsrf-token, Content-Type, Authorization');
            next();
        });
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use('/', api_routing_1.ApiRouterFactory.getApiRouter());
        this.app.listen(port, () => {
            console.log('Express server listening on port ' + port);
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map