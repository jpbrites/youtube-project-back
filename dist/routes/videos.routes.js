"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRoutes = void 0;
const express_1 = require("express");
const VideosRepository_1 = require("../modules/videos/repositories/VideosRepository");
const login_1 = require("../middleware/login");
//ESSE ARQUIVO SERÁ SOMENTE PARA AS REQUISIÇÕES (ROTAS) DE VÍDEOS
const videoRoutes = (0, express_1.Router)();
exports.videoRoutes = videoRoutes;
const videoRepository = new VideosRepository_1.VideoRepository();
videoRoutes.post('/create-video', login_1.login, (request, response) => {
    videoRepository.create(request, response);
});
videoRoutes.get('/get-video', (request, response) => {
    videoRepository.getVideos(request, response);
});
videoRoutes.get('/search-video', (request, response) => {
    videoRepository.searchVideos(request, response);
});
