

import { productModel } from "../../../dbConnection/models/product.model.js"
import { vendorModel } from "../../../dbConnection/models/vendor.model.js"


export const getAllVendors = async (req , res)=>{
    const data = await vendorModel.findAll({
        include:productModel
    })
    res.json({message:"all vendors : " , data})
}


export const getOneVendor = async (req , res)=>{
    const data = await vendorModel.findByPk(req.params.id)
    res.json({message:"vendor : " , data})
}

export const getVendorByEmail = async (req , res)=>{
    const data = await vendorModel.findOne({where: {email: req.query.email}})
    res.json({message:"vendor : " , data})
}


export const addVendor = async (req , res)=>{
    await vendorModel.create(req.body)
    res.json({message:"new vendor added successfully"})
}


export const updateVendor = async (req , res)=>{
    await vendorModel.update(req.body , {where:{id:req.params.id}})
    res.json({message:"vendor updated successfully"})
}


export const deleteVendor = async (req , res)=>{
    let x = await vendorModel.destroy(req.body , {where:{id:req.params.id}})
    if(x){
        res.json({message:"vendor deleted successfully"})
    }else{
        res.json({message:"vendor not found"})
    }
}