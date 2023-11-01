import {Router} from 'express'
import { UserRepository } from '../modules/user/repositories/UserRepository';
import { VideoRepository } from '../modules/videos/repositories/VideosRepository';
import { login } from '../middleware/login';

//ESSE ARQUIVO SERÁ SOMENTE PARA AS REQUISIÇÕES (ROTAS) DE VÍDEOS

const videoRoutes = Router();
const videoRepository = new VideoRepository()


videoRoutes.post('/create-video', login, (request,response) => { //Passa o login como parâmetro pois precisa estar logado para ter acesso a essa rota
   videoRepository.create(request, response)
})

videoRoutes.get('/get-video', (request,response) => {
   videoRepository.getVideos(request, response)
})

videoRoutes.get('/search-video', (request,response) => {
   videoRepository.searchVideos(request, response)
})


export {videoRoutes};