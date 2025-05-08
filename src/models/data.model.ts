import { Schema, model } from "mongoose"

import { CategorySchema } from "../models/category.model"

const DataSchema = new Schema(
  {
    lastUpdated: String,
    category: [CategorySchema],
  },
  { _id: true, timestamps: true }
)

export const Data = model("Data", DataSchema, "data")
