//VERIFICA SE O USUÁRIO ESTÁ LOGADO

import { verify } from "jsonwebtoken";

const login = (req: any, res: any, next: any) => {
    try{  //Tenta fazer uma coisa, caso nao consiga ele cai no erro
        const decode = verify(req.headers.authorization, process.env.SECRET as string)
        req.user = decode;
        next(); //Indica que a gente quer dar continuidade no processo (caso tudo de certo), esse processo de verificação fica no meio de duas operações
    } catch(error){
        return res.status(401).json({message: "Não autorizado"})
    }
}

export {login}