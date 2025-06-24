import React from "react";
import { Table, TableHead, TableHeader, TableRow } from "../ui/table";

const IssueBoardCategoryBar = ({columns}:IssueBoardCategoryBarTypes) => {
  return (
    <TableHeader>
      <TableRow>
        {columns.map((column) => (
          <TableHead className="w-[100px]">{column.name}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default IssueBoardCategoryBar;
