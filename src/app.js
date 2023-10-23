import express from "express";
import { conectaDB } from "./config/dbConnect.js";
import { livrosRoutes } from "./routes/livrosRoutes.js";

const conexao = await conectaDB();
const app = express();
routes(app); //o aap foi definido como parametro no index.js, em routes; tal é a instância do express

conexao.on("error", (erro) => {
  console.error("Erro de conexao", erro);
});

conexao.once("open", () => {
  console.log(`Conexão com o banco realizada com sucesso 📦`);
});


app.delete("/livros/:id", (req, res)=>{
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido");
});


export { app };
