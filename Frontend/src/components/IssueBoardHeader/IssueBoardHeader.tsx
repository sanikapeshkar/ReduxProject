import React from "react";
import styles from "./IssueBoardHeader.module.css";
const columnNames = [
  "Todo",
  "InProgress",
  "CodeReview",
  "Dev Complete",
  "Done",
];
function IssueBoardHeader() {
  return (
    <div className={styles.boardHeader}>
      {columnNames.map((column) => (
        <div className={styles.column}>
            <h2>{column}</h2>
        </div>
      ))}
    </div>
  );
}

export default IssueBoardHeader;
