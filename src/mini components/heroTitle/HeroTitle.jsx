import styles from "./HeroTitle.module.scss";

const HeroTitle = ({ title, position }) => {
  return (
    <div className={styles.title}>
      <h1 className="title">{title}</h1>
      <span className="p_small_green">{position}</span>
    </div>
  );
};

export default HeroTitle;
