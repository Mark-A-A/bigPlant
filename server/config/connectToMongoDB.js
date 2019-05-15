import mongoose from "mongoose"

const connectToMongoDB = async () => {
  try {
    console.log("trying to connect to Mongo....")
    console.log("...")
    console.log("..")
    console.log(".")
    console.dir("process.env.MONGODB_URI")
    console.dir(process.env.MONGODB_URI )
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bigPlant");
    console.log("=======================")
    console.log("Connected to Mongo")
    console.log("=======================")
  } catch (e) {
    console.error("=======================")
    console.error("Failed Connection to Mongo")
    console.dir(e)
    console.error("=======================")
    throw e
  }
}

module.exports = connectToMongoDB;
