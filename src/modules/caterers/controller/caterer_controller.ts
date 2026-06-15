import { Request, Response } from "express";
import CaterersService from "../service/caterer_service.js";
import { error } from "node:console";

export default class CatererController {
  static getAllCatererController = async (req: Request, res: Response) => {
    try {
      const data = await CaterersService.getAllCaterers();

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  static getCatererByIdController = async (req: Request, res: Response) => {
    try {
      const data = await CaterersService.getCaterersByOd(
        req.params.id as string,
      );

      return res.status(200).json({
        sucess: true,
        data,
      });
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  };

  static createCatererController = async (req: Request, res: Response) => {
    try {
      const data = await CaterersService.createCatererService(req.body);

      return res.status(201).json({
        success: true,
        data,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
}
