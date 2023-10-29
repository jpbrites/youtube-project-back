"use strict";
//VERIFICA SE O USUÁRIO ESTÁ LOGADO
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const login = (req, res, next) => {
    try { //Tenta fazer uma coisa, caso nao consiga ele cai no erro
        const decode = (0, jsonwebtoken_1.verify)(req.headers.authorization, process.env.SECRET);
        req.user = decode;
        next(); //Indica que a gente quer dar continuidade no processo (caso tudo de certo), esse processo de verificação fica no meio de duas operações
    }
    catch (error) {
        return res.status(401).json({ message: "Não autorizado" });
    }
};
exports.login = login;
