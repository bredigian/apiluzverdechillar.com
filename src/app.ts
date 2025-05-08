import { config } from "dotenv"
import cors from "cors"
import express from "express"

import { type Express as TExpress } from "express"
import { DateTime } from "luxon"
import { $connect } from "./db"
import { authRoutes, categoriesRoutes, estimatesRoutes } from "./routes"

config()

export default function App(app: TExpress) {
  app.use(cors())
  app.use(express.json())

  $connect()

  app.get("/", (_, res) => {
    res.json({
      message: "Luz Verde Chillar",
      timestamp: DateTime.now().toISO(),
    })
  })

  app.use("/v1/categories", categoriesRoutes)
  app.use("/v1/estimates", estimatesRoutes)
  app.use("/v1/auth", authRoutes)

  return app
}
