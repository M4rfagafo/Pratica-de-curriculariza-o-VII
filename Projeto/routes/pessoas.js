const express = require('express');
const router = express.Router();
const Pessoa = require('../models/Pessoa'); 
// Rota de teste
router.get('/test', (req, res) => {
    res.send('deu certo');
});

// Adiciona pessoa via POST
router.post('/add', (req, res) => {
    let { nome, endereco, contato } = req.body;

    // Insere
    Pessoa.create({
        nome,
        endereco,
        contato
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

module.exports = router;
