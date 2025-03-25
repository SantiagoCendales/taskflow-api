import mongoose from "mongoose"
import { config } from "dotenv"

config()

const {
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_INITDB_NAME,
  MONGO_INITDB_HOST,
  MONGO_INITDB_ROOT_PORT
} = process.env

// The host is 'mongo' because that is the name of the service in the docker-compose file
// The port is 27017 because that is the default port for MongoDB
const MONGO_URI = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_INITDB_HOST}:${MONGO_INITDB_ROOT_PORT}/${MONGO_INITDB_NAME}?authSource=admin`

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("Connected to MongoDBb")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
  }
}