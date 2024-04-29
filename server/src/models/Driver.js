const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:true
    },
    password: {
      type: DataTypes.STRING,
      allowNull:true
    },
    debt: {
      type: DataTypes.NUMBER,
      allowNull:true
    },
    antiquity: {
      type:DataTypes.STRING,
      allowNull: true
    },
    User_Type: {
      type: DataTypes.STRING,
      allowNull:true
    }
  },
  { timestamps: false });
};


