
export interface AssigneeFilterProps {
  assignees: Assignee[]
  selected: string[]
  onChange: (updatedList: string[]) => void
}

export interface Assignee {
  username: string
  avatar: string
  initials: string
}