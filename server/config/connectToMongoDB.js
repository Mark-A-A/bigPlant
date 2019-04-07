import mongoose from "mongoose"

export const connectToMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bigPlant");
  } catch (e) {
    console.log("-----Error connecting to Mongo------")
    console.dir(e)
  }
}
