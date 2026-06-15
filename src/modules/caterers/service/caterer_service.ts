import { error } from "node:console";
import CaterersModel from "../models/caterer_model.js";
import CaterersRepository from "../repository/caterer_repository.js";

export default class CaterersService {
  // Get all caterers
  static getAllCaterers = async () => {
    return await CaterersRepository.getAllCaterersRepository();
  };

  //   get caterere by id
  static getCaterersByOd = async (id: string) => {
    if (!id) {
      throw new Error("caterer id requied");
    }

    const caterer = await CaterersRepository.getCaterersById(id);

    if (!caterer) {
      throw new Error("No caterer found of matching id");
    }

    return caterer;
  };

  //   create Caterer
  static createCatererService = async (body: any) => {
    const { name, location, price_per_plate, cuisiness, rating } = body;

    if (!name) {
      throw new Error("Name is required");
    }

    if (!location) {
      throw new Error("Location is required");
    }

    if (!price_per_plate) {
      throw new Error("Price per plate is required");
    }

    if (!cuisiness) {
      throw new Error("Cuisines must be an array");
    }

    if (typeof rating !== "number") {
      throw new Error("Rating must be a number");
    }

    const caterer = new CaterersModel({
      name,
      location,
      price_per_plate,
      cuisiness,
      rating,
    });

    const result = await CaterersRepository.createCaterersRepository(caterer);

    return {
      inserted_id: result.insertedId,
      ...caterer,
    };
  };
}
