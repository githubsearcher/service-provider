"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRouter = void 0;
const express = require("express");
const service_1 = require("../controller/service");
class ServiceRouter {
    constructor() {
        this.router = express.Router();
        this._serviceController = new service_1.ServiceController();
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/', this._serviceController.getUsers);
    }
}
exports.ServiceRouter = ServiceRouter;
//# sourceMappingURL=service.js.map