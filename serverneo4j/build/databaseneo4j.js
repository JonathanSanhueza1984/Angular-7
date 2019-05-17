"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const neo4j = __importStar(require("neo4j-driver"));
const uri = "bolt://localhost:7474";
const user = "neo4j";
const password = "toor";
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const db = driver.session();
exports.default = db;
