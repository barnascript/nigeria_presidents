import { useEffect } from "react";
import { arrow_up, coat_of_arms } from "../../exports/exports";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className={`sw ${styles.wrapper}`}>
        <div className={styles.link_container}>
          <a hre="#" onClick={scrollToTop} className={styles.scrollToTop}>
            <img
              src={arrow_up}
              alt="An arrow Icon that takes the user to the top of the page"
            />
            <span>Back to the top</span>
          </a>
          <div className={styles.line}></div>
        </div>

        <ul className={styles.links}>
          <li>Home</li>
          <li>Insights</li>
          <li>Privacy Policy</li>
          <li>Submissions and Enquiries</li>
          <li>About</li>
          <li>At A Glance</li>
          <li>Copyright Policy</li>
          <li>barnascript@gmail.com</li>
          <li>Contact</li>
          <li>Comparisons</li>
        </ul>
      </div>
      <div className={styles.block}>
        <span className={styles.copyright}>
          Copyright 2024 All rights reserved
        </span>
      </div>
      <img
        src={coat_of_arms}
        alt="An Icon of the Nigeria Coat of Arms"
        className={styles.coat_of_arm}
      />
    </footer>
  );
};

export default Footer;
