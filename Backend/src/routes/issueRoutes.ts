import express from "express";
import { Issue } from "../models/Issue/issue";

const router = express.Router();

//GET issues
router.get("/issues", async (req, res) => {
  try {
    const issues = await Issue.find();
    res.status(201).json(issues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//GET /issues?projectId=665e3e7f8f3a0b001cfdd988
router.get("/issues", async (req, res) => {
  try {
    const { projectId } = req.query;
    const filter = projectId ? { projectId } : {};
    const issues = Issue.find(filter).sort({ createdAt: -1 });
    res.send(200).json(issues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Issue by projectId
router.post("/issue/create/:projectId", async (req, res) => {
  try {
    const { projectId } = req.params;
    const { title, description, assignee, comments } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required." });
    }
    const issue = new Issue({
      title,
      description,
      status: status || "Open",
      assignee,
      comments: comments || [],
      projectId: projectId,
    });
    await issue.save();
    res.status(201).json(issue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
