import { Schema, model } from "mongoose"

export const ServiceSchema = new Schema({
  category: String || null,
  type: String,
  description: String,
  cost: Number || null,
  quantity: Number || null,
})

export const Service = model("Service", ServiceSchema, "services")
