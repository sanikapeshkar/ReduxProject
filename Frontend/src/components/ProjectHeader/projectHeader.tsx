
import { CalendarIcon } from "lucide-react"
import { ProjectHeaderProps } from "./projectHeader.types"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"


export function ProjectHeader({ selectedProject, setSelectedProject, timeRange, setTimeRange }: ProjectHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Project Dashboard</h1>
        <p className="text-gray-600 mt-1">Track your project progress and team performance</p>
      </div>

      <div className="flex gap-3">
        <Select value={selectedProject} onValueChange={setSelectedProject}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select project" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="project-1">E-commerce Platform</SelectItem>
            <SelectItem value="project-2">Mobile App</SelectItem>
            <SelectItem value="project-3">Analytics Dashboard</SelectItem>
          </SelectContent>
        </Select>

        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[140px]">
            <CalendarIcon className="h-4 w-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1month">Last Month</SelectItem>
            <SelectItem value="3months">Last 3 Months</SelectItem>
            <SelectItem value="6months">Last 6 Months</SelectItem>
            <SelectItem value="1year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}