import { Request, RequestHandler, Response } from "express"

import { ErrorResponseProps } from "../types/response.types"
import { Service } from "../services/estimates.service"

interface ControllerProps {
  createEstimate: RequestHandler
  getEstimates: RequestHandler
  updateEstimate: RequestHandler
  deleteEstimate: RequestHandler
}

export const Controller: ControllerProps = {
  createEstimate: async (req: Request, res: Response) => {
    try {
      const payload = req.body
      const data = await Service.createEstimate(payload)
      res.status(201).json(data)
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
  getEstimates: async (_: Request, res: Response) => {
    try {
      const data = await Service.getEstimates()
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
  updateEstimate: async (req: Request, res: Response) => {
    try {
      const { _id } = req.query
      const updatedData = req.body
      const data = await Service.updateEstimate(_id as string, updatedData)
      res.status(200).json(data)
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
  deleteEstimate: async (req: Request, res: Response) => {
    try {
      const { _id } = req.query
      const data = await Service.deleteEstimate(_id as string)
      res.status(200).json(data)
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
