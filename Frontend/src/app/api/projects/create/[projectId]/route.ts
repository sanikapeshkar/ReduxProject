import type { NextApiRequest, NextApiResponse } from 'next';
import { connect } from "@/dbconfig/dbconfig";
import Project from '@/model/projectModel';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  connect()

  if (req.method === 'POST') {
    try {
      const {
        projectName,
        projectKey,
        description,
        projectLead,
        teamMembers,
        type,
        defaultIssueTypes,
      } = req.body;

      if (!projectName || !projectKey) {
        return res.status(400).json({ message: "projectName and projectKey are required." });
      }

      const existing = await Project.findOne({ projectKey });
      if (existing) {
        return res.status(400).json({ message: "Project key already exists." });
      }

      const newProject = await Project.create({
        projectName,
        projectKey,
        description,
        projectLead,
        teamMembers,
        type,
        defaultIssueTypes,
      });

      res.status(201).json(newProject);
    } catch (error) {
      console.error("Error creating project:", error);
      res.status(500).json({ message: "Server error." });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
