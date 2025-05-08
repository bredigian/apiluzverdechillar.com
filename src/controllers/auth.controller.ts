import { Request, Response } from "express"

import { Service as AuthService } from "../services/auth.service"
import { ErrorResponseProps } from "../types/response.types"
import { User } from "../types/users.types"
import { Service as UsersService } from "../services/users.service"
import { sign } from "jsonwebtoken"

export const Controller = {
  signin: async (req: Request, res: Response) => {
    try {
      const payload: User = req.body

      const user = await UsersService.getByUsername(payload.username)
      if (!user) {
        res.status(404).json({
          message: "El usuario no existe.",
          name: "Not Found",
          statusCode: 404,
        })
        return
      }

      const match = await AuthService.verifyPassword(
        payload.password,
        user.password!
      )
      if (!match) {
        res.status(401).json({
          message: "Usuario y/o contraseña inválidos.",
          name: "Unauthorized",
          statusCode: 401,
        })
        return
      }

      const access_token = sign(
        {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
        },
        process.env.JWT_SECRET_KEY!,
        { expiresIn: "30d" }
      )

      res.status(200).json({
        access_token,
        exp: 30,
        _id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      })
    } catch (error) {
      if (error) {
        const e = error as ErrorResponseProps
        res.status(e.code || 500).json({
          statusCode: e.code || 500,
          error: e.error,
          message: e.message,
        })
      }

      res.status(500).json({
        statusCode: 500,
        error: "Internal Server Error",
        message: "Se produjo un error interno. Intente nuevamente mas tarde.",
      })
    }
  },
  verify: async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization?.substring(7)
      if (!token) {
        res.status(401).json({
          message: "El token es requerido.",
          name: "Unauthorized",
          statusCode: 401,
        })
        return
      }

      const authorized = AuthService.verifyToken(token)
      if (!authorized) {
        res.status(401).json({
          message: "El token no es válido o ya caducó.",
          name: "Unauthorized",
          statusCode: 401,
        })
        return
      }

      const { _id, username, firstName, lastName } = AuthService.decodeToken(
        token
      ) as {
        _id: string
        username: string
        firstName: string
        lastName: string
      }

      const user = await UsersService.getByUsername(username)
      if (!user) {
        res.status(404).json({
          message: "El usuario no existe.",
          name: "Not Found",
          statusCode: 404,
        })
        return
      }

      res.status(200).json({
        access_token: token,
        _id,
        username,
        firstName,
        lastName,
      })
    } catch (error) {
      if (error) {
        const e = error as ErrorResponseProps
        res.status(e.code).json({
          statusCode: e.code ?? 500,
          error: e.error,
          message: e.message,
        })
      }

      res.status(500).json({
        statusCode: 500,
        error: "Internal Server Error",
        message: "Se produjo un error interno. Intente nuevamente mas tarde.",
      })
    }
  },
}
