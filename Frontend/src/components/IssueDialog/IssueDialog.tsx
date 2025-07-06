import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IssueDialogProps } from "./Issuedialog.types"
import { IssueCard } from "../IssueCard/issue-card"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Badge } from "../ui/badge"
import { Status } from "../IssueCard/issuecard.types"


export function IssueDialog({ issue, moveIssue, statuses }: IssueDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <IssueCard issue={issue} />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {issue._id}: {issue?.title}
          </DialogTitle>
          <DialogDescription>Issue details and management</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" value={issue.description} readOnly className="mt-1" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Status</Label>
              <Select
                value={issue.status}
                onValueChange={(value) => moveIssue(issue._id, value as Status)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status.id} value={status.id}>
                      {status.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Story Points</Label>
              <div className="mt-1 p-2 border rounded">{issue?.storyPoints}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Assignee</Label>
              <div className="flex items-center gap-2 mt-1 p-2 border rounded">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={issue.assignee.avatar} />
                  <AvatarFallback className="text-xs">{issue.assignee.initials}</AvatarFallback>
                </Avatar>
                <span>{issue?.assignee.username}</span>
              </div>
            </div>
            <div>
              <Label>Priority</Label>
              <div className="capitalize mt-1 p-2 border rounded">{issue.priority}</div>
            </div>
          </div>

          <div>
            <Label>Labels</Label>
            <div className="flex gap-2 mt-1">
              {issue.labels.map((label) => (
                <Badge key={label} variant="outline">
                  {label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
