import mongoose, { Schema, model, models } from "mongoose";

const boardSchema = new Schema({
  name: { type: String, required: true },
  filterQuery: { type: String }, 
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }], 
  issues: [{ type: Schema.Types.ObjectId, ref: "Issue" }],    
});

const Board = models.Board || model("Board", boardSchema);