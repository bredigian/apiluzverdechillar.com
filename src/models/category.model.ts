import { Schema, model } from "mongoose"

import { ServiceSchema } from "./service.model"

export const CategorySchema = new Schema(
  {
    name: String,
    services: [ServiceSchema],
  },
  { _id: true, timestamps: true }
)

export const Category = model("Category", CategorySchema, "categories")
