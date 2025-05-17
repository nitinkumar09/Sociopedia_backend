import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
export const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI + "/SocialAppDB");
        console.log("Connecte to databse ", connection.connection.host);

    } catch (error) {
        console.log(`Some Error Occured While Connecting To Database:${error}`)
    }
}
