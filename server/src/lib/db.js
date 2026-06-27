import mongoose from "mongoose";
import { ENV } from "./env.js";



const connectDB = async () => {
    try {
        await mongoose.connect(
            ENV.DATABASE_URL,
        )
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } catch (error) {
        console.error("Error Connecting to mongodb.")
        process.exit(1)
    }
}


export default connectDB;
























