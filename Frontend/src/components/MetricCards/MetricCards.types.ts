
export type Project = {
  totalIssues: number
  solvedIssues: number
  createdThisMonth: number
  solvedThisMonth: number
}

export type MetricCardsProps = {
  project: Project
  monthlyGrowth: number
}