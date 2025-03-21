import express from "express";
import orderItemController from "../controllers/orderItemController";
const router = express.Router();

router.post("/addOrderItem", orderItemController.addOrderItem);
export { router as OrderItemRouter };
