import { Schema, model } from "mongoose"

export const ServiceSchema = new Schema({
  id: String || null,
  category: String || null,
  type: String,
  description: String,
  cost: Number || null,
  originalCost: Number || null,
  quantity: Number || null,
})

export const Service = model("Service", ServiceSchema, "services")
