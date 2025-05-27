import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { Project } from "../../models/Project/project.model";
import { User } from "../../models/User/user.model";
import { Issue } from "../../models/Issue/issue.model";

const router = express.Router();

// GET all projects
router.get(
  "/project",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const projects = await Project.find();
      return res.status(200).json(projects);
    } catch (error:any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

// POST a new project for a specific user
router.post(
  "/project/:userId",
  async (req, res): Promise<any> => {
    const userId = req.params.userId;
    const projectData = req.body;

    try {
      const newProject = new Project({ ...projectData, userId });
      await newProject.save();
      return res.status(201).json(newProject);
    } catch (error:any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default router;
