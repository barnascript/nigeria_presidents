import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import flag from "../../assets/images/flag.png";
import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { seal } from "../../exports/exports";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [intoView, setIntoView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setIntoView(true) : setIntoView(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        !intoView ? styles.wrapper : `${styles.wrapper} ${styles.add_shadow}`
      }
      aria-label="Main header"
      tabIndex={"0"}
    >
      <div className={`hw ${styles.container}`} onClick={() => setOpen(!open)}>
        <div className={styles.icon}>
          <span>{!open ? "Menu" : "Close"}</span>
        </div>

        <div className={styles.logo_div}>
          <Link to="/" className={`sr-only logo ${styles.logo}`}>
            POTRON{" "}
          </Link>
        </div>

        <div className={styles.seal_div}>
          <img
            src={seal}
            alt="Seal of the Office of the Nigeria President"
            className={styles.seal}
            fetchpriority="high"
          />
        </div>

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
              <Link className={`p_small_grey ${styles.navlink}`} to="/insights">
                Insights
              </Link>
              <Link
                className={`p_small_grey ${styles.navlink}`}
                to="/at-a-glance"
              >
                At A Glance
              </Link>
              <Link
                className={`p_small_grey ${styles.navlink}`}
                to="/comparisons"
              >
                Comparisons
              </Link>
              <Link className={`p_small_grey ${styles.navlink}`} to="/about">
                About
              </Link>
              <Link className={`p_small_grey ${styles.navlink}`} to="/contact">
                Contact
              </Link>
              <ul
                className={`p_small_grey ${styles.languages} ${styles.navlink}`}
              >
                Language
              </ul>
            </nav>
          </div>
        )}
        <div className={styles.menu}>
          <nav aria-label="Mobile Menu" className={styles.links}>
            <Link className={`p_small_grey ${styles.navlink}`} to="/insights">
              Insights
            </Link>
            <Link
              className={`p_small_grey ${styles.navlink}`}
              to="/at-a-glance"
            >
              At A Glance
            </Link>
            <Link
              className={`p_small_grey ${styles.navlink}`}
              to="/comparisons"
            >
              Comparisons
            </Link>
            <Link className={`p_small_grey ${styles.navlink}`} to="/about">
              About
            </Link>
            <Link className={`p_small_grey ${styles.navlink}`} to="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
