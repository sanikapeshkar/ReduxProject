import React, { useState } from "react";
import styles from "./IssueModal.module.css";
import CommentsTextEditor from "../CommentsTextEditor/CommentsTextEditor";
function IssueModal({ issue }: any) {
  const [comment, setComment] = useState("<p>Add your comment...</p>");
  return (
    <div className={styles.modalContent}>
      <h2 className={styles.issueTitle}>{issue?.title}</h2>
      <p>
        <strong>Description:</strong> {issue?.description}
      </p>
      <p>
        <strong>Status:</strong> {issue?.status}
      </p>
      <p>
        <strong>Assigned to:</strong> {issue?.assignee?.name}
      </p>
      <p>
        <strong>Created on:</strong>{" "}
        {new Date(issue?.createdAt).toLocaleDateString()}
      </p>

      <div>
        <h3>Comments</h3>
        <CommentsTextEditor value={comment} onChange={setComment} />
        <ul className={styles.commentList}>
          {issue.comments?.length ? (
            issue.comments.map((comment: any, idx: number) => (
              <li key={idx}>
                <strong>{comment.author}</strong>: {comment.text}
                <br />
                <small>{new Date(comment.date).toLocaleString()}</small>
              </li>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default IssueModal;
