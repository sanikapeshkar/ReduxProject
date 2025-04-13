import IssueCard from "@/components/IssueCard/IssueCard";
import React from "react";
import styles from './issues.module.css';
function Issues() {
  return (
    <div className={styles.issueList}>
      <IssueCard
        description={""}
        issueNumber={72338792}
        points={1}
        prLink={""}
        priority={"High"}
        assignee={{ name: "sanika", avatarUrl: "" }}
      />
    </div>
  );
}

export default Issues;
