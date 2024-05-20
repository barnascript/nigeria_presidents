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
            <img
              src={president["Image Url"]}
              alt={president.Name}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.desc}>
              <h5 className="p_header">{president.Full_Name}</h5>
              <small className="p_small_CAP">{president.Title}</small>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Thumbnails;
