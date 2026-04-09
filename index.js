import express from 'express'
import cors from "cors";
import "dotenv/config";
import { sequelize } from './dbConnection/dbConnection.js'
import {vendorRouter} from "./src/modules/vendor/vendor.router.js"
import {categoryRouter} from "./src/modules/category/category.router.js"
import {productRouter} from "./src/modules/product/product.router.js"
import "./dbConnection/models/associations.js";
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
sequelize.sync({alter:true})
app.use(cors())

app.use("/vendors" , vendorRouter)
app.use("/categories" , categoryRouter)
app.use("/products" , productRouter)



app.get('/', (req, res) => res.send('Hello World!'))
app.use((req, res) => {res.status(404).json({message: "Page Not Found"})})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

export default app
