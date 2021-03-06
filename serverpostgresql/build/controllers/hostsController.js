"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class HostsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hosts = yield database_1.default.query('SELECT * FROM ng_hosts');
            res.json(hosts);
            yield database_1.default.end();
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            yield database_1.default.connect();
            const hosts = yield database_1.default.query('SELECT * FROM ng_hosts WHERE "Id" = $1', [id]);
            if (hosts.rowCount > 0) {
                return res.json(hosts.rows[0]);
            }
            res.status(404).json({ text: "The game doesn't exits" });
            yield database_1.default.end();
        });
    }
}
const hostsController = new HostsController();
exports.default = hostsController;
