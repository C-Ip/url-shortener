import mongoose from 'mongoose';

mongoose.set("strict", true);
const uri = process.env.LOCAL_MONGODB_URI;

export default async function connectMongoDB() {
    try {
        await mongoose.connect(uri);
    } catch (e) {
        console.log(e);
    }
}