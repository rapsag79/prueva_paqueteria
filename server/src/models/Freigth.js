const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Freigth', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    weigth: {
      type: DataTypes.STRING,
      allowNull: true
    },
    measures: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  { timestamps: false });
};


