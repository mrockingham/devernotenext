import mongoose from "mongoose"

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL || "")
    console.log("connected to MongoDb")
  } catch (error) {
    console.log("Mongo connect error", error)
  }
}
