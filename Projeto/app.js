const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/connection');
const pessoasRoutes = require('./routes/pessoas'); 
const app = express();
const PORT = 3000;

// Configuração da pasta estática
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Conexão ao banco de dados
db.authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso");
    })
    .catch(err => {
        console.log("Ocorreu um erro", err);
    });

// Rota para o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/pessoas', pessoasRoutes); 
// Inicia o servidor
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});

