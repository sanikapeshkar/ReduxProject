import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ProjectSummaryProps } from "./ProjectSummary.types"

export function ProjectSummary({ name, description, completionRate }: ProjectSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {name}
          <Badge variant="outline">{completionRate}% Complete</Badge>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}