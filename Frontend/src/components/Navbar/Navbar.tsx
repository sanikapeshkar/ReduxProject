"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Input from "../Input/Input";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">JIRA Clone</Link>
      </div>

      <div className={styles.navLinks}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/issues">Issues</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/settings">Settings</Link>
      </div>

      <div className={styles.rightSection}>
       <Input placeholder="Search" className={styles.search}/>
        <div className={styles.profile}>
          <img src="/profile.png" alt="Profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
