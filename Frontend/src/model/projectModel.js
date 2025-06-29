import mongoose, { Schema, model, models } from "mongoose";

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    projectKey: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      minlength: 2,
      maxlength: 10,
    },
    description: {
      type: String,
      default: "",
    },
    projectLead: {
      type: String, 
    },
    teamMembers: [
      {
        type: String, 
      },
    ],
    type: {
      type: String,
      enum: ["software", "business", "marketing", "devops"],
      default: "software",
    },
    defaultIssueTypes: {
      type: [String],
      default: ["Story", "Task", "Bug"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } 
);

const Project = models.Project || model("Project", projectSchema);

export default Project;
