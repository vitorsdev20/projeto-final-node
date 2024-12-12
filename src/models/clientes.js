const { DataTypes } = require("sequelize")
const Sequelize = require("../config/database")

const Clientes = Sequelize.define('clientes', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
} )

module.exports = Clientes;
