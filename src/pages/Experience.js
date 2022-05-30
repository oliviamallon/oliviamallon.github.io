import React from "react";
import styles from "./expstyle.module.css";

export default function Experience() {
  return (
    <>
      <h3 className={styles.workTitle}> Work Experience</h3>
      <div className={styles.jobCV}>
        <div className={styles.jobBox} id={styles.jobTop}>
          <h2 className={styles.company}>EverQuote</h2>
          <p className={styles.jobTitle}>Placement Software Engineer</p>
          <p className={styles.jobDate}>July 2022-June 2023</p>
          <ul id={styles.jobDescrip}>
            <li>
              In this role I will be helping to design and deliver key business
              applications and solutions.
            </li>
            <li>Worked in languages including Java, Python and JavaScript.</li>
          </ul>
        </div>

        <div className={styles.jobBox} id={styles.jobTop}>
          <h2 className={styles.company}>Sensata Technologies</h2>
          <p className={styles.jobTitle}>System Design Engineer</p>
          <p className={styles.jobTitle}>
            Summer Placement System Design Engineer (12 weeks)
          </p>
          <p className={styles.jobDate}>June 2021-Nov 2021</p>

          <ul id={styles.jobDescrip}>
            <li>
              Worked in a team, involved in daily stand ups and was able to
              communicate and update on the progress of testing Hubs and ReXs
              &#40;Range Extenders&#41; under pressure to ensure they were ready
              for shipment at the end of each week.
            </li>
            <li>
              Problem solving when issues occurred with Hubs and fixing them
            </li>
            <li>
              Learnt how stand ups work and communicated within different teams
              to ensure deadlines were met on time through communicating
              regularly in the office and via Microsoft Teams.
            </li>
            <li>Learnt how Sensatas full stack system works.</li>
          </ul>
        </div>

        <div className={styles.jobBox}>
          <h2 className={styles.company}>MPL Contact</h2>
          <p className={styles.jobTitle}>Customer Services Agent</p>
          <p className={styles.jobDate}>Sept 2020 - March 2021</p>

          <ul id={styles.jobDescrip}>
            <li>
              Answered phone calls on behalf of other companies when phone lines
              were busy.
            </li>
            <li>
              Advised on company details &#40;e.g. opening hours, appointments
              etc&#41;.
            </li>
            <li>
              Booked appointments for customers through different company
              systems.
            </li>
            <li>
              Communicated with other colleagues via slack, helping others to
              answer questions and asking for help when necessary.
            </li>
          </ul>
        </div>

        <div className={styles.jobBox}>
          <h2 className={styles.company}>The Original Factory Shop</h2>
          <p className={styles.jobTitle}>Sales Assistant</p>
          <p className={styles.jobDate}>Aug 2019 - Jan 2020</p>
          <p className={styles.jobDate}>Jan 2019 - June 2019</p>
          <ul id={styles.jobDescrip}>
            <li>Advised customers with choosing products to purchase.</li>
            <li>Cleaned and tidied the shop floor.</li>
            <li>Developed a knowledge for frequently used products.</li>
            <li>
              Entrusted with banking for the factory shop at the end of the day
              with other colleagues.
            </li>
          </ul>
        </div>

        <div className={styles.jobBox}>
          <h2 className={styles.company}>Kainos</h2>
          <p className={styles.jobTitle}>Work Experience as Software Intern</p>
          <p className={styles.jobDate}>Dec 2018 - Dec 2018</p>
          <ul id={styles.jobDescrip}>
            <li>Worked on learning HTML, CSS and JS</li>
            <li>
              I got an insight into how the sompany works and took part in daily
              standups.
            </li>
            <li>
              I worked in a team of 3 of us to work on a mini porject hackathon
              given by the company based around the theme of 'health'.{" "}
            </li>
          </ul>
        </div>

        <div className={styles.jobBox}></div>
      </div>
    </>
  );
}
