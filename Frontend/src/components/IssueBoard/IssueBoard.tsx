"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Filter } from "lucide-react"

import { mockIssues, statusColumns } from "./IssueData"
import { Assignee } from "../AssigneeFilter/Assigneefilter.types"
import { Issue, Status } from "../IssueCard/issuecard.types"
import { AssigneeFilter } from "../AssigneeFilter/AssigneeFilter"
import { Input } from "../ui/input"
import { IssueColumn } from "../IssueColumn/issue-column"


export default function IssueBoard() {
  const [issues, setIssues] = useState<Issue[]>(mockIssues)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([])

  const uniqueAssignees: Assignee[] = Array.from(
    new Set(issues.map((issue) => issue.assignee.name))
  ).map((name) => {
    const assignee = issues.find((issue) => issue.assignee.name === name)?.assignee
    return assignee!
  })

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAssignee =
      selectedAssignees.length === 0 || selectedAssignees.includes(issue.assignee.name)
    return matchesSearch && matchesAssignee
  })

  const getIssuesByStatus = (status: Status) =>
    filteredIssues.filter((issue) => issue.status === status)

  const moveIssue = (id: string, newStatus: Status) => {
    setIssues((prev) =>
      prev.map((issue) => (issue.id === id ? { ...issue, status: newStatus } : issue))
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Project Board</h1>

        <AssigneeFilter
          assignees={uniqueAssignees}
          selected={selectedAssignees}
          onChange={setSelectedAssignees}
        />

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search issues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[140px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Issues</SelectItem>
                <SelectItem value="assigned">Assigned to me</SelectItem>
                <SelectItem value="unassigned">Unassigned</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Issue
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {statusColumns.map((column) => (
            <IssueColumn
              key={column.id}
              title={column.title}
              status={column.id}
              color={column.color}
              issues={getIssuesByStatus(column.id)}
              moveIssue={moveIssue}
              statuses={statusColumns}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
