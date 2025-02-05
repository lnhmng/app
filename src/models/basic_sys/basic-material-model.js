import { DataTypes } from 'sequelize';
import sequelize from '../../configs/postgreSQL-connect.js';

const Basic_Material = sequelize.define('basic_material', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  material_no: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  schema: 'basic_sys',
  tableName: 'basic_material',
  timestamps: false,
});

export default Basic_Material;
