import mongoose from "mongoose"

const { connect, connection, disconnect } = mongoose

let IS_CONNECTED = false

export const $connect = async () => {
  const DATABASE_URL = process.env.DATABASE_URL!

  if (IS_CONNECTED) return

  await connect(DATABASE_URL, { dbName: "luzverdechillar-prices" })
  IS_CONNECTED = true
}

export const $disconnect = async () => {
  if (!IS_CONNECTED) return

  await disconnect()
  IS_CONNECTED = false
}

connection.on("connected", () => console.log("Connected to MongoDB ✅"))
connection.on("error", () =>
  console.log("Unavailable connection to MongoDB ❌")
)
