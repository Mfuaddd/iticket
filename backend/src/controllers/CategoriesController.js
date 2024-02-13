import { categoriesModel } from "../models/CategoriesModel.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await categoriesModel.find({});
    res.send(categories);
  } catch (error) {
    console.error(error.message);
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoriesModel.findById(id);
    res.send(category);
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};

export const postCategory = async (req, res) => {
  try {
    const { name, endpoint, index } = req.body;
    const newCategory = categoriesModel({ name, endpoint, index });
    await newCategory.save();
    res.send("Got a POST request");
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};

export const putCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, endpoint, index } = req.body;
    await categoriesModel.findByIdAndUpdate(id, { name, endpoint, index });
    res.send("Got a PUT request");
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};

export const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    await categoriesModel.findByIdAndDelete(id);
    res.send("Got a DELETE request");
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};