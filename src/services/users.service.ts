import { User } from "../models/user.model"

export const Service = {
  getByUsername: async (username: string) => {
    return User.findOne({ username })
  },
}
