import mongoose, { Schema } from "mongoose";

export interface Attachment {
  filename: string;
  filetype: string;
  url: string;
  uploadedAt?: Date;
}

const AttachmentSchema = new Schema<Attachment>({
  filename: { type: String, required: true },
  filetype: { type: String },
  url: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

export const AttachmentModel= mongoose.model<Attachment>('AttchementSchema',AttachmentSchema)