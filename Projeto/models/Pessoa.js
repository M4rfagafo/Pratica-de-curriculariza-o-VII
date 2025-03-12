const Sequelize = require('sequelize');
const db = require('../db/connection');

const Pessoa = db.define('pessoa',{
    nome: {
        type:Sequelize.STRING,
    },
    endereco: {
        type:Sequelize.STRING,
    },
    contato: {
        type:Sequelize.STRING,
    }
});

module.exports = Pessoa