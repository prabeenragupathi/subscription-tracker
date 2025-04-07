import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.send({ message: "Sign up" });
});

authRouter.post("/sign-out", (req, res) => {
  res.send({ message: "Signed Out" });
});

authRouter.post("/sign-in", (req, res) => {
  res.send({ message: "Signed in" });
});
export default authRouter;
