import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";

const connect = async () => {
    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect(process.env.MONGO_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log('====================================');
        console.log('Database connected successfully');
        console.log('====================================');
    } catch (error) {
        console.log("error connecting to database", error);
        return error;
    }
}

export default connect;