'use client'


import React, { useState } from "react";
import styles from "./issues.module.css";
import IssueBoard from "@/components/IssueBoard/IssueBoard";
import AssigneeFilter from "@/components/AssigneeFilter/AssigneeFilter";

function Issues() {
  const assignees = [
    { name: "Sanika", avatarUrl: "/path/to/sanika-avatar.png" },
    { name: "Arjun", avatarUrl: "/path/to/arjun-avatar.png" },
    { name: "Riya", avatarUrl: "/path/to/riya-avatar.png" },
    { name: "Kabir", avatarUrl: "/path/to/kabir-avatar.png" },
  ];

  const columns = [
    {
      name: "Todo",
      issue: {
        description: "Setup project structure",
        issueNumber: 72338792,
        points: 3,
        prLink: "",
        priority: "High",
        assignee: { name: "Sanika", avatarUrl: "/path/to/sanika-avatar.png" },
      },
    },
    {
      name: "In Progress",
      issue: {
        description: "Implement login",
        issueNumber: 72338793,
        points: 5,
        prLink: "",
        priority: "Medium",
        assignee: { name: "Arjun", avatarUrl: "/path/to/arjun-avatar.png" },
      },
    },
    {
      name: "Code Review",
      issue: {
        description: "Add unit tests",
        issueNumber: 72338794,
        points: 2,
        prLink: "",
        priority: "Low",
        assignee: { name: "Riya", avatarUrl: "/path/to/riya-avatar.png" },
      },
    },
    {
      name: "Dev Complete",
      issue: {
        description: "Refactor utils",
        issueNumber: 72338795,
        points: 1,
        prLink: "",
        priority: "Medium",
        assignee: { name: "Kabir", avatarUrl: "/path/to/kabir-avatar.png" },
      },
    },
    {
      name: "Done",
      issue: {
        description: "Deploy to staging",
        issueNumber: 72338796,
        points: 2,
        prLink: "",
        priority: "High",
        assignee: { name: "Sanika", avatarUrl: "/path/to/sanika-avatar.png" },
      },
    },
  ];

  const [filteredAssignee, setFilteredAssignee] = useState<null | { name: string; avatarUrl: string }>(null);

  const filteredColumns = filteredAssignee
    ? columns.filter((col) => col.issue.assignee.name === filteredAssignee.name)
    : columns;

  return (
    <div className={styles.issueList}>
      <AssigneeFilter assignees={assignees} onAssigneeSelect={setFilteredAssignee} />
     <IssueBoard columns={filteredColumns} />
    </div>
  );
}

export default Issues;
