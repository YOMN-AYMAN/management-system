
import express from 'express'
import { addProduct, deleteProduct, getAllProducts, getCategoryProducts, getOneProduct, getProductsInRange, getVendorProducts, updateProduct } from './product.controller.js'
export const productRouter = express.Router()



productRouter.get("/" , getAllProducts )
productRouter.get("/" , getProductsInRange )
productRouter.get("/:id" , getOneProduct )
productRouter.get("/vendor/:id" , getVendorProducts )
productRouter.get("/category/:id" , getCategoryProducts)
productRouter.post("/" , addProduct )
productRouter.put("/:id" , updateProduct )
productRouter.delete("/:id" , deleteProduct )