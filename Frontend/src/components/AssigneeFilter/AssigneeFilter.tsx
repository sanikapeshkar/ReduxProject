import React from "react";
import styles from "./AssigneeFilter.module.css";

interface Assignee {
  name: string;
  avatarUrl: string;
}

interface FilterComponentProps {
  assignees: Assignee[];
  onAssigneeSelect: (selectedAssignee: Assignee | null) => void;
}

const AssigneeFilter: React.FC<FilterComponentProps> = ({ assignees, onAssigneeSelect }) => {
  const handleAssigneeClick = (assignee: Assignee | null) => {
    onAssigneeSelect(assignee);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.assigneeList}>
        <div 
          className={styles.assigneeAvatar} 
          onClick={() => handleAssigneeClick(null)}
        >
          <img src="/path/to/default-avatar.png" alt="All" />
          <span>All</span>
        </div>
        {assignees.map((assignee) => (
          <div 
            key={assignee.name}
            className={styles.assigneeAvatar} 
            onClick={() => handleAssigneeClick(assignee)}
          >
            <img src={assignee.avatarUrl} alt={assignee.name} />
            <span>{assignee.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssigneeFilter;
