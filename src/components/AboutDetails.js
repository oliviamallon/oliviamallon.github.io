import React from "react";

import styles from "../mystyle.module.css";

export default function AboutDetails() {
  return (
    <>
      <div className={styles.aboutDetailsBox}>
        <div className={styles.aboutBox}>
          <h2 className={styles.aboutTitle}>University Extra Curricular</h2>
          <p className={styles.aboutDescip}>
            As part of my university experience I have been apart of Queen's
            Computing Society &#40;QCS&#41; for the last 2 years. In have been
            on the Events Team, helping to organise both social and academic
            events, both online and in person due to the hybrid model of
            learning. In 2021/2022, I was able to take up the role as Secretary
            on the committee and worked closely with companies to organise
            meetings, sponsorships and workshops for our members.The society has
            around 350+ members and in March 2022 we worked with over 14
            companies to raise £5400 for Pure Mental NI, a local mental health
            organisation. In 2022/2023, I will be taking up the role of
            President and helping to lead the society to work wth more companies
            and help to enhance the student experience at QUB through social and
            acadmeic events to cretae a welcoming community for computing
            students.
          </p>
          <p className={styles.aboutDescip}>
            As part of my role as Peer Mentor I have been able to assist
            students across different degree pathways and year groups with
            university projects, coursework or the curriculum. I have also been
            able to repsent my year group via the role of module rep in my 1
            <sup>st</sup> year of universityhelping to take feedback from
            students to discuss and resolve problems with the lecturer.
          </p>
          <p className={styles.aboutDescip}>
            Throughout my 2<sup>nd</sup> year of university I helped on the
            Corgi &#40;Undergrad Women in Tech meet-up group&#41;. We were able
            to run events both online and in person working with Kainos and
            helping to host a Women and Under-represented genders in STEM event
            in collaboration with QCS and PAMSoc &#40;Physics and Maths Society
            at QUB&#41;.
          </p>
        </div>

        <div className={styles.aboutBox}>
          <h2 className={styles.aboutTitle}>Church/Youth Work</h2>
          <p className={styles.aboutDescip}>
            Since 2017 I have been able to work with other local churches
            through organisations such as Scriptue Union Northern Ireland
            &#40;SUNI&#41; an BYouth &#40;Baptist Youth&#41; to help run holiday
            bible clubs, youth groups and local outreach in their communities. I
            have served on teams to Sion Mills, Letterkenny and Carrickmacross.
            I have volunteered on It's Your Move, a leaders training camp in
            2018 learning how to lead and leading well, which was a camp leading
            p7 children through the transition to 1<sup>st</sup> year of
            secondary school. All centred on God, the Bible and helping teach
            the Bible in a fun, creative and engaging way.I have also lead at
            different SUNI camps and BYouth Team's over the years, with other
            people I haven't met before to work together and find what we were
            best at and to use our talents in the best way possible.
          </p>
        </div>

        <div className={styles.aboutBox}>
          <h2 className={styles.aboutTitle}>Calligraphy/Painting</h2>
          <p className={styles.aboutDescip}>
            In my spare time I love to paint and will often use watercolour to
            paint and illustrate Bible verse which I use to decorate my room. I
            use calligraphy as a way to memorise the verse and engage in a
            creative way with God's word.
          </p>
        </div>

        <div className={styles.aboutBox}>
          <h2 className={styles.aboutTitle}>Travel/Photography</h2>
          <p className={styles.aboutDescip}>
            When I can, I love to travel both locally around Northern Ireland
            and further abroad. I enjoy finding those hidden gems that aren't
            always on the immediate recommended pages to visit on Google. I do
            enjoy the occasionaly photo taking when given the opportunity and
            have taken photos to create an end of week video for camps and teams
            in the past.
          </p>
        </div>
      </div>
    </>
  );
}
