"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
class ServiceController {
    constructor() {
    }
    // get list of user
    getUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // let users: any = 
                // if(users.length > 0) {
                //     res.status(200).send(users);
                // } else {
                //     res.status(404).send('Yet no user exist !!');  
                // }
            }
            catch (e) {
                res.status(400).json(e);
            }
        });
    }
}
exports.ServiceController = ServiceController;
//# sourceMappingURL=service.controller.js.map