"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API IS /api/hosts' });
    }
}
exports.indexController = new IndexController();
