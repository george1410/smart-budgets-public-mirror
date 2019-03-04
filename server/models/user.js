module.exports = (sequelize, DataTypes) => (
  sequelize.define('user', {
    userId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    period: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: 'MONTH',
    },
  },
  {
    tableName: 'users',
    timestamps: false,
  })
);
