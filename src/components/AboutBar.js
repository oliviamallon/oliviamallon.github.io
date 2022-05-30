import React from "react";
import styles from "./AboutBar.module.css";

import qcs from "../images/qcs-formal.jpg";
import church from "../images/church-work.jpg";
import paint from "../images/paint.jpg";
import sea from "../images/sea.jpg";

export default function About() {
  return (
    <>
      <h3>About Me</h3>
      <div className={styles.aboutMeBar}>
        <div className={styles.outerHex}>
          <section class="hexagon-gallery">
            <div className={styles.hex}>
              <img className={styles.hexImg} src={qcs} alt="some"></img>
            </div>
            <div class="hex"></div>
          </section>
          <h2>University Extra Curricular</h2>
          <p> QCS, Peer Mentor, Corgi Committe, Hub Committee, Module Rep</p>
        </div>
        <div className={styles.outerHex}>
          <section class="hexagon-gallery">
            <div className={styles.hex}>
              <img className={styles.hexImg} src={church} alt="some"></img>
            </div>
            <div class="hex"></div>
          </section>
          <h2>Church/Youth Work</h2>
          <p> SUNI, Church, Small Group Leader, Outreach and BYouth</p>
        </div>
        <div className={styles.outerHex}>
          <section class="hexagon-gallery">
            <div className={styles.hex}>
              <img className={styles.hexImg} src={paint} alt="some"></img>
            </div>
            <div class="hex"></div>
          </section>
          <h2>Calligraphy/Painting</h2>
          <p>
            In my spare time I love to paint using watercolours and calligraphy
          </p>
        </div>
        <div className={styles.outerHex}>
          <section class="hexagon-gallery">
            <div className={styles.hex}>
              <img className={styles.hexImg} src={sea} alt="some"></img>
            </div>
            <div class="hex"></div>
          </section>
          <h2>Travel/Photography</h2>
          <p>I love to travel, exploring both local places and new countries</p>
        </div>
      </div>
    </>
  );
}
