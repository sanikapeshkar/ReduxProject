import { Assignee } from "../AssigneeFilter/Assigneefilter.types"

export interface Issue {
  id: string
  title: string
  description: string
  type: IssueType
  priority: Priority
  status: Status
  assignee: Assignee
  storyPoints: number
  labels: string[]
}
export type Priority = "highest" | "high" | "medium" | "low" | "lowest"
export type IssueType = "story" | "task" | "bug" | "epic"
export type Status = "backlog" | "todo" | "in-progress" | "in-review" | "done"
interface IssueCardProps {
  issue: Issue;
}
export type { IssueCardProps };
