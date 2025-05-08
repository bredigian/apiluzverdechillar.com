import { Controller } from "../controllers/categories.controller"
import { Router } from "express"

const router = Router()

router.get("/", Controller.getCategories)

export default router
