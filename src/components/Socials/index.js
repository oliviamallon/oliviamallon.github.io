import React from "react";

import styles from "../../mystyle.module.css";

import { SocialMediaIconsReact } from "social-media-icons-react";

export default function socials() {
  return (
    <>
      <p className={styles.socialTitle}>
        Want to get in touch? Check out my socials or drop an email!
      </p>
      <div className={styles.socials}>
        <div className={styles.socialIcon}>
          <SocialMediaIconsReact
            borderColor="black"
            icon="instagram"
            iconColor="white"
            backgroundColor="black"
            url="https://www.instagram.com/oliviaxmallonx/"
            size="48"
          />
        </div>

        <div className={styles.socialIcon}>
          <SocialMediaIconsReact
            borderColor="black"
            icon="github"
            iconColor="white"
            backgroundColor="black"
            url="https://github.com/oliviamallon"
            size="48"
          />
        </div>

        <div className={styles.socialIcon}>
          <SocialMediaIconsReact
            borderColor="black"
            icon="linkedin"
            iconColor="white"
            backgroundColor="black"
            url="https://linkedin.com/in/olivia-mallon-5812261b4"
            size="48"
          />
        </div>

        <div className={styles.socialIcon}>
          <SocialMediaIconsReact
            borderColor="black"
            icon="facebook"
            iconColor="white"
            backgroundColor="black"
            url="https://www.facebook.com/olivia.mallon.31"
            size="48"
          />
        </div>

        <div className={styles.socialIcon}>
          <SocialMediaIconsReact
            borderColor="black"
            icon="mail"
            iconColor="white"
            backgroundColor="black"
            url="mailto:oliviamallon2020@gmail.com"
            size="48"
          />
        </div>
      </div>
    </>
  );
}
