"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const api_routes_1 = __importDefault(require("./routes/api.routes"));
const swagger_1 = require("./config/swagger");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (_, res) => {
    res.json({
        message: 'All system are good! 👋🌎🚀',
    });
});
app.use('/api', api_routes_1.default);
const PORT = process.env.PORT || '3000';
(0, swagger_1.swaggerDocs)(app, PORT);
exports.default = app;
//# sourceMappingURL=app.js.map