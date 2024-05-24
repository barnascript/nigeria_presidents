import styles from "./ChartHeader.module.scss";

const ChartHeader = ({ metric, fact, average }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <small className="post_header">{metric}</small>
      </div>
      <div className={styles.container}>
        <h5 className="p_root">{fact}</h5>
        <small className="p_root">{average}</small>
      </div>
    </div>
  );
};

export default ChartHeader;
