// import { Sequelize } from 'sequelize';


// export const sequelize = new Sequelize('management_api', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// sequelize.authenticate().then(()=>{
//     console.log("database connected successfully")
// }).catch((error)=>{
//     console.error("connection failed => " , error)
// })

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "mysql"
});

sequelize.authenticate()
    .then(() => console.log("database connected successfully"))
    .catch((error) => console.error("connection failed => ", error));