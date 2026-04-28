const express = require('express');
const app = express();
const porta = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/finalizar-venda', (req, res) => {
    let nomeProduto = req.body.nomeProduto
    let precoUnitario = req.body.precoUnitario
    let quantidade = req.body.quantidade
    let cupomDesconto = req.body.cupomDesconto

    valorTotal = quantidade * precoUnitario

    if (cupomDesconto === "PROMO20") {
        valorTotal = valorTotal - 20 / 100;
    }
    if (quantidade <= 0) {
        return res.status(400).json({
            sucesso: false,
            erro: "Quantidade inválida!"
        })

    }
 return res.status(201).json({
        sucesso: true,
        mensagem: `Compra realizada com sucesso! ${valorTotal + nomeProduto}`,
    })

})

app.listen(porta, () => {
    console.log(`Servidor rodando! Aguardando o formulário HTML na porta ${porta}...`)
});