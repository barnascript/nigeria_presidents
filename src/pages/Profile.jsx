import styles from "./Profile.module.scss";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useCsvContext } from "../context/CsvContext";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";
import { Footer, LifeCard, house } from "../exports/exports";
import { search } from "../exports/exports";

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

  // const scrollToSection = (sectionid) => {
  //   const section = document.getElementById(sectionid);
  //   if (section) {
  //     const topOffset = section.offsetTop;
  //     window.scrollTo({
  //       top: topOffset,
  //       behavior: "smooth", // Optional: smooth scrolling behavior
  //     });
  //   }
  // };

  const summary = president?.["Summary"].replace(`${"\n"} ${"<br>"}`, "<br>");

  return (
    <div className={`${styles.wrapper}`}>
      <div>
        <div className="top">
          <Header />
        </div>
      </div>
      <div className={`${styles.container}`}>
        <div className={`sw ${styles.top}`}>
          <div className={styles.president_image}>
            <img src={president?.["Image Url"]} alt={president?.Full_Name} />
          </div>
          <div className={` ${styles.intro}`}>
            <div className={styles.name}>
              <h3 className="title">{president?.Full_Name}</h3>
              <h6 className="p_small_green">{president?.Title}</h6>
            </div>
            <div className={styles.buttons}>
              <Link to="#article">
                <button>Short Biography</button>
              </Link>
              <Link to="#lens">
                <button>Life under the lens</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.grid_container}`}>
          <article className="sw" id="article">
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
          <ul className={`sw ${styles.presidents_links}`} id="lens">
            <h6>
              LIFE UNDER THE LENS <img src={search} alt="A search Icon" />
            </h6>
            <table>
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Full Name</span>
                </div>
                <span className="p_header">{president?.Full_Name}</span>
              </tr>
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Title</span>
                </div>
                <span className="p_header">{president?.Title}</span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Date of Birth</span>
                </div>
                <span className="p_header">{president?.["Date of Birth"]}</span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Ethnic Group</span>
                </div>
                <span className="p_header">{president?.["Ethnic Group"]}</span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Leadership style</span>
                </div>

                <span className="p_header">
                  {president?.["Leadership style"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Month of Birth</span>
                </div>
                <span className="p_header">
                  {president?.["Month of Birth"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Place of Birth</span>
                </div>
                <span className="p_header">
                  {president?.["Place of Birth"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Year he took over power</span>
                </div>
                <span className="p_header">
                  {president?.["Year he took over power"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Age When he came to power</span>
                </div>
                <span className="p_header">
                  {president?.["Age When he came to power"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Age when he left</span>
                </div>
                <span className="p_header">
                  {president?.["Age when he left"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Years in Power</span>
                </div>
                <span className="p_header">
                  {president?.["Years in Power"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">
                    Political ideology or philosophy
                  </span>
                </div>
                <span className="p_header">
                  {president?.["Political ideology or philosophy"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Reason for leaving Power</span>
                </div>
                <span className="p_header">
                  {president?.["Reason for leaving Power"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">
                    The Geopolitical Zone he came from
                  </span>
                </div>
                <span className="p_header">
                  {president?.["The Geopolitical Zone he came from"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Political Party</span>
                </div>
                <span className="p_header">
                  {president?.["Political Party"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Language</span>
                </div>
                <span className="p_header">{president?.Language}</span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Place of Birth</span>
                </div>
                <span className="p_header">
                  {president?.["Place of Birth"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">State of Origin</span>
                </div>
                <span className="p_header">
                  {president?.["State of Origin"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">
                    Political ideology or philosophy
                  </span>
                </div>
                <span className="p_header">
                  {president?.["Political ideology or philosophy"]}
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">
                    Major political controversies or scandals involving the
                    president
                  </span>
                </div>
                <span className="p_header">
                  {
                    president?.[
                      "Major political controversies or scandals involving the president"
                    ]
                  }
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">
                    Legacy or lasting impact on Nigerian politics and society
                  </span>
                </div>
                <span className="p_header">
                  {
                    president?.[
                      "Legacy or lasting impact on Nigerian politics and society"
                    ]
                  }
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">
                    Relationship with the National Assembly (Parliament) and
                    other key stakeholders
                  </span>
                </div>
                <span className="p_header">
                  {
                    president?.[
                      "Relationship with the National Assembly (Parliament) and other key stakeholders"
                    ]
                  }
                </span>
              </tr>{" "}
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">
                    Vision for Nigeria's future during his presidency
                  </span>
                </div>
                <span className="p_header">
                  {
                    president?.[
                      "Vision for Nigeria's future during his presidency"
                    ]
                  }
                </span>
              </tr>
              <tr>
                <div className={styles.title}>
                  <img src={house} alt="A house icon" />
                  <span className="p_root">Military or Democratic</span>
                </div>
                <span className="p_header">
                  {president?.["Military or Democratic"]}
                </span>
              </tr>
            </table>
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
