import IssueBoard from "@/components/IssueBoard/IssueBoard";
import React from "react";
import { connect } from "@/dbconfig/dbconfig";
import Issue from "@/model/issueModel";

const BoardPage = async () => {
  await connect();
  const issuedata = await Issue.find().populate("assignee", "username email _id")
  
  const issues = JSON.parse(JSON.stringify(issuedata));

  return <IssueBoard groupedIssues={issues} projectAssignees={[]}/>;
};

export default BoardPage;
