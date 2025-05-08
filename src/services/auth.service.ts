import { decode, verify } from "jsonwebtoken"

import { compare } from "bcrypt"

export const Service = {
  verifyPassword: async (password: string, hash: string) =>
    await compare(password, hash),
  verifyToken: (token: string) => verify(token, process.env.JWT_SECRET_KEY!),
  decodeToken: (token: string) => decode(token),
}
