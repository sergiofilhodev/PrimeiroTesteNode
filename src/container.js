import { produtoRepository } from "./repositories/produto.repository.js";
import { criarProdutoService } from "./services/produto.service.js";

export const produtoService = criarProdutoService(produtoRepository);