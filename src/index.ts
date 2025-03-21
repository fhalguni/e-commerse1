import express from "express";
import { AppDataSource } from "./config/database";
import { userRouter } from "./routes/userRoutes";
import { orderRouter } from "./routes/orderRoutes";
import { productRouter } from "./routes/productRoutes";
import { OrderItemRouter } from "./routes/addOrderItemRoutes";

const app = express();

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err: any) => console.log("connection err:", err));

app.use("/", userRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);
app.use("/", OrderItemRouter);
app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
