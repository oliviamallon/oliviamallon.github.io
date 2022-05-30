import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <ul className={styles.navList}>
        <li className={styles.navLink}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/experience"> Work Experience</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
