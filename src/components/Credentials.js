import React from "react";
import styles from "../mystyle.module.css";
import credentials from "../images/credentials.jpg";

export default function Credentials() {
  return (
    <>
      <h3>Credentials</h3>
      <div className={styles.credBox}>
        <div>
          <div>
            <img
              className={styles.credentialImage}
              src={credentials}
              alt="Photo of Girl by a waterfall"
            />
          </div>
        </div>

        <div>
          <table className={styles.credTbl}>
            <tr>
              <th className={styles.highlight} rowspan="2">
                Education
              </th>
              <td>BSc Computer Science at QUB</td>
            </tr>
            <tr>
              <td>&#40;2020-2024 &#41;</td>
            </tr>
            <tr className={styles.emptyRow}></tr>
            <tr>
              <td></td>
              <td>Sullivan Upper School</td>
            </tr>
            <tr>
              <td></td>
              <td>&#40;2013-2020 &#41;</td>
            </tr>
            <tr className={styles.emptyRow}></tr>
            <tr>
              <td></td>
              <td>A-Levels: A*AA</td>
            </tr>
            <tr className={styles.emptyRow}></tr>
            <tr>
              <td></td>
              <td>GCSEs: 6 A*&#x27;s , 5 A&#x27;s</td>
            </tr>
            <tr className={styles.emptyRow}></tr>
            <tr className={styles.mobileLine}>
              <th className={styles.highlight} rowspan="2">
                Languages
              </th>
              <td>Java</td>
            </tr>
            <tr>
              <td>Python</td>
            </tr>
            <tr>
              <td></td>
              <td>C++</td>
            </tr>
            <tr>
              <td></td>
              <td>Visual Basic</td>
            </tr>
            <tr>
              <td></td>
              <td>HTML/CSS/JS</td>
            </tr>
            <tr>
              <td></td>
              <td>JSX</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
