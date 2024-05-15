import styles from "./Thumbnails.module.scss";
import { Link } from "react-router-dom";
import { useCsvContext } from "../../context/CsvContext";

const Thumbnails = () => {
  const { presidents } = useCsvContext();

  return (
    <div className={`sw ${styles.wrapper}`}>
      {presidents.map((president) => {
        return (
          <Link
            to={{
              pathname: `/profile/${president.id}`,
            }}
            key={president.id}
            className={styles.president}
          >
            <img src={president["Image Url"]} alt={president.Name} />
            <div className={styles.desc}>
              <h5>{president.Full_Name}</h5>
              <small>{president.Title}</small>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Thumbnails;
