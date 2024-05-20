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
      window.scrollY > 100 ? setIntoView(true) : setIntoView(false);
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
      <div className={`hw ${styles.desktop_container}`}>
        <div to="/" tabIndex={"0"} className={styles.logo_container}>
          <Link className={`sr-only logo ${styles.logo}`}>POTRON</Link>
          <ul className={`p_small_grey ${styles.languages}`}>Language</ul>
        </div>
        <img
          src={seal}
          alt="Seal of the Office of the Nigeria President"
          className={
            !intoView ? styles.seal : `${styles.seal} ${styles.add_shadow}`
          }
        />
        <nav
          aria-label="Main Navigation"
          className={styles.links}
          role="menuitem"
        >
          <Link className={`p_small_grey ${styles.navlink}`} to="/insights">
            Insights
          </Link>
          <Link className={`p_small_grey ${styles.navlink}`} to="/at-a-glance">
            At A Glance
          </Link>
          <Link className={`p_small_grey ${styles.navlink}`} to="/comparisons">
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
      <div className={`sw ${styles.mobile_container}`}>
        {/* <FaBars className={styles.icon} onClick={() => setOpen(!open)} /> */}
        <div className={styles.icon}>Menu</div>

        <div to="/" tabIndex={"0"} className={styles.logo_container}>
          <Link className={`sr-only logo ${styles.logo}`}>POTRON</Link>
        </div>
        <img
          src={seal}
          alt="Seal of the Office of the Nigeria President"
          className={styles.seal}
          fetchPriority="high"
        />
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
