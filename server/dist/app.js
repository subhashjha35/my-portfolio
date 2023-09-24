"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'https://dev.to',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
const port = process.env.PORT;
app.get('/', (req, res) => {
    fetch('https://dev.to/articles/me').then(data => data.json).then(data => res.send(data));
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`⚡️[server]: Server is running at http://localhost:3000`);
});
//# sourceMappingURL=app.js.map