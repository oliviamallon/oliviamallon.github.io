import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  function closeMenu() {
    // alert("Hi");
    document.getElementById("navSideMobile").style.display = "none";
    document.getElementById("openNav").style.display = "block";
  }
  function openMenu() {
    //alert("Hi");
    document.getElementById("navSideMobile").style.display = "block";
    document.getElementById("openNav").style.display = "none";
  }

  return (
    <>
      <div id="navSideMobile" className={styles.hideStart}>
        <button onClick={() => closeMenu()}>Close &times;</button>
        <ul className={styles.navListSide}>
          <li className={styles.navLinkSide}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navLinkSide}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.navLinkSide}>
            <Link to="/experience"> Work Experience</Link>
          </li>
          <li className={styles.navLinkSide}>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>

      <div id="navMobileBtn" className={styles.navMobileBtn}>
        <button id="openNav" onClick={() => openMenu()}>
          &#9776;
        </button>
      </div>

      <div id={styles.navMain}>
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
      </div>
    </>
  );
};

export default Navbar;
