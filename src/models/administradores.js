const { DataTypes } = require("sequelize")
const Sequelize = require("../config/database")

const Admin = Sequelize.define('admin', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    idade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
} )

module.exports = Admin;