import { Schema, model } from "mongoose"

export const UserSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
})

export const User = model("User", UserSchema, "users")
