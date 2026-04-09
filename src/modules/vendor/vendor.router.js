
import express from 'express'
import { addVendor, deleteVendor, getAllVendors, getOneVendor, getVendorByEmail, updateVendor } from './vendor.controller.js'
export const vendorRouter = express.Router()



vendorRouter.get("/" , getAllVendors )
vendorRouter.get("/", getVendorByEmail)
vendorRouter.get("/:id" , getOneVendor )
vendorRouter.post("/" , addVendor )
vendorRouter.put("/:id" , updateVendor )
vendorRouter.delete("/:id" , deleteVendor )