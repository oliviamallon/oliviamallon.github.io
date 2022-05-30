import React from "react";
import styles from "../mystyle.module.css";

export default function Porfolio() {
  return (
    <>
      <div>
        <h3>Portfolio</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "33% 33% 33%",
            gridGap: 0,
          }}
        >
          <div>
            <span className={styles.portTitle}>About Me</span>
            <button className={styles.btns} id={styles.btn1} disabled>
              Outside of Academics...
            </button>
          </div>

          <div>
            <span className={styles.portTitle}>Work Experience </span>
            <button className={styles.btns} id={styles.btn2} disabled>
              My Background...
            </button>
          </div>

          <div>
            <span className={styles.portTitle}>Projects</span>
            <button className={styles.btns} id={styles.btn3} disabled>
              Coding Portfolio...
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
