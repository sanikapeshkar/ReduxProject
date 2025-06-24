
export const projectData = {
  "project-1": {
    name: "E-commerce Platform",
    description: "Main e-commerce application",
    totalIssues: 245,
    solvedIssues: 189,
    createdThisMonth: 32,
    solvedThisMonth: 28,
    monthlyData: [
      { month: "Jan", created: 25, solved: 20, pending: 5 },
      { month: "Feb", created: 30, solved: 28, pending: 7 },
      { month: "Mar", created: 28, solved: 25, pending: 10 },
      { month: "Apr", created: 35, solved: 30, pending: 15 },
      { month: "May", created: 32, solved: 28, pending: 19 },
      { month: "Jun", created: 29, solved: 31, pending: 17 },
    ],
    weeklyTrend: [
      { week: "Week 1", created: 8, solved: 6 },
      { week: "Week 2", created: 12, solved: 10 },
      { week: "Week 3", created: 7, solved: 9 },
      { week: "Week 4", created: 5, solved: 3 },
    ],
    statusDistribution: [
      { name: "Completed", value: 189, color: "#22c55e" },
      { name: "In Progress", value: 34, color: "#f59e0b" },
      { name: "To Do", value: 22, color: "#3b82f6" },
    ],
    priorityBreakdown: [
      { priority: "High", created: 45, solved: 38 },
      { priority: "Medium", created: 120, solved: 95 },
      { priority: "Low", created: 80, solved: 56 },
    ],
  },
  "project-2": {
    name: "Mobile App",
    description: "iOS and Android mobile application",
    totalIssues: 156,
    solvedIssues: 134,
    createdThisMonth: 18,
    solvedThisMonth: 22,
    monthlyData: [
      { month: "Jan", created: 15, solved: 18, pending: 2 },
      { month: "Feb", created: 20, solved: 16, pending: 6 },
      { month: "Mar", created: 18, solved: 20, pending: 4 },
      { month: "Apr", created: 22, solved: 19, pending: 7 },
      { month: "May", created: 18, solved: 22, pending: 3 },
      { month: "Jun", created: 16, solved: 18, pending: 1 },
    ],
    weeklyTrend: [
      { week: "Week 1", created: 4, solved: 6 },
      { week: "Week 2", created: 6, solved: 5 },
      { week: "Week 3", created: 5, solved: 7 },
      { week: "Week 4", created: 3, solved: 4 },
    ],
    statusDistribution: [
      { name: "Completed", value: 134, color: "#22c55e" },
      { name: "In Progress", value: 15, color: "#f59e0b" },
      { name: "To Do", value: 7, color: "#3b82f6" },
    ],
    priorityBreakdown: [
      { priority: "High", created: 28, solved: 25 },
      { priority: "Medium", created: 78, solved: 69 },
      { priority: "Low", created: 50, solved: 40 },
    ],
  },
  "project-3": {
    name: "Analytics Dashboard",
    description: "Business intelligence and reporting",
    totalIssues: 89,
    solvedIssues: 67,
    createdThisMonth: 12,
    solvedThisMonth: 15,
    monthlyData: [
      { month: "Jan", created: 10, solved: 8, pending: 2 },
      { month: "Feb", created: 14, solved: 12, pending: 4 },
      { month: "Mar", created: 11, solved: 13, pending: 2 },
      { month: "Apr", created: 16, solved: 14, pending: 4 },
      { month: "May", created: 12, solved: 15, pending: 1 },
      { month: "Jun", created: 9, solved: 11, pending: -1 },
    ],
    weeklyTrend: [
      { week: "Week 1", created: 3, solved: 4 },
      { week: "Week 2", created: 4, solved: 3 },
      { week: "Week 3", created: 3, solved: 5 },
      { week: "Week 4", created: 2, solved: 3 },
    ],
    statusDistribution: [
      { name: "Completed", value: 67, color: "#22c55e" },
      { name: "In Progress", value: 12, color: "#f59e0b" },
      { name: "To Do", value: 10, color: "#3b82f6" },
    ],
    priorityBreakdown: [
      { priority: "High", created: 15, solved: 12 },
      { priority: "Medium", created: 45, solved: 35 },
      { priority: "Low", created: 29, solved: 20 },
    ],
  },
}

export const chartConfig = {
  created: {
    label: "Created",
    color: "hsl(var(--chart-1))",
  },
  solved: {
    label: "Solved",
    color: "hsl(var(--chart-2))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-3))",
  },
}
