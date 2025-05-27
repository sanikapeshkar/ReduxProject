import express from "express";
import mongoose from "mongoose";
import { Project } from "../../models/Project/project.model";
import { User } from "../../models/User/user.model";
import { Issue } from "../../models/Issue/issue.model";

const router = express();

router.get("/project", (req, res) => {
  try {
    res.status(200).json(Project.find());
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/project/:userId",  (req, res) => {
 
});

export default router ;