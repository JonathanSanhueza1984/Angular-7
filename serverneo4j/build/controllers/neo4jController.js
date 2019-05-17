"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const neo4j = __importStar(require("neo4j-driver"));
class Neo4jController {
    listneo4j(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "toor"));
            const session = driver.session();
            const seeresult = yield session.run('MATCH (n:Host) RETURN n LIMIT 25').then(res => {
                console.log(res.records[0].get(0));
                return res;
            });
            res.json(seeresult);
            session.close();
        });
    }
}
const neo4jController = new Neo4jController();
exports.default = neo4jController;
