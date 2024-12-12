const { DataTypes } = require("sequelize")
const Sequelize = require("../config/database")

const notificacao = Sequelize.define('notificacao', {

    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    mensagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_notificacao: {
        type: DataTypes.DATE,
        allowNull: false
    }
} )

module.exports = notificacao;