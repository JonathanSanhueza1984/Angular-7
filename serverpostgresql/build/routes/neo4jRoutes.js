"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const neo4jController_1 = __importDefault(require("../controllers/neo4jController"));
class Neo4jRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', neo4jController_1.default.listneo4j);
    }
}
const neo4jRoutes = new Neo4jRoutes();
exports.default = neo4jRoutes.router;
