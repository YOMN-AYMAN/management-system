import { categoryModel } from "../../../dbConnection/models/category.model.js";
import { productModel } from "../../../dbConnection/models/product.model.js";


export const getAllCategories = async (req, res) => {
    try {
        const data = await categoryModel.findAll({
        include: productModel,
        });

        if (data.length === 0) {
        return res.status(404).json({
            message: "no categories found",
        });
        }

        res.json({
        message: "all categories",
        data,
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const addCategory = async (req, res) => {
    try {

        if (!req.body.name) {
        return res.status(400).json({
            message: "name is required",
        });
        }

        const newCategory = await categoryModel.create(req.body);

        res.status(201).json({
        message: "new category added successfully",
        data: newCategory,
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const updateCategory = async (req, res) => {
    try {

        const [updated] = await categoryModel.update(req.body, {
        where: { id: req.params.id },
        });

        if (!updated) {
        return res.status(404).json({
            message: "category not found",
        });
        }

        res.json({
        message: "category updated successfully",
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};


export const deleteCategory = async (req, res) => {
    try {

        const deleted = await categoryModel.destroy({
        where: { id: req.params.id },
        });

        if (!deleted) {
        return res.status(404).json({
            message: "category not found",
        });
        }

        res.json({
        message: "category deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
};