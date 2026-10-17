import mongoose from "mongoose";

// Cria a estrutura do produto, quais criterios 
const produtoSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true, trim: true },
        quantidade: { type: Number, required: true, min: 0, default: 0 },
    },
    { timestamps: true } // cria createdAt e updateAt sozinho (Registros do dado)
);

export const Produto = mongoose.model("Produto", produtoSchema);