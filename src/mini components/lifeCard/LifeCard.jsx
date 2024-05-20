import styles from "./LifeCard.module.scss";

const LifeCard = ({ icon, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <img src={icon} alt={title} />
      <div className={styles.description}>
        <span className="p_root">{title}</span>
        <p className="p_root">{description}</p>
      </div>
    </div>
  );
};

export default LifeCard;
