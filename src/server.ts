import express from "express"
import { userRoutes } from "./routes/user.routes";
import { videoRoutes } from "./routes/videos.routes";
import { config } from "dotenv"; //Para usar as variáveis de ambiente

config();

const app = express()

const cors = require('cors')

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*") //ACEITA REQUISIÇÕES DE QUALQUER LUGAR
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", 'POST, GET, PATCH, DELETE, OPTIONS')
    next();
})

app.use(cors());

app.use(express.json())

app.use('/user', userRoutes) //Tem acesso as rotas de usuario
app.use('/videos',videoRoutes) //Tem acesso as rotas de videos


app.listen(4000)