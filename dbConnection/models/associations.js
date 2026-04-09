import { vendorModel } from "./vendor.model.js";
import { productModel } from "./product.model.js";
import { categoryModel } from "./category.model.js";


vendorModel.hasMany(productModel, {
    foreignKey: "vendorId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

productModel.belongsTo(vendorModel, {
    foreignKey: "vendorId"
});


categoryModel.hasMany(productModel, {
    foreignKey: "categoryId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

productModel.belongsTo(categoryModel, {
    foreignKey: "categoryId"
});