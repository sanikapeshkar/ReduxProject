import React from 'react';
import styles from './IssueCard.module.css';
import { IssueCardProps } from './IssueCard.types';


const priorityArrow = {
  Low: '↓',
  Medium: '→',
  High: '↑',
};

function IssueCard({
  description,
  issueNumber,
  points,
  prLink,
  priority,
  assignee,
  onClick
}: IssueCardProps) {
  return (
    <div className={styles.issueCard} onClick={onClick}>
      <div className={styles.description}>{description}</div>

      <div className={styles.ticketDetails}>
        <p className={styles.issueNumber}>#{issueNumber}</p>
        <p className={styles.points}>{points} pts</p>
        <p className={styles.pr}>
          {prLink ? <a href={prLink} target="_blank" rel="noopener noreferrer">PR</a> : 'No PR'}
        </p>
        <p className={`${styles.priority} ${styles[priority.toLowerCase()]}`}>
          {priorityArrow[priority]} {priority}
        </p>
        <div className={styles.assignee}>
          <img src={assignee.avatarUrl} alt={assignee.name} className={styles.avatar} />
          <span>{assignee.name}</span>
        </div>
      </div>
    </div>
  );
}

export default IssueCard;
