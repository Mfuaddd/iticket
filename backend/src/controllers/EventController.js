import { categoriesModel } from "../models/CategoriesModel.js";
import { eventModel } from "../models/EventModel.js";

export const getAllEvents = async (req, res) => {
  try {
    const events = await eventModel.find({});
    res.send(events);
  } catch (error) {
    console.error(error.message);
  }
};

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await eventModel.findById(id);
    res.send(event);
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};

export const getEventByCategory = async (req, res) => {
  try {
    const { categoryName } = req.params;
    const categoryId = await categoriesModel.findOne({ endpoint: categoryName })
    if (!categoryId){
      return res.status(404).send({ error: "Category not found" });
    }
    const event = await eventModel.find({ categoryId: categoryId._id }).populate("categoryId");
    console.log(categoryId);
    res.send(event);
  } catch (error) {
    return res.status(401).send({ error: error.message });
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
    return res.status(401).send({ error: error.message });
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
    return res.status(401).send({ error: error.message });
  }
};

export const deleteEventById = async (req, res) => {
  try {
    const { id } = req.params;
    await eventModel.findByIdAndDelete(id);
    res.send("Got a DELETE request");
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};
