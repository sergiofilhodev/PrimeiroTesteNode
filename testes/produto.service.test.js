import test from "node:test";
import assert from "node:assert/strict";
import { criarProdutoService } from "../src/services/produto.service.js"
import { NaoEncontradoError } from "../src/errors/erros.js";

const repositoryFalso = {
    criar: async (dados) => ({ _id: "1", ...dados}),
    buscarPorId: async () => null,
};

const service = criarProdutoService(repositoryFalso);

test("Criar rejeita produto sem nome", async () => {
    await assert.rejects(
        () => service.criar({ quantidade: 5}),
        { message: "Nome obrigatório" }
    );
});

test("criar rejeitar quantidade negativa", async () => {
    await assert.rejects(
        () => service.criar({ nome: "Arroz", quantidade: -1}),
        { message: "Quantidade não pode ser negativa" }
    );
});

test("criar devolve o produto criado", async ()=> {
    const produto = await service.criar({ nome: "Arroz", quantidade: 10});
    assert.equal(produto.nome, "Arroz");
});

test("buscarPorId lança erro quando não existe", async () => {
    await assert.rejects(
        () => service.buscarPorId("507f1f77bcf86cd799439011"),
        NaoEncontradoError
    );
});

test("atualizar produto com id invalido", async () => {
    await assert.rejects(
        () => service.atualizar("abcds", { nome: "Arroz" }),
        NaoEncontradoError
    );
});
