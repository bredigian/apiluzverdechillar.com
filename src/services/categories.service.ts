import { Category } from "../models/category.model"

export const Service = {
  getCategories: async () => {
    return await Category.find()
  },
}
