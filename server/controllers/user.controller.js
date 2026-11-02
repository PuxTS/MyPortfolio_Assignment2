import User from "../models/user.model.js";
import extend from "lodash/extend.js";

const create = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(201).json({ message: "Successfully signed up!", _id: user._id });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const list = async (req, res) => {
  try {
    const users = await User.find().select("name email created updated");
    res.json(users);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve user" });
  }
};

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    let user = extend(req.profile, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await req.profile.deleteOne();
    deleted.hashed_password = undefined;
    deleted.salt = undefined;
    res.json(deleted);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const removeAll = async (req, res) => {
  try {
    const result = await User.deleteMany({});
    res.json({ message: `${result.deletedCount} users deleted` });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export default { create, list, userByID, read, update, remove, removeAll };