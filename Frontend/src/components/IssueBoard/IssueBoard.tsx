import React, { useState } from "react";
import IssueBoardHeader from "../IssueBoardHeader/IssueBoardHeader";
import IssueCard from "../IssueCard/IssueCard";
import styles from "./IssueBoard.module.css";
import { IssueBoardProps } from "./IssueBoard.types";
import Modal from "../Modal/Modal";
import IssueModal from "../IssueModal/IssueModal";

function IssueBoard({ columns }: IssueBoardProps) {
  const [issuePopup, setIssuePopup] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<any>();

  function openIssueCardPopup(issue: any) {
    setSelectedIssue(issue);
    setIssuePopup(true);
  }

  function toggleIssueCardPopup() {
    setIssuePopup(false);
    setSelectedIssue(null);
  }

  return (
    <>
      <table className={styles.IssueBoard}>
        <IssueBoardHeader />
        <tbody className={styles.TicketContainer}>
          <tr className={styles.TicketContainerRows}>
            {columns.map((col, index) => (
              <td key={index} className={styles.column}>
                <IssueCard {...col.issue} onClick={() => openIssueCardPopup(col.issue)} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {selectedIssue && (
        <Modal isOpen={issuePopup} onClose={toggleIssueCardPopup}>
         <IssueModal issue={selectedIssue}/>
        </Modal>
      )}
    </>
  );
}

export default IssueBoard;
