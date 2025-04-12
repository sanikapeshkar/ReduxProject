"use client";
import React, { useState, useEffect, use } from "react";
import styles from "./CreateIssueForm.module.css";
import Input from "../../../components/Input/Input";
import Modal from "../../../components/Modal/Modal";
import Button from "../../../components/Button/Button";
import { CreateIssueFormProps } from "./createIssue.types";
import Link from "next/link";

const CreateIssueForm: React.FC<CreateIssueFormProps> = ({
  onClose,
  onSubmit,
}) => {
  const [issueId, setIssueId] = useState<string>("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [project, setProject] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [openModal, setopenModal] = useState(true);
  useEffect(() => {
    setIssueId(`ISSUE-${Math.floor(100000 + Math.random() * 900000)}`);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newIssue = {
      id: issueId,
      title,
      description,
      project,
      attachment,
    };
    onSubmit(newIssue);
    onClose();
  };

  return (
    <Modal isOpen={openModal} onClose={() => setopenModal(false)}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Create New Issue</h2>
        <p>
          <strong>Issue ID:</strong> {issueId}
        </p>

        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <Input
          type="text"
          placeholder="Parent Project"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          required
        />

        <Input
          type="file"
          onChange={(e) => setAttachment(e.target.files?.[0] || null)}
        />

        <div className={styles.actions}>
          <Button type="submit">Create</Button>
          <Link href="/issues">
            <Button type="button" onClick={() => setopenModal(false)}>
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </Modal>
  );
};

export default CreateIssueForm;
