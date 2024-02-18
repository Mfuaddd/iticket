import { Router } from "express";
import {
  deleteEventById,
  getAllEvents,
  getEventByCategory,
  getEventById,
  postEvent,
  putEventById,
} from "../controllers/EventController.js";
import { verifyAccess } from "../middlewares/AuthMiddleware.js";

export const eventRouter = Router();

eventRouter
  .get("/", getAllEvents)
  .get("/find/:id", getEventByCategory)
  .get("/:id", getEventById)
  .post("/", verifyAccess(["admin"]), postEvent)
  .put("/:id", verifyAccess(["admin"]), putEventById)
  .delete("/:id", verifyAccess(["admin"]), deleteEventById);
