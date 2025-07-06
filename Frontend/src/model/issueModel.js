import mongoose, { Schema, model, models } from "mongoose";
import User from "./userModel";

const IssueSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ["bug", "feature", "improvement", "task", "documentation"],
    default: "task",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high", "urgent"],
    default: "medium",
  },
  dueDate: {
    type: Date,
    default: null,
  },
  description: {
    type: String,
    default: "",
  },
  labels: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    enum: ["open", "in progress", "closed", "on hold"],
    default: "open",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  assignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    default: null,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

IssueSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const Issue = models.Issue || model("Issue", IssueSchema);
export default Issue;
