import { Router } from "express";
import { verifyAccess } from "../middlewares/AuthMiddleware.js";
import {
  deletePlaceById,
  getAllPlaces,
  getPlaceById,
  postPlace,
  putPlaceById,
} from "../controllers/PlaceController.js";

export const placeRouter = Router();

placeRouter
  .get("/", getAllPlaces)
  .get("/:id", getPlaceById)
  .post("/", verifyAccess(["admin"]), postPlace)
  .put("/:id", verifyAccess(["admin"]), putPlaceById)
  .delete("/:id", verifyAccess(["admin"]), deletePlaceById);
