import { Issue, Status } from "../IssueCard/issuecard.types"
export interface IssueColumnProps {
  key : string
  title: string
  color: string
  status: Status
  issues: Issue[]
  moveIssue: (id: string, newStatus: Status) => void
  statuses: { id: Status; title: string }[]
}