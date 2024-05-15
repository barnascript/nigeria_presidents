import styles from "./ChartHeader.module.scss";

const ChartHeader = ({ metric, fact, average }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <hr className={styles.left_hr} />
        <small className={styles.metric}>{metric}</small>
        <hr />
      </div>
      <div className={styles.container}>
        <h5>{fact}</h5>
        <small>{average}</small>
      </div>
    </div>
  );
};

export default ChartHeader;
