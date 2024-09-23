import mongoose from "mongoose"


const connectDB = async () => {
    try {
        console.log(`MONGODB_URI: ${process.env.MONGODB_URI}`);
        console.log(`DB_NAME: ${process.env.DB_NAME}`);

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log(`\n Mongodb connected! DB host: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("Mongodb connection error: ", error);
        process.exit(1);
    }
}

export default connectDB