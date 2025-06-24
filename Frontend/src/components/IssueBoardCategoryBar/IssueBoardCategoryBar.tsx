import React from "react";
import { TableHead, TableHeader, TableRow } from "../ui/table";

const IssueBoardCategoryBar = ({columns}:IssueBoardCategoryBarTypes) => {
  return (
    <TableHeader>
      <TableRow>
        {columns.map((column,i) => (
          <TableHead key={`${column.name}-${i}`}className="w-[100px]">{column.name}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default IssueBoardCategoryBar;
