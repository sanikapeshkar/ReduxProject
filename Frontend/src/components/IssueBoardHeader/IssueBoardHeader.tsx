import React from "react";
import styles from "./IssueBoardHeader.module.css";

const columnNames = [
  "Todo",
  "In Progress",
  "Code Review",
  "Dev Complete",
  "Done",
];

function IssueBoardHeader() {
  return (
    <thead className={styles.boardHeader}>
      <tr className={styles.columnRow}>
        {columnNames.map((column) => (
          <th key={column} className={styles.column} >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default IssueBoardHeader;
