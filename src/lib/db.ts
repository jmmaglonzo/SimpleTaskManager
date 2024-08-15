import mongoose from "mongoose";

const DB = process.env.MONGODB_URI as string;
const connect = async () => {
  try {
    await mongoose.connect(DB, {
      dbName: "taskmanager",
    });

    console.log("Database Connected!");
  } catch (error) {
    console.log("Error!", error);
  }
};

export default connect;
