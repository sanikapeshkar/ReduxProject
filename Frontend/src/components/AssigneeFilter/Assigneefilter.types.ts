
export interface AssigneeFilterProps {
  assignees: Assignee[]
  selected: string[]
  onChange: (updatedList: string[]) => void
}

export interface Assignee {
  name: string
  avatar: string
  initials: string
}