import mongoose from "mongoose";
import { MONGODB_URL, NODE_ENV } from "../config/env.js";
import process from "process";

if (!MONGODB_URL) {
  console.error(
    "Please define the MONGODB_URL environment variable insde .env.<development/>production>.local"
  );
  process.exit(1);
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URL);

    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(`connected to database in ${NODE_ENV} mode`);
  } catch (err) {
    console.error("error connecting to db:", err);
    process.exit(1);
  }
};

export default connectToDatabase;
