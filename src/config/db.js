// Conexão com o banco de dados 
import mongoose from "mongoose";

export async function conectarBanco() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado");
}
