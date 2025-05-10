import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connection established");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/Portfolio`);
};

export default connectDB;
