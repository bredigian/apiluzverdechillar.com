import { Estimate } from "../models/estimate.model"
import { Estimate as TEstimate } from "../types/estimates.types"

export const Service = {
  createEstimate: async (payload: TEstimate) => {
    return await new Estimate(payload).save()
  },
  getEstimates: async () => {
    return await Estimate.find({}).sort({ createdAt: -1 })
  },
  updateEstimate: async (_id: string, payload: TEstimate) => {
    return await Estimate.findByIdAndUpdate(_id, payload)
  },
  deleteEstimate: async (_id: string) => {
    return await Estimate.deleteOne({ _id })
  },
}
