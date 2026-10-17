// Cria as rotas das funcionalidade, no caso o CRUD
import { Router } from "express"
import { produtoController } from "../controllers/produto.controller.js";

const router = Router();

// Define para onde vai cada rota, aponta a função especifica
router.get("/produtos", produtoController.listar);
router.get("/produtos/:id", produtoController.buscarPorId);
router.post("/produtos", produtoController.criar);
router.put("/produtos/:id", produtoController.atualizar);
router.delete("/produtos/:id", produtoController.remover);
export default router;