import { sunset } from "../../exports/exports";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className="title">PRESIDENTS</h1>
      <span className="p_small_green">
        Learn more about the Presidents of the Nigeria
      </span>
      <div className={styles.state_house_container}>
        <div className={styles.line}></div>
        <div className={styles.state_house}>
          <img src={sunset} alt="An icon of the sunset" />
          <span className="p_small_CAP">About The State House</span>
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Hero;
