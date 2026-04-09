

import { Op } from "sequelize"
import { productModel } from "../../../dbConnection/models/product.model.js"
import { vendorModel } from "../../../dbConnection/models/vendor.model.js"
import { categoryModel } from "../../../dbConnection/models/Category.model.js"


export const getAllProducts = async (req , res)=>{
    const data = await productModel.findAll({
        include: [
            {
                model: vendorModel,
                attributes: ["name"]
            },
            {
                model: categoryModel,
                attributes: ["name"]
            }
        ]
    })
    res.json({message:"all products : " , data})
}


export const getOneProduct = async (req , res)=>{
    const data = await productModel.findByPk(req.params.id)
    res.json({message:"the product : " , data})
}


export const getVendorProducts = async (req , res)=>{
    const data = await productModel.findAll({where: {vendorId: req.params.id}});
    res.json({message:"vendor products : " , data})
}

export const getCategoryProducts = async (req , res)=>{
    const data = await productModel.findAll({where: {categoryId: req.params.id}});
    res.json({message:"category products : " , data})
}


export const getProductsInRange = async (req , res)=>{
    const data = await productModel.findAll({where:{price:{[Op.between]:[req.query.min, req.query.max]}}});
    res.json({message:`products between ${req.query.min} & ${req.query.max} : ` , data})
}


export const addProduct = async (req , res)=>{
    await productModel.create(req.body)
    res.json({message:"new product added successfully"})
}


export const updateProduct = async (req , res)=>{
    await productModel.update(req.body , {where:{id:req.params.id}})
    res.json({message:"Product updated successfully"})
}


export const deleteProduct = async (req , res)=>{
    let x = await productModel.destroy(req.body , {where:{id:req.params.id}})
    if(x){
        res.json({message:"Product deleted successfully"})
    }else{
        res.json({message:"Product not found"})
    }
}