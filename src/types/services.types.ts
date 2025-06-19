export interface Service {
  _id?: string
  id?: string
  type: string
  description: string
  cost: number | null
  originalCost: number | null
  quantity?: number
}
