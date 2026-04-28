const express = require('express');
const app = express();
const porta = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post ('/finalizar-venda', (req,res) => {
    let procureProduto = req.body.procureProduto
    let precoUnitario = req.body.precoUnitario
    let quantidade = req.body.quantidade
    let cupomDesconto = req.body.cupomDesconto

    if (quantidade <= 0){
        return res.status(400)

    }
})