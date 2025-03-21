import express from "express";
import userController from "../controllers/userController";
import productController from "../controllers/productController";
const router = express.Router();

router.post("/createProduct", productController.createProduct);
router.get("/getHighProduct", productController.getHighProduct);
router.get("/getProduct", productController.getPrice);

export { router as productRouter };
