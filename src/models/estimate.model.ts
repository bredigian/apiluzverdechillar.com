import { Schema, model } from "mongoose"

import { ServiceSchema } from "./service.model"

export const EstimateSchema = new Schema(
  {
    person: {
      firstName: String,
      lastName: String,
    },
    from: Date,
    to: Date,
    services: [ServiceSchema],
    totalCost: Number,
  },
  { _id: true, timestamps: true }
)

export const Estimate = model("Estimate", EstimateSchema, "estimates")
