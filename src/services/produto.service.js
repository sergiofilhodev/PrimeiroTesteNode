import mongoose from "mongoose";
import { MSG } from "../errors/mensagens.js"
import { ErroDeNegocio, NaoEncontradoError } from "../errors/erros.js";

// Verifica se Id atende aos requisitos de 24 caracteries
function validarId(id) {
    if(!mongoose.isValidObjectId(id)) throw new ErroDeNegocio(MSG.idInvalido);
}

// Exporta as funções para outro arquivo que vai requisitar o serviço dele
export const criarProdutoService = (produtoRepository) => ({
    listar: () => produtoRepository.listar(),

    buscarPorId: async (id) => {
        validarId(id);
        const produto = await produtoRepository.buscarPorId(id);
        if (!produto) throw new NaoEncontradoError();
        return produto;
    },

    criar: async ({ nome, quantidade }) => {
        if (!nome) throw new ErroDeNegocio(MSG.nomeObrigatório);
        if(quantidade < 0) throw new ErroDeNegocio(MSG.quantidadeNegativa);
        return produtoRepository.criar({ nome, quantidade });
    },

    atualizar: async (id, dados) => { 
        validarId(id);
        const produto = await produtoRepository.atualizar(id, dados);
        if (!produto) throw new NaoEncontradoError();
        return produto;
    },
    
    remover: async (id) => {
        validarId(id);
        const produto =  await produtoRepository.remover(id);
        // Valida se realmente foi apagado produto, pois só a uma verificação 
        if (!produto) throw new NaoEncontradoError();
    },
});