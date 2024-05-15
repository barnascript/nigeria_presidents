import styles from "./Profile.module.scss";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useCsvContext } from "../context/CsvContext";
import Header from "../components/header/Header";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useEffect, useState } from "react";
import flag from "../assets/images/flag.png";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";

const Profile = () => {
  const [value, setValue] = useState("");
  const { presidents } = useCsvContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const id = pathname.split("/").pop();

  const president = presidents.find(
    (president) => president.id === id.toString()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={`${styles.wrapper}`}>
      <div>
        <Header />
      </div>
      <div className={`sw ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.president_image}>
            <img src={president?.["Image Url"]} alt={president?.Full_Name} />
          </div>
          <div className={styles.intro}>
            <h3>{president?.Full_Name}</h3>
            <h6>{president?.Title}</h6>
            <div className={styles.design_body}>
              <div className={styles.flag_div}>
                <MdOutlineArrowDropDown />
                <div className={styles.flag_}>
                  <div className={styles.left_stroke}></div>
                  <img src={flag} alt="" className={styles.flag} />
                  <div className={styles.right_stroke}></div>
                </div>
                <MdOutlineArrowDropUp />
              </div>
              <div className={styles.links}>
                <Link to="/">PRESIDENTS</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.grid_container}>
          <div className={styles.profile}>
            <ul>
              <li>
                <b>Name</b> : {president?.Full_Name}
              </li>
              <li>
                <b>Title</b> : {president?.Title}
              </li>
              <li>
                <b>Date of Birth</b> : {president?.["Date of Birth"]}
              </li>
              <li>
                <b>Ethnic Group</b> : {president?.["Ethnic Group"]}
              </li>
              <li>
                <b>Language</b> : {president?.Language}
              </li>
              <li>
                <b>Highest education</b> : {president?.["Highest education"]}
              </li>
              <li>
                <b>State of Origin</b> : {president?.["State of Origin"]}
              </li>
              <li>
                <b>Month of Birth</b> : {president?.["Month of Birth"]}
              </li>
              <li>
                <b>Place of Birth</b> : {president?.["Place of Birth"]}
              </li>
              <li>
                <b>Religion</b> : {president?.Religion}
              </li>
              <li>
                <b>Leadership style</b> : {president?.["Leadership style"]}
              </li>
              <li>
                <b>Age When he came to Power</b> :{" "}
                {president?.["Age When he came to power"]}
              </li>
              <li>
                <b>Age when he Left</b> : {president?.["Age when he left"]}
              </li>
              <li>
                <b>Method of leaving Power</b> :{" "}
                {president?.["Method of leaving power"]}
              </li>
              <li>
                <b>Leadership style</b> : {president?.["Leadership style"]}
              </li>
              <li>
                <b>Reason for leaving Power</b> :{" "}
                {president?.["Reason for leaving Power"]}
              </li>
              <li>
                <b>Year he took over power</b> :{" "}
                {president?.["Year he took over power"]}
              </li>
              <li>
                <b>Years in Power</b> : {president?.["Years in Power"]}
              </li>
              <li>
                <b>Military or Democratic</b> :{" "}
                {president?.["Military or Democratic"]}
              </li>

              <li>
                <b>Political Party</b> : {president?.["Political Party"]}
              </li>
              <li>
                <b>Political Ideology or Philosophy</b> :{" "}
                {president?.["Political ideology or philosophy"]}
              </li>
              <li>
                <b>The Geopolitical Zone he came from</b> :{" "}
                {president?.["The Geopolitical Zone he came from"]}
              </li>
              <li>
                <b>Vision for Nigeria's future during his Presidency</b> :{" "}
                {
                  president?.[
                    "Vision for Nigeria's future during his presidency"
                  ]
                }
              </li>
            </ul>
          </div>
          <ul className={styles.presidents_links}>
            {presidents.map((president) => (
              <li key={president.id}>
                <Link to={{ pathname: `/profile/${president.id}` }}>
                  {president.Full_Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.quotes}>
          <RiDoubleQuotesL className={styles.left_quote} />
          <blockquote>{president?.quote}</blockquote>
          <RiDoubleQuotesR className={styles.right_quote} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
