

import { productModel } from "../../../dbConnection/models/product.model.js";
import { vendorModel } from "../../../dbConnection/models/vendor.model.js";


export const getAllVendors = async (req, res) => {
    try {
        const data = await vendorModel.findAll({
        include: productModel,
        });

        if (data.length === 0) {
        return res.status(404).json({
            message: "no vendors found",
        });
        }

        res.json({
        message: "all vendors",
        data,
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const getOneVendor = async (req, res) => {
    try {
        const data = await vendorModel.findByPk(req.params.id);

        if (!data) {
        return res.status(404).json({
            message: "vendor not found",
        });
        }

        res.json({
        message: "vendor",
        data,
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const getVendorByEmail = async (req, res) => {
    try {

        if (!req.query.email) {
        return res.status(400).json({
            message: "email is required",
        });
        }

        const data = await vendorModel.findOne({
        where: { email: req.query.email },
        });

        if (!data) {
        return res.status(404).json({
            message: "vendor not found",
        });
        }

        res.json({
        message: "vendor",
        data,
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const addVendor = async (req, res) => {
    try {

        if (!req.body.name) {
        return res.status(400).json({
            message: "name is required",
        });
        }

        const newVendor = await vendorModel.create(req.body);

        res.status(201).json({
        message: "new vendor added successfully",
        data: newVendor,
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const updateVendor = async (req, res) => {
    try {

        const [updated] = await vendorModel.update(req.body, {
        where: { id: req.params.id },
        });

        if (!updated) {
        return res.status(404).json({
            message: "vendor not found",
        });
        }

        res.json({
        message: "vendor updated successfully",
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const deleteVendor = async (req, res) => {
    try {

        const deleted = await vendorModel.destroy({
        where: { id: req.params.id },
        });

        if (!deleted) {
        return res.status(404).json({
            message: "vendor not found",
        });
        }

        res.json({
        message: "vendor deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};