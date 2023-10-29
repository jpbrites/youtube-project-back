"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user.routes");
const videos_routes_1 = require("./routes/videos.routes");
const dotenv_1 = require("dotenv"); //Para usar as variáveis de ambiente
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', user_routes_1.userRoutes); //Tem acesso as rotas de usuario
app.use('/videos', videos_routes_1.videoRoutes); //Tem acesso as rotas de videos
app.listen(4000);
