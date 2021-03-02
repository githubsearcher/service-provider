"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRouter = void 0;
const express = require("express");
const service_controller_1 = require("../controller/service.controller");
class ServiceRouter {
    constructor() {
        this.router = express.Router();
        this._serviceController = new service_controller_1.ServiceController();
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/', this._serviceController.getServices);
    }
}
exports.ServiceRouter = ServiceRouter;
//# sourceMappingURL=service.routing.js.map