import { Controller } from "../controllers/estimates.controller"
import { Router } from "express"

const router = Router()

router.get("/", Controller.getEstimates)
router.post("/", Controller.createEstimate)
router.patch("/", Controller.updateEstimate)
router.delete("/", Controller.deleteEstimate)

export default router
