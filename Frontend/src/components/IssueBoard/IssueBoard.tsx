"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus, Filter } from "lucide-react";
import { Status } from "../IssueCard/issuecard.types";
import { AssigneeFilter } from "../AssigneeFilter/AssigneeFilter";
import { Input } from "../ui/input";
import { IssueColumn } from "../IssueColumn/issue-column";

export default function IssueBoard({
  groupedIssues,
  projectAssignees,
}: {
  groupedIssues: any[];
  projectAssignees: any[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);

  const allIssues = useMemo(() => {
    return groupedIssues
      .filter((group) => group?.issues?.length > 0)
      .flatMap((group) => group.issues.filter(Boolean));
  }, [groupedIssues]);

  const filteredIssues = allIssues.filter((issue: any) => {
    if (!issue || !issue.title || !issue._id) return false;

    const matchesSearch =
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue._id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesAssignee =
      selectedAssignees.length === 0 ||
      selectedAssignees.includes(issue.assignee);

    return matchesSearch && matchesAssignee;
  });

  const getIssuesByStatus = (status: Status) =>
    groupedIssues.map((issue) => (issue.status === status ? issue : undefined));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Project Board</h1>

        <AssigneeFilter
          assignees={projectAssignees}
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
          {["open", "in progress", "done", "closed", "backlog"].map(
            (status) => (
              <IssueColumn
                key={status}
                title={status.toUpperCase()}
                status={status as Status}
                color="blue"
                issues={getIssuesByStatus(status as Status)}
                moveIssue={() => {}}
                statuses={[]}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
