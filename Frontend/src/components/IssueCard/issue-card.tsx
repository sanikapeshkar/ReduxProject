
import { ArrowUp, ArrowDown, Minus, CheckSquare, Bug, AlertCircle } from "lucide-react"
import { IssueCardProps } from "./issuecard.types"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"


const priorityIcons = {
  highest: <ArrowUp className="h-4 w-4 text-red-600" />,
  high: <ArrowUp className="h-4 w-4 text-orange-500" />,
  medium: <Minus className="h-4 w-4 text-yellow-500" />,
  low: <ArrowDown className="h-4 w-4 text-green-500" />,
  lowest: <ArrowDown className="h-4 w-4 text-gray-400" />,
}

const typeIcons = {
  story: <CheckSquare className="h-4 w-4 text-green-600" />,
  task: <CheckSquare className="h-4 w-4 text-blue-600" />,
  bug: <Bug className="h-4 w-4 text-red-600" />,
  epic: <AlertCircle className="h-4 w-4 text-purple-600" />,
}

export function IssueCard({ issue }: IssueCardProps) {
  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {typeIcons[issue.type]}
            <span className="text-sm text-gray-500 font-mono">{issue.id}</span>
          </div>
          {priorityIcons[issue.priority]}
        </div>
        <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">{issue.title}</h4>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {issue.labels.map((label) => (
              <Badge key={label} variant="outline" className="text-xs">
                {label}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">{issue.storyPoints} pts</span>
            <Avatar className="h-6 w-6">
              <AvatarImage src={issue.assignee.avatar} />
              <AvatarFallback className="text-xs">{issue.assignee.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
