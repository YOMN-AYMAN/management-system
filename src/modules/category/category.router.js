

import express from 'express';
import { addCategory, deleteCategory, getAllCategories, updateCategory } from './category.controller.js'
export const categoryRouter = express.Router()


categoryRouter.get("/" , getAllCategories )
categoryRouter.post("/" , addCategory )
categoryRouter.put("/:id" , updateCategory )
categoryRouter.delete("/:id" , deleteCategory )