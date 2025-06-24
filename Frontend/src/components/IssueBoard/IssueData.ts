import { Issue, Status } from "../IssueCard/issuecard.types";

export const mockIssues: Issue[] = [
  {
    id: "PROJ-1",
    title: "Implement user authentication",
    description: "Add login and registration functionality with JWT tokens",
    type: "story",
    priority: "high",
    status: "in-progress",
    assignee: {
      name: "John Doe",
      avatar: "/placeholder.svg",
      initials: "JD",
    },
    storyPoints: 8,
    labels: ["frontend", "backend"],
  },
  {
    id: "PROJ-2",
    title: "Fix navigation menu bug",
    description: "Menu items are not highlighting correctly on mobile devices",
    type: "bug",
    priority: "medium",
    status: "todo",
    assignee: {
      name: "Jane Smith",
      avatar: "/placeholder.svg",
      initials: "JS",
    },
    storyPoints: 3,
    labels: ["frontend", "mobile"],
  },
  {
    id: "PROJ-3",
    title: "Database optimization",
    description: "Optimize database queries for better performance",
    type: "task",
    priority: "low",
    status: "backlog",
    assignee: {
      name: "Mike Johnson",
      avatar: "/placeholder.svg",
      initials: "MJ",
    },
    storyPoints: 5,
    labels: ["backend", "performance"],
  },
]

export const statusColumns = [
  { id: "backlog", title: "Backlog", color: "bg-gray-100" },
  { id: "todo", title: "To Do", color: "bg-blue-100" },
  { id: "in-progress", title: "In Progress", color: "bg-yellow-100" },
  { id: "in-review", title: "In Review", color: "bg-purple-100" },
  { id: "done", title: "Done", color: "bg-green-100" },
] satisfies { id: Status; title: string; color: string }[]
