import { IssueDocument } from "../Issue/issue.types";

export interface ProjectDocument extends Document {
    name: string;
    description?: string;
    issues ?: IssueDocument[];
    createdby : any
  }