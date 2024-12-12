const express = require('express');
// const sequelize = require('./config/database')
const { sequelize } = require('./models')
const router = require('./routers/router')



const app = express();
app.use(express.json());

app.use('/api/', router)




sequelize.authenticate()
    .then(() => {
        console.log('Conexao com o banco de dados deu certo.')
        sequelize.sync()
    })

    .catch(err => {
        console.log('Erro ao conectar com banco.');

    });


const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Running on http://${PORT}`);

});