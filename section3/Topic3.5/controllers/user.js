import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({ name, email, password });
  res.json(newUser);
};
