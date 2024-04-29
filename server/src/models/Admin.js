const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Admin', {
    id: {
      // type: DataTypes.UUID,
      // defaultValue: UUIDV4,
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true,
      unique: true,
    }
  },
  { timestamps: false });
};


