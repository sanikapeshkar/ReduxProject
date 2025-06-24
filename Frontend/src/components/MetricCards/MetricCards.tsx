import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, CheckCircle, Clock, TrendingUp, TrendingDown } from "lucide-react"
import { MetricCardsProps } from "./MetricCards.types"


export function MetricCards({ project, monthlyGrowth }: MetricCardsProps) {
  const pending = project.totalIssues - project.solvedIssues
  const pendingPercent = Math.round((pending / project.totalIssues) * 100)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{project.totalIssues}</div>
          <p className="text-xs text-muted-foreground">{project.createdThisMonth} created this month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Solved Issues</CardTitle>
          <CheckCircle className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">{project.solvedIssues}</div>
          <p className="text-xs text-muted-foreground">{project.solvedThisMonth} solved this month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Issues</CardTitle>
          <Clock className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-500">{pending}</div>
          <p className="text-xs text-muted-foreground">{pendingPercent}% of total</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Growth</CardTitle>
          {monthlyGrowth > 0 ? (
            <TrendingUp className="h-4 w-4 text-red-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-green-500" />
          )}
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${monthlyGrowth > 0 ? "text-red-500" : "text-green-500"}`}>
            {monthlyGrowth > 0 ? "+" : ""}{monthlyGrowth}
          </div>
          <p className="text-xs text-muted-foreground">Created vs Solved difference</p>
        </CardContent>
      </Card>
    </div>
  )
}