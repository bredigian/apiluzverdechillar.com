import { Estimate } from "../models/estimate.model"
import { Estimate as TEstimate } from "../types/estimates.types"

export const Service = {
  createEstimate: async (payload: TEstimate) => {
    return await new Estimate(payload).save()
  },
  getEstimates: async () => {
    return await Estimate.find()
  },
  updateDates: async (_id: string, from: Date, to: Date) => {
    return await Estimate.findByIdAndUpdate(_id, { from, to })
  },
  deleteEstimate: async (_id: string) => {
    return await Estimate.deleteOne({ _id })
  },
}
