import { Request, Response } from "express";
import userService from "../services/userService";
import { error } from "console";
class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { name, email, bio } = req.body;
      const result = await userService.createUser(name, email, bio);
      res.status(200).json({
        message: "created successfully",
        data: result,
      });
    } catch (err) {
      res.status(404).json({
        error: err as Error,
      });
    }
  }
}

export default new UserController();
