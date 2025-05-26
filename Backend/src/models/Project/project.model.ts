import mongoose, { Schema } from "mongoose";
import { ProjectDocument } from "./project.types";
import { Issue } from "../Issue/issue.model";

const ProjectSchema = new Schema<ProjectDocument>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    createdby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    issues: [{ type: mongoose.Schema.Types.ObjectId, ref: "Issue" }],
  },
  { timestamps: true }
);

export const Project = mongoose.model<ProjectDocument>(
  "Project",
  ProjectSchema
);
