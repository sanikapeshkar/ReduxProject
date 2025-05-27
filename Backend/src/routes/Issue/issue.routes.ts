import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { Issue } from "../../models/Issue/issue.model";

const router = express.Router();

// GET /issues?projectId=...
router.get("/issues", async (req: Request, res: Response): Promise<any> => {
  try {
    const { projectId } = req.query;

    const filter = projectId ? { projectId } : {};
    const issues = await Issue.find(filter).sort({ createdAt: -1 }); 

    return res.status(200).json(issues);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

// POST /issue/create/:projectId
router.post("/issue/create/:projectId", async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, description, assignee, comments, status } = req.body;
    const { projectId } = req.params;

    if (!mongoose.isValidObjectId(projectId)) {
      return res.status(400).json({ error: "Invalid projectId" });
    }

    const issue = new Issue({
      title,
      description,
      status: status || "Open",
      assignee,
      comments: comments || [],
      projectId: new mongoose.Types.ObjectId(projectId),
    });

    await issue.save();

    return res.status(201).json(issue);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
