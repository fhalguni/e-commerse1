import express from "express";
import orderController from "../controllers/orderController";
const router = express.Router();
router.post("/createOrder", orderController.createOrder);

export { router as orderRouter };
