import mongoose from 'mongoose';
import 'dotenv/config'

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(`Could not connect to MongoDB: ${error}`);
    }
}

export default connectToMongoDB;