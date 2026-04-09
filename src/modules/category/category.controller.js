

import { categoryModel } from "../../../dbConnection/models/Category.model.js"
import { productModel } from "../../../dbConnection/models/product.model.js"


export const getAllCategories = async (req , res)=>{
    const data = await categoryModel.findAll({
        include:productModel
    })
    res.json({message:"all categorys : " , data})
}



export const addCategory = async (req , res)=>{
    await categoryModel.create(req.body)
    res.json({message:"new category added successfully"})
}


export const updateCategory = async (req , res)=>{
    await categoryModel.update(req.body , {where:{id:req.params.id}})
    res.json({message:"category updated successfully"})
}


export const deleteCategory = async (req , res)=>{
    let x = await categoryModel.destroy(req.body , {where:{id:req.params.id}})
    if(x){
        res.json({message:"category deleted successfully"})
    }else{
        res.json({message:"category not found"})
    }
}