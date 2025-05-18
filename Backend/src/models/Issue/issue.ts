import mongoose, { Document, Schema, Types } from 'mongoose';
import { Attachment, AttachmentModel } from '../Attachments/attachments';

interface Comment {
  author: string;
  text: string;
  date?: Date;
}

export interface IssueDocument extends Document {
  title: string;
  description?: string;
  status: 'Open' | 'In Progress' | 'Closed';
  assignee?: {
    id: string;
    name: string;
  };
  createdAt?: Date;
  attachments?: Attachment[]; 
  comments: Comment[];
  projectId: Types.ObjectId;;
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
    createdAt: { type: Date, default: Date.now },
    attachments: [AttachmentModel], // ✅ fix usage
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
