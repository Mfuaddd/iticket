import { categoriesModel } from "../models/CategoriesModel.js";
import { eventModel } from "../models/EventModel.js";

export const getAllEvents = async (req, res) => {
  try {
    const events = await eventModel.find({});
    res.send(events);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await eventModel.findById(id);
    res.send(event);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const getEventByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await eventModel.find({ category_id: id });
    res.send(event);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const postEvent = async (req, res) => {
  try {
    const {
      name,
      price,
      date,
      place,
      about,
      age,
      category,
      language,
      img_bg,
      img_fr,
      detail_img,
      slide_img,
    } = req.body;
    const newEvent = eventModel({
      name,
      price,
      date,
      place,
      about,
      age,
      category,
      language,
      img_bg,
      img_fr,
      detail_img,
      slide_img,
    });
    await newEvent.save();
    res.send("Got a POST request");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const putEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      price,
      date,
      place,
      about,
      age,
      category,
      language,
      img_bg,
      img_fr,
      detail_img,
      slide_img,
    } = req.body;
    await eventModel.findByIdAndUpdate(id, {
      name,
      price,
      date,
      place,
      about,
      age,
      category,
      language,
      img_bg,
      img_fr,
      detail_img,
      slide_img,
    });
    res.send("Got a PUT request");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const deleteEventById = async (req, res) => {
  try {
    const { id } = req.params;
    await eventModel.findByIdAndDelete(id);
    res.send("Got a DELETE request");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
