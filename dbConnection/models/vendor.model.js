

import { DataTypes } from "sequelize";
import { sequelize } from "../dbConnection.js";


export const vendorModel = sequelize.define("vendor" , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    phone:{
        type: DataTypes.STRING,
    },
    address:{
        type: DataTypes.STRING,
    }
},{
    timestamps:false
})
