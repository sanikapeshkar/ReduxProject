import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>

      <section className={styles.hero}>
        <h1>Welcome to JIRA Clone</h1>
        <p>Track and manage your tasks efficiently.</p>
        <div className={styles.actions}>
          <Link href="/issues/new">
            <button className={styles.primaryBtn}>Create New Issue</button>
          </Link>
          <Link href="/projects">
            <button className={styles.secondaryBtn}>View Projects</button>
          </Link>
        </div>
      </section>

      <section className={styles.issues}>
        <h2>Recent Issues</h2>
        <ul className={styles.linkContainer}>
          <li className={styles.link}><Link href="/issues/1">Issue #1 - Fix Navbar</Link></li>
          <li className={styles.link}><Link href="/issues/2">Issue #2 - Improve UI</Link></li>
          <li className={styles.link}><Link href="/issues/3">Issue #3 - API Integration</Link></li>
        </ul>
      </section>


      <section className={styles.projects}>
        <h2>Ongoing Projects</h2>
        <ul className={styles.linkContainer}>
          <li className={styles.link}><Link href="/projects/1">Project A - Task Management</Link></li>
          <li className={styles.link}><Link href="/projects/2">Project B - Bug Tracker</Link></li>
        </ul>
      </section>
    </main>
  );
}
