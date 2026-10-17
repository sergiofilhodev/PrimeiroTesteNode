import { Produto } from "../models/produto.model.js";

// Solicita para o banco de dados para listar, buscar, criar, atualizar e remover produtos
export const produtoRepository = {
    listar: () => Produto.find(),

    buscarPorId: (id) => Produto.findById(id),

    criar: (dados) => Produto.create(dados),

    // Valida a atualização e aplica as regras.
    atualizar: (id, dados) => Produto.findByIdAndUpdate(id, dados, { new: true, runValidators: true }),
    
    remover: (id) => Produto.findByIdAndDelete(id),
};