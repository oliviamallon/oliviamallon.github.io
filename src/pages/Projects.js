import React from "react";

import styles from "./portfolio.module.css";

export default function Projects() {
  function githubLink(pathTitle) {
    let path = "https://github.com/oliviamallon/HorrorEscapeRoom";

    switch (pathTitle) {
      case "escape":
        path = "https://github.com/oliviamallon/HorrorEscapeRoom";
        break;
      case "scrape":
        path = "https://github.com/oliviamallon/CyberWatchIPLookup";
        break;
      case "hub":
        path = "https://github.com/oliviamallon/hubCalculator";
        break;
      case "technopoly":
        path = "notYet";
        break;
      default:
    }

    if (path === "notYet") {
      alert("This project is not available yet");
    } else {
      window.open(path, "_blank");
    }
  }

  return (
    <>
      <h3 className={styles.title}>Projects</h3>

      <div className={styles.containerMobile}>
        <div className={styles.portGridMob}>
          <div className={styles.imgDivPortMob}>
            <h3 className={styles.ptTitleMob}>Online Escape Room</h3>
            <img
              className={styles.imgPortMob}
              id={styles.portImg1}
              alt="Online Web Development Escape Room Project"
            ></img>
          </div>
          <div className={styles.ptOuterMob}>
            <div className={styles.ptMob}>
              <p className={styles.ptDespMob}>
                A university project focues on web development. An online horror
                themed escape room
              </p>
              <p className={styles.ptDespMob}>Uses: HTML, CSS, JavaScript</p>
              <button
                className={styles.buttonPortMob}
                onClick={() => githubLink("escape")}
              >
                Click me
              </button>
            </div>
          </div>

          <div className={styles.imgDivPortMob}>
            <h3 className={styles.ptTitleMob}>CyberWatch IP Lookup</h3>
            <img
              className={styles.imgPortMob}
              id={styles.portImg2}
              alt="Cyber Watch IP Addresses Project"
            ></img>
          </div>
          <div className={styles.ptOuterMob}>
            <div className={styles.ptMob}>
              <p className={styles.ptDespMob}>
                At an Ulster University Hackathon in collaboration with IBM we
                created an online website to lookup IP addresses to tell the
                user if they were safe/dangerous.
              </p>
              <p className={styles.ptDespMob}>Uses: Web API, HTML, CSS, JS</p>
              <button
                className={styles.buttonPortMob}
                onClick={() => githubLink("scrape")}
              >
                Click me
              </button>
            </div>
          </div>
          <div className={styles.imgDivPortMob}>
            <h3 className={styles.ptTitleMob}>Hub Meal Calculator</h3>
            <img
              className={styles.imgPortMob}
              id={styles.portImg3}
              alt="Hub Meal Caluclator Project"
            ></img>
          </div>
          <div className={styles.ptOuterMob}>
            <div className={styles.ptMob}>
              <p className={styles.ptDespMob}>
                A calculator used to work out the costs of meals for each person
                in a student house through shared meals
              </p>
              <p className={styles.ptDespMob}>Uses: HTML, CSS, JavaScript</p>
              <button
                className={styles.buttonPortMob}
                onClick={() => githubLink("hub")}
              >
                Click me
              </button>
            </div>
          </div>

          <div className={styles.imgDivPortMob}>
            <h3 className={styles.ptTitleMob}>Technopoly</h3>
            <img
              className={styles.imgPortMob}
              id={styles.portImg4}
              alt="Technopoly Game Project"
            ></img>
          </div>
          <div className={styles.ptOuterMob}>
            <div className={styles.ptMob}>
              <p className={styles.ptDespMob}>
                A console based tech themed monopoly game.
              </p>
              <p className={styles.ptDespMob}>Uses: Java</p>
              <button
                className={styles.buttonPortMob}
                onClick={() => githubLink("technopoly")}
              >
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerMain}>
        <div className={styles.portGrid}>
          <div className={styles.ptOuter}>
            <div className={styles.pt}>
              <h3 className={styles.ptTitle}>Online Escape Room</h3>
              <p className={styles.ptDesp}>
                A university project focues on web development. An online horror
                themed escape room
              </p>
              <p className={styles.ptDesp}>Uses: HTML, CSS, JavaScript</p>
              <button
                className={styles.buttonPort}
                onClick={() => githubLink("escape")}
              >
                Click me
              </button>
            </div>
          </div>
          <div className={styles.imgDivPort}>
            <img
              className={styles.imgPort}
              id={styles.portImg1}
              alt="Online Web Developemnt Escape Room Project"
            ></img>
          </div>
          <div className={styles.imgDivPort}>
            <img
              className={styles.imgPort}
              id={styles.portImg2}
              alt="Cyber Watch IP Addresses Project"
            ></img>
          </div>
          <div className={styles.ptOuter}>
            <div className={styles.pt}>
              <h3 className={styles.ptTitle}>CyberWatch IP Lookup</h3>
              <p className={styles.ptDesp}>
                At an Ulster University Hackathon in collaboration with IBM we
                created an online website to lookup IP addresses to tell the
                user if they were safe/dangerous.
              </p>
              <p className={styles.ptDesp}>Uses: Web API, HTML, CSS, JS</p>
              <button
                className={styles.buttonPort}
                onClick={() => githubLink("scrape")}
              >
                Click me
              </button>
            </div>
          </div>
          <div className={styles.ptOuter}>
            <div className={styles.pt}>
              <h3 className={styles.ptTitle}>Hub Meal Calculator</h3>
              <p className={styles.ptDesp}>
                A calculator used to work out the costs of meals for each person
                in a student house through shared meals
              </p>
              <p className={styles.ptDesp}>Uses: HTML, CSS, JavaScript</p>
              <button
                className={styles.buttonPort}
                onClick={() => githubLink("hub")}
              >
                Click me
              </button>
            </div>
          </div>
          <div className={styles.imgDivPort}>
            <img
              className={styles.imgPort}
              id={styles.portImg3}
              alt="Hub Meal Caluclator Project"
            ></img>
          </div>
          <div className={styles.imgDivPort}>
            <img
              className={styles.imgPort}
              id={styles.portImg4}
              alt="Technopoly Game Project"
            ></img>
          </div>
          <div className={styles.ptOuter}>
            <div className={styles.pt}>
              <h3 className={styles.ptTitle}>Technopoly</h3>
              <p className={styles.ptDesp}>
                A console based tech themed monopoly game.
              </p>
              <p className={styles.ptDesp}>Uses: Java</p>
              <button
                className={styles.buttonPort}
                onClick={() => githubLink("technopoly")}
              >
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
