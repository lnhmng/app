import { DataTypes } from "sequelize";
import sequelize from "../../configs/postgreSQL-connect.js";

const mes_route_node = sequelize.define('mes_route_node', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    route_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    process_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    node_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    node_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_dt: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    creator: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creator_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    last_edited_dt: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    last_editor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_editor_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    org_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    input_flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    output_flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    route_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    schema: 'mes',
    tableName: 'mes_route_node',
    timestamps: false,
});

export default mes_route_node;