'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './issue.module.css';
import Input from '@/components/Input/Input';


const users = [
  { id: 'u1', name: 'Alice', avatar: '/avatars/alice.jpg' },
  { id: 'u2', name: 'Bob', avatar: '/avatars/bob.jpg' },
  { id: 'u3', name: 'Charlie', avatar: '/avatars/charlie.jpg' },
];



type User = {
  id: string;
  name: string;
  avatar: string;
};

const EditableIssue: React.FC = () => {
  const params = useParams();
  const issueId = params?.issueId || 'unknown';

  // Editable fields state
  const [title, setTitle] = useState('Sample Issue Title');
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const [description, setDescription] = useState('This is a sample description');
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const [environment, setEnvironment] = useState('Production');
  const [isEditingEnvironment, setIsEditingEnvironment] = useState(false);

  const [activity, setActivity] = useState('User reported a bug');
  const [isEditingActivity, setIsEditingActivity] = useState(false);

  const [comments, setComments] = useState('Initial comment here...');
  const [isEditingComments, setIsEditingComments] = useState(false);

  // Assignee & Reporter state
  const [assignee, setAssignee] = useState<User>(users[0]);
  const [reporter, setReporter] = useState<User>(users[1]);

  const [assigneeDropdownOpen, setAssigneeDropdownOpen] = useState(false);
  const [reporterDropdownOpen, setReporterDropdownOpen] = useState(false);

  // Handlers to toggle editing
  const toggleEdit = (field: string, editing: boolean) => {
    switch (field) {
      case 'title':
        setIsEditingTitle(editing);
        break;
      case 'description':
        setIsEditingDescription(editing);
        break;
      case 'environment':
        setIsEditingEnvironment(editing);
        break;
      case 'activity':
        setIsEditingActivity(editing);
        break;
      case 'comments':
        setIsEditingComments(editing);
        break;
    }
  };

  return (
    <div className={styles.issuePage}>
      {/* Issue Title */}
      <h3 className={styles.title}>
        {isEditingTitle ? (
          <Input
            // autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            // onBlur={() => toggleEdit('title', false)}
            // onKeyDown={(e) => e.key === 'Enter' && toggleEdit('title', false)}
          />
        ) : (
          <span onClick={() => toggleEdit('title', true)} style={{ cursor: 'pointer' }}>
            Issue ID {issueId} - {title}
          </span>
        )}
      </h3>

      <div className={styles.issueContent}>
        {/* Left Section */}
        <div className={styles.issueLeftSection}>
          {/* Description */}
          <div className={styles.field}>
            <label>Description:</label>
            {isEditingDescription ? (
              <Input
                // autoFocus
                // multiline
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                // onBlur={() => toggleEdit('description', false)}
                // onKeyDown={(e) => e.key === 'Enter' && toggleEdit('description', false)}
              />
            ) : (
              <p onClick={() => toggleEdit('description', true)} className={styles.editableText}>
                {description || 'Click to add description'}
              </p>
            )}
          </div>

          {/* Environment */}
          <div className={styles.field}>
            <label>Environment:</label>
            {isEditingEnvironment ? (
              <Input
                // autoFocus
                value={environment}
                onChange={(e) => setEnvironment(e.target.value)}
                // onBlur={() => toggleEdit('environment', false)}
                // onKeyDown={(e) => e.key === 'Enter' && toggleEdit('environment', false)}
              />
            ) : (
              <p onClick={() => toggleEdit('environment', true)} className={styles.editableText}>
                {environment || 'Click to add environment'}
              </p>
            )}
          </div>

          {/* Activity */}
          <div className={styles.field}>
            <label>Activity:</label>
            {isEditingActivity ? (
              <Input
                // autoFocus
                // multiline
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                // onBlur={() => toggleEdit('activity', false)}
                // onKeyDown={(e) => e.key === 'Enter' && toggleEdit('activity', false)}
              />
            ) : (
              <p onClick={() => toggleEdit('activity', true)} className={styles.editableText}>
                {activity || 'Click to add activity'}
              </p>
            )}
          </div>

          {/* Comments Section */}
          <div className={styles.field}>
            <label>Comments:</label>
            {isEditingComments ? (
              <Input
                // autoFocus
                // multiline
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                // onBlur={() => toggleEdit('comments', false)}
                // onKeyDown={(e) => e.key === 'Enter' && toggleEdit('comments', false)}
              />
            ) : (
              <p onClick={() => toggleEdit('comments', true)} className={styles.editableText}>
                {comments || 'Click to add comments'}
              </p>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.issueRightSection}>
          {/* Assignee */}
          <div className={styles.field}>
            <label>Assignee:</label>
            <div
              className={styles.avatarName}
              onClick={() => setAssigneeDropdownOpen(!assigneeDropdownOpen)}
              style={{ cursor: 'pointer' }}
            >
              <img src={assignee.avatar} alt={assignee.name} className={styles.avatar} />
              <span>{assignee.name}</span>
            </div>
            {assigneeDropdownOpen && (
              <div className={styles.dropdown}>
                {users.map((user) => (
                  <div
                    key={user.id}
                    className={styles.dropdownItem}
                    onClick={() => {
                      setAssignee(user);
                      setAssigneeDropdownOpen(false);
                    }}
                  >
                    <img src={user.avatar} alt={user.name} className={styles.avatarSmall} />
                    <span>{user.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Reporter */}
          <div className={styles.field}>
            <label>Reporter:</label>
            <div
              className={styles.avatarName}
              onClick={() => setReporterDropdownOpen(!reporterDropdownOpen)}
              style={{ cursor: 'pointer' }}
            >
              <img src={reporter.avatar} alt={reporter.name} className={styles.avatar} />
              <span>{reporter.name}</span>
            </div>
            {reporterDropdownOpen && (
              <div className={styles.dropdown}>
                {users.map((user) => (
                  <div
                    key={user.id}
                    className={styles.dropdownItem}
                    onClick={() => {
                      setReporter(user);
                      setReporterDropdownOpen(false);
                    }}
                  >
                    <img src={user.avatar} alt={user.name} className={styles.avatarSmall} />
                    <span>{user.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Due Date */}
          <div className={styles.field}>
            <label>Due:</label>
            <input type="date" className={styles.dateInput} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditableIssue;
