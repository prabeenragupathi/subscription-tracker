import { config } from "dotenv";
import process from "process";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, NODE_ENV, MONGODB_URL, JWT_SECRET, JWT_EXPIRES_IN, ARCJET_KEY, ARCKJET_ENV } =
  process.env;
