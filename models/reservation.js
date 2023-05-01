const { DataTypes } = require("sequelize")

const sequelize = require("../lib/sequelize")

const Reservation = sequelize.define('reservation', {
    start: { type: DataTypes.DATEONLY, allowNull: false },
    end: { type: DataTypes.DATEONLY, allowNull: false }
})

module.exports = Reservation
