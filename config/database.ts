import mongoose from "mongoose"

let connected = false

export const connectDB = async (): Promise<void> => {
    mongoose.set('strictQuery', true) // Ensures only fields specefied in the schema will be saved to the DB

    // If the database is already connected, don't connect again
    if (connected) {
        console.log('MongoDB is already connected')
        return;
    }

    // Connect to MongoDB
    try {
        const uri = process.env.MONGODB_URI

        if (!uri) {
            throw new Error("MONGODB_URI is not defined")
        }

        await mongoose.connect(uri)

        connected = true
        console.log("Success! MongoDB connected")

    } catch (error) {
        console.error("MongoDB connection error:", error)
        process.exit(1)
    }
}