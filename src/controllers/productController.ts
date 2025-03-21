import { Request, Response } from "express";
import productService from "../services/productService";
import { error } from "console";
class ProductController {
  async createProduct(req: Request, res: Response) {
    try {
      const { name, price } = req.body;
      const result = await productService.createProduct(name, price);
      res.status(200).json({
        message: "created successfully...",
        data: result,
      });
    } catch (err) {
      res.status(404).json({
        error: err as Error,
      });
    }
  }

  async getHighProduct(req: Request, res: Response) {
    try {
      const result = await productService.getHighPrice();
      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (err) {
      res.status(404).json({
        error: err as Error,
      });
    }
  }
  async getPrice(req: Request, res: Response) {
    try {
      const result = await productService.getPrice();
      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (err) {
      res.status(404).json({
        error: err as Error,
      });
    }
  }
}

export default new ProductController();
