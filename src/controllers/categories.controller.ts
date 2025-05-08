import { Request, RequestHandler, Response } from "express"

import { ErrorResponseProps } from "../types/response.types"
import { Service } from "../services/categories.service"

interface ControllerProps {
  getCategories: RequestHandler
}

export const Controller: ControllerProps = {
  getCategories: async (_: Request, res: Response) => {
    try {
      const data = await Service.getCategories()
      res.status(200).json(data)
    } catch (error) {
      if (error) {
        const e = error as ErrorResponseProps
        res.status(e.code).json({
          statusCode: e.code,
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
