import express from "express";
import { Issue } from "../../models/Issue/issue.model";
import mongoose from 'mongoose'
const router = express.Router();


//GET /issues?projectId=665e3e7f8f3a0b001cfdd988
router.get("/issues", async (req, res) => {
  try {
    const { projectId } = req.query;
    const filter = projectId ? { projectId } : {};
    const issues = Issue.find(filter).sort({ createdAt: -1 });
    res.send(200).json(issues);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

// Create Issue by projectId
router.post("/issue/create/:projectId", async (req, res) => {
try{
const { title, description, assignee, comments, status } = req.body;
const {projectId} = req.params ;
const objectId = new mongoose.Types.ObjectId(projectId);

const issue = new Issue({
  title,
  description,
  status : status || 'Open',
  assignee,
  comments: comments || [],
  projectId : objectId 
})
await issue.save()
res.status(200).json(issue);
}
catch(error){
 res.status(500).json({error:error})
}
});

export default router;