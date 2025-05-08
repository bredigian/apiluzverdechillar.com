import { Service } from "./services.types"

interface Person {
  firstName: string
  lastName: string
}

export interface Estimate {
  id?: string
  person: Person
  from: Date
  to: Date
  services: Service[]
  totalCost: number
  createdAt?: Date
  updatedAt?: Date
}
