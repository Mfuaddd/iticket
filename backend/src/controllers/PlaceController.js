import { placeModel } from "../models/PlaceModel.js";

export const getAllPlaces = async (req, res) => {
  try {
    const places = await placeModel.find({});
    res.send(places);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const getPlaceById = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await placeModel.findById(id);
    res.send(place);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const postPlace = async (req, res) => {
  try {
    const { name, image, location, phone, mobile, address } = req.body;
    const newPlace = placeModel({
      name,
      image,
      location,
      phone,
      mobile,
      address,
    });
    await newPlace.save();
    res.send("Got a POST request");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const putPlaceById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, location, phone, mobile, address } = req.body;
    await placeModel.findByIdAndUpdate(id, {
      name,
      image,
      location,
      phone,
      mobile,
      address,
    });
    res.send("Got a PUT request");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const deletePlaceById = async (req, res) => {
  try {
    const { id } = req.params;
    await placeModel.findByIdAndDelete(id);
    res.send("Got a DELETE request");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
