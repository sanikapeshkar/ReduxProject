import {
  AreaChart, CartesianGrid, XAxis, YAxis, Area,
  LineChart, Line,
  PieChart, Pie, Cell,
  BarChart, Bar
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"



export function ChartsGrid({ project, chartConfig }: { project: any, chartConfig: any }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Monthly Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Trend</CardTitle>
          <CardDescription>Created vs Solved issues over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <AreaChart data={project.monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={({ payload }) => <ChartLegendContent payload={payload} />} />
              <Area type="monotone" dataKey="created" stackId="1" stroke="var(--color-created)" fill="var(--color-created)" fillOpacity={0.6} />
              <Area type="monotone" dataKey="solved" stackId="2" stroke="var(--color-solved)" fill="var(--color-solved)" fillOpacity={0.6} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Weekly Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Performance</CardTitle>
          <CardDescription>Recent 4 weeks activity</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <LineChart data={project.weeklyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={({ payload }) => <ChartLegendContent payload={payload} />} />
              <Line type="monotone" dataKey="created" stroke="var(--color-created)" strokeWidth={3} dot={{ fill: "var(--color-created)", strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="solved" stroke="var(--color-solved)" strokeWidth={3} dot={{ fill: "var(--color-solved)", strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Status Pie */}
      <Card>
        <CardHeader>
          <CardTitle>Issue Status Distribution</CardTitle>
          <CardDescription>Current status breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <PieChart>
              <Pie data={project.statusDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                {project.statusDistribution.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload
                  return (
                    <div className="bg-white p-3 border rounded-lg shadow-lg">
                      <p className="font-medium">{data.name}</p>
                      <p className="text-sm text-gray-600">{data.value} issues</p>
                    </div>
                  )
                }
                return null
              }} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>


      {/* Priority Bar */}
      <Card>
        <CardHeader>
          <CardTitle>Priority Breakdown</CardTitle>
          <CardDescription>Issues by priority level</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <BarChart data={project.priorityBreakdown}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="priority" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={({ payload }) => <ChartLegendContent payload={payload} />} />
              <Bar dataKey="created" fill="var(--color-created)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="solved" fill="var(--color-solved)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}