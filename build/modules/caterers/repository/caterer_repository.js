import { ObjectId } from "mongodb";
import { getClient } from "../../../config/mongo.js";
class CaterersRepository {
    static getAllCaterersRepository = async () => {
        const client = await getClient();
        return client.db("master").collection("caterers").find({}).toArray();
    };
    static getCaterersById = async (id) => {
        const client = await getClient();
        return client
            .db("master")
            .collection("caterers")
            .findOne({ _id: new ObjectId(id) });
    };
    static createCaterersRepository = async (caterer) => {
        const client = await getClient();
        return client.db("master").collection("caterers").insertOne(caterer);
    };
}
export default CaterersRepository;
