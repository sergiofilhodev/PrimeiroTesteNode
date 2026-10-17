import express from "express";
import cors from "cors";
import produtoRoutes from "./routes/produto.routes.js";

// Cria o servidor, a variavel passa a ser a central do servidor
const app = express();

// Por padrão é bloqueado acesso externo a API, o cors libera para receber requisições de fora
app.use(cors());

// "Traduz" o arquivo json para o express entender
app.use(express.json());

// Cria uma rota para acesso, e retorna o que eu quero
app.get("/saude", (req, res) => res.json({ status:"Ok"}));

// Importa as rotas do arquivo descentralizando  e dividindo o código
app.use(produtoRoutes);

// Espera que outro arquivo inicie o servidor, no caso o Server.js
export default app;