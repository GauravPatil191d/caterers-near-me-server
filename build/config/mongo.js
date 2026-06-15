import { MongoClient } from "mongodb";
let client;
export const connectMongo = async () => {
    try {
        const uri = process.env.MONGO_URI;
        client = new MongoClient(uri);
        await client.connect();
        console.log("MongoDB Connected");
    }
    catch (error) {
        console.log("Unable to connect MongoDB", error);
        process.exit(1);
    }
};
export const getClient = async () => {
    if (!client) {
        throw new Error("MongoDB client not initialized. Call connectMongo() first.");
    }
    return client;
};
