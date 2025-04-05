import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the subcription api");
});

app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));
