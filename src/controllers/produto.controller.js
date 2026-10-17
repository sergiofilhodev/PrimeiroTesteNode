import { produtoService } from "../container.js";

// Função que retorna erro de página não encontrada
function statusDoErro(erro) {
    return erro.status ?? 500;
}

// Exporta a função para serem usadas
export const produtoController = {

    // Responde a requisição com o que foi definido no service.js
    listar: async (req, res) => {
        res.json(await produtoService.listar());
    },

    buscarPorId: async (req, res) => {
        try {
            res.json(await produtoService.buscarPorId(req.params.id));
        } catch (erro) {
            res.status(statusDoErro(erro)).json({ erro: erro.message });
        }
    },

    // Por boas práticas Criar retorna Status 201
    criar: async (req, res) => {
        try {
            res.status(201).json(await produtoService.criar(req.body));
        } catch (erro) {
            res.status(statusDoErro(erro)).json({ erro: erro.message });
        }
    },

    atualizar: async (req, res) => {
        try {
            res.json(await produtoService.atualizar(req.params.id, req.body));
        } catch (erro) {
            res.status(statusDoErro(erro)).json({ erro: erro.message });
        }
    },

    // Por boas práticas Remover retorna Status 204
    remover: async (req, res) => {
        try {
            await produtoService.remover(req.params.id);
            res.status(204).send();
        } catch (erro) {
            res.status(statusDoErro(erro)).json({ erro: erro.message});
        }
    },  
};