

import { DataTypes } from "sequelize";
import { sequelize } from "../dbConnection.js";


export const productModel = sequelize.define("product" , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
    },
    price:{
        type: DataTypes.FLOAT,
    },
    stock:{
        type:DataTypes.INTEGER,
    }
},{
    timestamps:false
})


