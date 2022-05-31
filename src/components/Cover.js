import React from "react";
import profile from "../images/nuremberg-train.jpg";
import profile2 from "../images/nuremberg-train-mobile.jpg";
import styles from "../mystyle.module.css";
import { saveAs } from "file-saver";

export default function About() {
  const saveCV = () => {
    saveAs("../images/OliviaMallonCV.pdf", "OliviaMallonCV.pdf");
  };
  return (
    <>
      <div className={styles.coverBox}>
        <div>
          <div className={styles.innerDiv}>
            <h1 className={styles.home}>
              Hi, I'm <span className={styles.highlight}>Olivia Mallon</span>,
            </h1>
            <h2>and I'm a Software Engineer.</h2>
            <button onClick={saveCV} className={styles.buttonStyle}>
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <img
            className={styles.profileImage}
            src={profile}
            alt="Photo of Girl at Train Station"
          />
        </div>
      </div>

      <div className={styles.coverMobile}>
        <div className={styles.imageDivMbl}>
          <img
            className={styles.profileImageMbl}
            src={profile2}
            alt="Photo of Girl at Train Station"
          />
        </div>
        <div>
          <div className={styles.innerDivMbl}>
            <h1 className={styles.homeMbl}>
              Hi, I'm <span className={styles.highlight}>Olivia Mallon</span>,
            </h1>
            <h2>and I'm a Software Engineer.</h2>
            <button onClick={saveCV} className={styles.buttonStyle}>
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
