import React from "react";
import { Table } from "../ui/table";
import IssueBoardCategoryBar from "../IssueBoardCategoryBar/IssueBoardCategoryBar";
import IssueBoardContent from "../IssueBoardContent/IssueBoardContent";

const columnheaders = [
  { name: "Todo" },
  { name: "inprogress" },
  { name: "Code Review " },
];
const IssueBoard = () => {
  return (
    <Table>
      <IssueBoardCategoryBar columns={columnheaders} />
      <IssueBoardContent assignees={[]} issueData={[]}/>
    </Table>
  );
};

export default IssueBoard;
