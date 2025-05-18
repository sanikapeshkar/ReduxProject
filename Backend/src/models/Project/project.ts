import mongoose, { Schema } from "mongoose";

export interface ProjectDocument extends Document {
    name: string;
    description?: string;
  }
  
  const ProjectSchema = new Schema<ProjectDocument>({
    name: { type: String, required: true },
    description: String,
  });
  
  export const Project = mongoose.model<ProjectDocument>('Project', ProjectSchema);
  