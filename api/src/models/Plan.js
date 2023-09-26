const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Plan', {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoincrement: true,
        },
        price: {
            type: DataTypes.FLOAT(6, 2),
            allowNull: false,
        },
        benefits: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { timestamps: false })
};