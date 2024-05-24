import Header from "../../components/header/Header";
import styles from "./Insights.module.scss";
import AgeDistribution from "../../charts/ageDistribution/AgeDistribution";
import ChartHeader from "../../mini components/chartHeader/ChartHeader";
import { Footer, HeroTitle } from "../../exports/exports";
import { useCsvContext } from "../../context/CsvContext";
import { useState } from "react";
import Timeline from "../../charts/Timelines/Timeline";

const Insights = () => {
  const {
    presidents,
    selectedPresident: president,
    setSelectedPresident,
  } = useCsvContext();

  const [value, setValue] = useState(1);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const currentDay = new Date(year, month - 1, day);

  const rows = [
    ["Azikiwe", new Date(1963, 10, 1), new Date(1966, 1, 16)],
    ["Ironsi", new Date(1966, 1, 16), new Date(1966, 7, 29)],
    ["Gowon", new Date(1966, 8, 1), new Date(1975, 7, 29)],
    ["Murtala", new Date(1975, 7, 29), new Date(1976, 2, 13)],
    ["Obasanjo", new Date(1976, 2, 13), new Date(1979, 10, 1)],
    ["Shagari", new Date(1979, 10, 1), new Date(1983, 12, 31)],
    ["Buhari", new Date(1983, 12, 31), new Date(1985, 8, 27)],
    ["Babangida", new Date(1985, 8, 27), new Date(1993, 8, 26)],
    ["Shonekan", new Date(1993, 8, 26), new Date(1993, 11, 17)],
    ["Abacha", new Date(1993, 11, 17), new Date(1998, 6, 8)],
    ["Abubakar", new Date(1998, 6, 8), new Date(1999, 5, 29)],
    ["Obasanjo", new Date(1999, 5, 29), new Date(2007, 5, 29)],
    ["Yaradua", new Date(2007, 5, 29), new Date(2010, 5, 5)],
    ["Goodluck", new Date(2010, 5, 5), new Date(2015, 5, 29)],
    ["Buhari", new Date(2015, 5, 29), new Date(2023, 5, 29)],
    ["Tinubu", new Date(2023, 5, 29), currentDay],
  ];

  const columns = [
    { type: "string", id: "President" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ];

  const data = [columns, ...rows];

  const handlePresidentChange = (e) => {
    const selectedId = e.target.value;
    const president = presidents.find(
      (president) => president.id === String(selectedId)
    );
    setSelectedPresident(president);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div>
        <Header />
      </div>
      <div>
        <HeroTitle
          title={"Insights"}
          position={"Learn more about the Presidents of Nigeria"}
        />
      </div>
      <div className={`sw ${styles.details}`}>
        <div className={`${styles.filter}`}>
          <select
            name="president"
            id="president"
            value={value}
            onChange={handlePresidentChange}
          >
            {presidents &&
              presidents.map((president) => (
                <option value={president.id} key={president.id}>
                  {president.Full_Name}
                </option>
              ))}
          </select>
        </div>
        <div className={` ${styles.biography}`}>
          <img src={president?.["Image Url"]} alt={president?.Full_Name} />
          <article>
            <div className={styles.title}>
              <span className="post_header">{president?.Full_Name}</span>
              <span className="p_small_CAP">{president?.Title}</span>
            </div>
            <p>
              Nigeria's first President, Azikiwe was a leading nationalist and
              politician who played a key role in the country's independence
              from British colonial rule. He advocated for unity and federalism,
              but his presidency was cut short by a military coup. Despite not
              serving as President, Azikiwe remained a prominent figure in
              Nigerian politics until his death.
            </p>
          </article>
        </div>

        <div className={` ${styles.charts}`}>
          {/* Birth Rate */}
          <div className={styles.chart}>
            <div className={styles.timeline}>
              <div>
                <ChartHeader
                  metric={"Number of Births Per 1000"}
                  fact={president?.["Birth Rate Highest and Lowest"]}
                  average={president?.["Birth Rate Analysis"]}
                />
                <hr />
              </div>

              <div className={styles.chart_layout}>
                <Timeline metric={"Birth Rate"} />
              </div>
            </div>
          </div>
          {/* Life Expectancy */}
          <div className={styles.chart}>
            <div className={styles.timeline}>
              <div>
                <ChartHeader
                  metric={"Life Expectancy"}
                  fact={president?.["Life Expectancy Highest and Lowest"]}
                  average={president?.["Life Expectancy Analysis"]}
                />
                <hr />
              </div>

              <div className={styles.chart_layout}>
                <Timeline metric={"Life Expectancy"} />
              </div>
            </div>
          </div>

          {/* Infant Mortality Number */}
          <div className={styles.chart}>
            <div className={styles.timeline}>
              <div>
                <ChartHeader
                  metric={"Infant Mortality Number"}
                  fact={
                    president?.["Infant Mortality Percent Highest and Lowest"]
                  }
                  average={president?.["Infant Mortality Analysis"]}
                />
                <hr />
              </div>

              <div className={styles.chart_layout}>
                <Timeline metric={"Infant Mortality Number"} />
              </div>
            </div>
          </div>
          {/* Inflation */}
          <div className={styles.chart}>
            <div className={styles.timeline}>
              <div>
                <ChartHeader
                  metric={"Inflation Rate"}
                  fact={president?.["Inflation Highest and Lowest"]}
                  average={president?.["Inflation Analysis"]}
                />
                <hr />
              </div>

              <div className={styles.chart_layout}>
                <Timeline metric={"Inflation"} />
              </div>
            </div>
          </div>
          {/* Real GDP */}
          <div className={styles.chart}>
            <div className={styles.timeline}>
              <div>
                <ChartHeader
                  metric={"Real GDP"}
                  fact={president?.["GDP Highest and Lowest"]}
                  average={president?.["GDP Analysis"]}
                />
                <hr />
              </div>

              <div className={styles.chart_layout}>
                <Timeline metric={"Real GDP"} />
              </div>
            </div>
          </div>
          {/* Population */}
          <div className={styles.chart}>
            <div className={styles.timeline}>
              <div>
                <ChartHeader
                  metric={"Population"}
                  fact={president?.["Population Highest and Lowest"]}
                  average={president?.["Population Analysis"]}
                />
                <hr />
              </div>

              <div className={styles.chart_layout}>
                <Timeline metric={"Population"} />
              </div>
            </div>
          </div>
          {/* Unemployment Rate */}
          <div className={styles.chart}>
            <div className={styles.timeline}>
              <div>
                <ChartHeader
                  metric={"Unemployment Numbers"}
                  fact={president?.["Unemployment Highest and Lowest"]}
                  average={president?.["Unemployment Rate Analysis"]}
                />
                <hr />
              </div>

              <div className={styles.chart_layout}>
                <Timeline metric={"Unemployment Numbers"} />
              </div>
            </div>
          </div>
          {/* Death Rate */}
          <div className={styles.chart}>
            <div className={styles.timeline}>
              <div>
                <ChartHeader
                  metric={"Number of Deaths Per 1000"}
                  fact={president?.["Death Rate Highest and Lowest"]}
                  average={president?.["Death Rate Analysis"]}
                />
                <hr />
              </div>

              <div>
                <Timeline metric={"Death Numbers"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Insights;
