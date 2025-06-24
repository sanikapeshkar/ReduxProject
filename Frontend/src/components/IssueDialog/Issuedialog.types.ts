import { Issue, Status } from "../IssueCard/issuecard.types"

export interface IssueDialogProps {
  issue: Issue
  moveIssue: (id: string, newStatus: Status) => void
  statuses: { id: Status; title: string }[]
}