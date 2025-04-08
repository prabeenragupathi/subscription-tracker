import express from "express";
import { PORT } from "./config/env.js";

//? routes
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

//? DB import
import connectToDatabase from "./database/mongodb.js";

//? middleware imports
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";

//* application starts from here
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware)

//! adding externals routes here
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to the subcription api");
});

app.listen(PORT, async () => {
  console.log(`server is listening on port: ${PORT}`);
  await connectToDatabase();
});
