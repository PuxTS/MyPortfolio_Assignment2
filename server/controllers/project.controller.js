import Project from "../models/project.model.js";
import extend from "lodash/extend.js";

const create = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    return res.status(201).json(project);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const list = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const projectByID = async (req, res, next, id) => {
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    req.project = project;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve project" });
  }
};

const read = (req, res) => {
  return res.json(req.project);
};

const update = async (req, res) => {
  try {
    let project = extend(req.project, req.body);
    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await req.project.deleteOne();
    res.json(deleted);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const removeAll = async (req, res) => {
  try {
    const result = await Project.deleteMany({});
    res.json({ message: `${result.deletedCount} projects deleted` });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export default { create, list, projectByID, read, update, remove, removeAll };