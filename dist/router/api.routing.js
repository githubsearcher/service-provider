"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRouterFactory = void 0;
const express = require("express");
const service_routing_1 = require("./service.routing");
class ApiRouterFactory {
    constructor() { }
    static getApiRouter() {
        const router = express.Router();
        const ServiceRoute = new service_routing_1.ServiceRouter().router;
        router.use('/service', ServiceRoute);
        router.get('/', function (req, res) {
            res.status(200).json({ message: "Server is hitting..." });
        });
        return router;
    }
}
exports.ApiRouterFactory = ApiRouterFactory;
//# sourceMappingURL=api.routing.js.map