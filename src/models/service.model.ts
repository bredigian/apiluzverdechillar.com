import { Schema, model } from "mongoose"

export const ServiceSchema = new Schema({
  type: String,
  description: String,
  cost: Number || null,
  quantity: Number || null,
})

export const Service = model("Service", ServiceSchema, "services")
