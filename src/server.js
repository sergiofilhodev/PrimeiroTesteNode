// Liga banco de dados + servidor
import "dotenv/config";
import app from "./app.js";
import { conectarBanco } from "./config/db.js";

// Await trava o código para prosseguir só quando retornar um valor
await conectarBanco();

// Liga o servidor com a porta que foi pre-definida em .env
app.listen(process.env.PORT, () => console.log(`Rodando na porta ${process.env.PORT}`));