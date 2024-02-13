import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
import "dotenv/config";
import { eventRouter } from "./src/routers/EventRouter.js";
import { userRouter } from "./src/routers/UserRouter.js";
import { authRouter } from "./src/routers/AuthRouter.js";
import { categoriesRouter } from "./src/routers/CategoriesRouter.js";
const app = express();
const port = process.env.PORT;
const dbKey = process.env.DB_KEY;

app.use(express.json());
app.use(cors());

app.use("/events", eventRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/categories", categoriesRouter);

await mongoose
  .connect(dbKey)
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not Connected"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
