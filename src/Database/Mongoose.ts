import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://kalaisharma05052003:YalipZ2CmAWG5xoV@newsmanagercluster.sxftplk.mongodb.net/NewsManager';
const newsSchema = new mongoose.Schema({
    fullName: String,
    address: String,
    email: String,
    mobileNumber: String,
    feedback: String,
    country: String,
    state:String
},{collection:"UserFeedback"});// Explicitly specify the collection name to avoid creating a pluralized collection name

export const News = mongoose.model('UserFeedback', newsSchema);
//mongodb://localhost:27017/NewsManager

const connectDB = async (): Promise<typeof mongoose> => {
    try {
        const connection = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);
        console.log('MongoDB connected successfully');
        return connection;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
