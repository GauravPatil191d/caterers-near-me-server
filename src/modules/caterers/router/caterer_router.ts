import { Router } from "express";
import CatererController from "../controller/caterer_controller.js";

const caterer_router = Router();

caterer_router.get("/caterers", CatererController.getAllCatererController);

caterer_router.get("/caterers/:id", CatererController.getCatererByIdController);

caterer_router.post(
  "/create-caterers",
  CatererController.createCatererController,
);

export default caterer_router;
