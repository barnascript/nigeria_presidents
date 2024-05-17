import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import flag from "../../assets/images/flag.png";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.wrapper} aria-label="Main header">
      <div className={`sw ${styles.desktop_container}`}>
        <Link to="/">
          {" "}
          <small className="sr-only">The Office of the President</small>
        </Link>
        <img src={flag} alt="Seal of the Office of the Nigeria President" />
        <nav aria-label="Main Navigation" className={styles.links}>
          <Link to="/insights">Insights</Link>
          <Link to="/glance">At A Glance</Link>
          <Link to="/comparisons">Comparisons</Link>
        </nav>
      </div>
      <div className={`sw ${styles.mobile_container}`}>
        <button type="button" aria-label="Toggle Menu">
          <FaBars className={styles.icon} onClick={() => setOpen(!open)} />
        </button>

        <img src={flag} alt="Seal of the Office of the Nigeria President" />
        {open && (
          <div
            className={
              open
                ? `${styles.slidein} ${styles.dropdown}`
                : `${styles.slideout} ${styles.dropdown}`
            }
            aria-hidden={!open}
          >
            <nav aria-label="Mobile Menu" className={styles.links}>
              <Link>Insights</Link>
              <Link>At A Glance</Link>
              <Link>Comparisons</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
