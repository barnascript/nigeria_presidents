import styles from "./Profile.module.scss";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useCsvContext } from "../context/CsvContext";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";
import { Footer, LifeCard } from "../exports/exports";

const Profile = () => {
  const [value, setValue] = useState("");
  const { presidents, selectedPresident } = useCsvContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const id = pathname.split("/").pop();

  const president = presidents.find(
    (president) => president.id === id.toString()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const summary = president?.["Summary"].replace(`${"\n"} ${"<br>"}`, "<br>");

  console.log(summary);

  return (
    <div className={`${styles.wrapper}`}>
      <div>
        <Header />
      </div>
      <div className={`${styles.container}`}>
        <div className={`sw ${styles.top}`}>
          <div className={styles.president_image}>
            <img src={president?.["Image Url"]} alt={president?.Full_Name} />
          </div>
          <div className={styles.intro}>
            <h3 className="title">{president?.Full_Name}</h3>
            <h6 className="p_small_green">{president?.Title}</h6>
          </div>
        </div>
        <div className={`${styles.grid_container}`}>
          <article className="sw">
            <p className="p_small_green">
              {`The biography for President ${selectedPresident?.["Full_Name"]} and past presidents is courtesy
            of the POTRON project.`}
            </p>
            <div className={styles.quotes}>
              <div className={styles.line}></div>
              <div className={styles.quote}>
                <blockquote>{president?.quote}</blockquote>
              </div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.profile}>
              <ul>
                <li className="p_small_green">{summary}</li>
              </ul>
            </div>
          </article>
          <ul className={styles.presidents_links}>
            <h6>LIFE UNDER THE LENS</h6>

            <div className={`sw ${styles.cards}`}>
              <div className={styles.card}>
                <LifeCard
                  title={"Date of Birth"}
                  description={president?.["Date of Birth"]}
                />
              </div>
              <div className={styles.card}>
                <LifeCard
                  title={"Date of Birth"}
                  description={president?.["Date of Birth"]}
                />
              </div>
              <div className={styles.card}>
                <LifeCard
                  title={"Date of Birth"}
                  description={president?.["Date of Birth"]}
                />
              </div>
              <div className={styles.card}>
                <LifeCard
                  title={"Date of Birth"}
                  description={president?.["Date of Birth"]}
                />
              </div>
              <div className={styles.card}>
                <LifeCard
                  title={"Date of Birth"}
                  description={president?.["Date of Birth"]}
                />
              </div>
              <div className={styles.card}>
                <LifeCard
                  title={"Date of Birth"}
                  description={president?.["Date of Birth"]}
                />
              </div>
              <div className={styles.card}>
                <LifeCard
                  title={"Date of Birth"}
                  description={president?.["Date of Birth"]}
                />
              </div>
              <div className={styles.card}>
                <LifeCard
                  title={"Date of Birth"}
                  description={president?.["Date of Birth"]}
                />
              </div>

              <div className={styles.card}>
                <LifeCard
                  title={"Date of Birth"}
                  description={president?.["Date of Birth"]}
                />
              </div>
              <div className={styles.card}>
                <LifeCard
                  title={"Date of Birth"}
                  description={president?.["Date of Birth"]}
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
