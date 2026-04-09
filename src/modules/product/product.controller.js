

import { Op } from "sequelize";
import { productModel } from "../../../dbConnection/models/product.model.js";
import { vendorModel } from "../../../dbConnection/models/vendor.model.js";
import { categoryModel } from "../../../dbConnection/models/category.model.js";


export const getAllProducts = async (req, res) => {
    try {
        const data = await productModel.findAll({
        include: [
            {
            model: vendorModel,
            attributes: ["name"],
            },
            {
            model: categoryModel,
            attributes: ["name"],
            },
        ],
        });

        if (data.length === 0) {
        return res.status(404).json({
            message: "no products found",
        });
        }

        res.json({
        message: "all products",
        data,
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const getOneProduct = async (req, res) => {
    try {
        const data = await productModel.findByPk(req.params.id);

        if (!data) {
        return res.status(404).json({
            message: "product not found",
        });
        }

        res.json({
        message: "product",
        data,
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const getVendorProducts = async (req, res) => {
    try {
        const data = await productModel.findAll({
        where: { vendorId: req.params.id },
        });

        if (data.length === 0) {
        return res.status(404).json({
            message: "no products for this vendor",
        });
        }

        res.json({
        message: "vendor products",
        data,
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const getCategoryProducts = async (req, res) => {
    try {
        const data = await productModel.findAll({
        where: { categoryId: req.params.id },
        });

        if (data.length === 0) {
        return res.status(404).json({
            message: "no products for this category",
        });
        }

        res.json({
        message: "category products",
        data,
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const getProductsInRange = async (req, res) => {
    try {

        if (!req.query.min || !req.query.max) {
        return res.status(400).json({
            message: "min and max price are required",
        });
        }

        const data = await productModel.findAll({
        where: {
            price: {
            [Op.between]: [req.query.min, req.query.max],
            },
        },
        });

        if (data.length === 0) {
        return res.status(404).json({
            message: "no products in this price range",
        });
        }

        res.json({
        message: `products between ${req.query.min} & ${req.query.max}`,
        data,
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const addProduct = async (req, res) => {
    try {

        const { name, price, vendorId, categoryId } = req.body;

        if (!name || !price || !vendorId || !categoryId) {
        return res.status(400).json({
            message: "name, price, vendorId and categoryId are required",
        });
        }

        const newProduct = await productModel.create(req.body);

        res.status(201).json({
        message: "new product added successfully",
        data: newProduct,
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const updateProduct = async (req, res) => {
    try {

        const [updated] = await productModel.update(req.body, {
        where: { id: req.params.id },
        });

        if (!updated) {
        return res.status(404).json({
            message: "product not found",
        });
        }

        res.json({
        message: "product updated successfully",
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const deleteProduct = async (req, res) => {
    try {

        const deleted = await productModel.destroy({
        where: { id: req.params.id },
        });

        if (!deleted) {
        return res.status(404).json({
            message: "product not found",
        });
        }

        res.json({
        message: "product deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};