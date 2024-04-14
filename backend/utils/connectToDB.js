import { config } from "dotenv";
import mongoose from "mongoose";

config();

export const connectToDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Connected to MONGODB"));
  } catch (error) {
    console.log(error);
  }
};
