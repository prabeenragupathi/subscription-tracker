import express from "express";
import { PORT } from "./config/env.js";

//? routes
import authRouter from "./routes/auth.routes.js";

const app = express();

//! adding externals routes here

app.get("/", (req, res) => {
  res.send("Welcome to the subcription api");
});

app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));
