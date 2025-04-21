import React from "react";
import IssueBoardHeader from "../IssueBoardHeader/IssueBoardHeader";
import IssueCard from "../IssueCard/IssueCard";
import styles from "./IssueBoard.module.css";
import { IssueBoardProps } from "./IssueBoard.types";

function IssueBoard({ columns }: IssueBoardProps) {
  return (
    <table className={styles.IssueBoard}>
      <IssueBoardHeader />
      <tbody className={styles.TicketContainer}>
        <tr className={styles.TicketContainerRows}>
          {columns.map((col, index) => (
            <td key={index} className={styles.column}>
              <IssueCard {...col.issue} />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default IssueBoard;
