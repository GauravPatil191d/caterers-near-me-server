import { Collection, ObjectId } from "mongodb";
import { getClient } from "../../../config/mongo.js";

import CaterersModel from "../models/caterer_model.js";

class CaterersRepository {
  static getAllCaterersRepository = async () => {
    const client = await getClient();
    return client.db("master").collection("caterers").find({}).toArray();
  };

  static getCaterersById = async (id: string) => {
    const client = await getClient();
    return client
      .db("master")
      .collection("caterers")
      .findOne({ _id: new ObjectId(id) });
  };

  static createCaterersRepository = async (caterer: CaterersModel) => {
    const client = await getClient();
    return client.db("master").collection("caterers").insertOne(caterer);
  };
}

export default CaterersRepository;
