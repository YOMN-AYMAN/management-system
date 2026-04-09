

import { DataTypes } from "sequelize";
import { sequelize } from "../dbConnection.js";

export const categoryModel =  sequelize.define("category" , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        unique: true
    },
    description:{
        type: DataTypes.STRING,
    }
},{
    timestamps:false
})

