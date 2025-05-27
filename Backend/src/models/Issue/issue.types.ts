import { Attachment } from "../Attachments/attachments.model";
import mongoose, { Document, Mongoose, Schema, Types } from 'mongoose';

export interface IssueDocument extends Document {
    title: string;
    description?: string;
    status: 'Open' | 'In Progress' | 'Closed';
    assignee?: {
      id: string;
      name: string;
    };
    createdBy:Types.ObjectId;
    createdAt?: Date;
    attachments?: Attachment[]; 
    comments: Comment[];
    projectId: Types.ObjectId;
  }