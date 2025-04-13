"use client";

import { useState } from "react";
import styles from "./SearchBar.module.css";


export default function SearchBar({ placeholder = "Search...", onChange }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={styles.search}
    />
  );
}
