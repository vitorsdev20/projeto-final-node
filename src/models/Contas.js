const { DataTypes } = require("sequelize")
const sequelize = require("../config/database");
const Clientes = require("./clientes");

const Contas = sequelize.define('Contas', {
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:Clientes,
            key:'id'
        }
    },
    saldo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: true 
});

module.exports = Contas;