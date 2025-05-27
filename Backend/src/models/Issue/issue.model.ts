import mongoose, { Document, Mongoose, Schema, Types } from 'mongoose';
import { Attachment } from '../Attachments/attachments.model';
import { IssueDocument } from './issue.types';

interface Comment {
  author: string;
  text: string;
  date?: Date;
}

const CommentSchema = new Schema<Comment>({
  author: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const IssueSchema = new Schema<IssueDocument>(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ['Open', 'In Progress', 'Closed'],
      default: 'Open',
    },
    assignee: {
      id: String,
      name: String,
    },
    createdBy : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User"
    }, 
    createdAt: { type: Date, default: Date.now },
    attachments: [{
      type : mongoose.Schema.Types.ObjectId,
      ref:"AttchementSchema"
    }], 
    comments: [CommentSchema],
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
  },
  { timestamps: true }
);

export const Issue = mongoose.model<IssueDocument>('Issue', IssueSchema);
