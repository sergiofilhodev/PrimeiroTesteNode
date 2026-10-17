import { MSG } from "./mensagens.js";

// Exporta a classe ErroNegocio para ser utilizada 
export class ErroDeNegocio extends Error {
    constructor(mensagem, status = 400) {
        super(mensagem);
        this.status = status;
    }
}

export class NaoEncontradoError extends ErroDeNegocio {
    constructor(mensagem = "Produto não encontrado") {
        super(mensagem, 404);
    }
}