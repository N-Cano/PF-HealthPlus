const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Doctor', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    personalId: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        //* TODO: hacer validación de email
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  {timestamps: false});
};