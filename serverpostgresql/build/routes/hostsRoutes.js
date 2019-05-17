"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hostsController_1 = __importDefault(require("../controllers/hostsController"));
class HostsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', hostsController_1.default.list);
        this.router.get('/:id', hostsController_1.default.getOne);
    }
}
const hostsRoutes = new HostsRoutes();
exports.default = hostsRoutes.router;
