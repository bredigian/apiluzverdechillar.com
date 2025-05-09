import { $disconnect } from "./db"
import App from "./app"
import { DateTime } from "luxon"
import Express from "express"

const server = Express()
const app = App(server)

const PORT = process.env.PORT ?? 4422

app.listen(PORT, () =>
  console.log(`Server running at PORT ${PORT} at ${DateTime.now().toHTTP()}`)
)

process.on("SIGINT", async () => {
  await $disconnect()
  process.exit(0)
})

export default app
