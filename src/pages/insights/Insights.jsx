import Header from "../../components/header/Header";
import styles from "./Insights.module.scss";
import AgeDistribution from "../../charts/ageDistribution/AgeDistribution";
import ChartHeader from "../../mini components/chartHeader/ChartHeader";
import OfficeAssumption from "../../charts/officeAssumption/OfficeAssumption";
import BirthMonth from "../../charts/birthMonth/BirthMonth";
import Religion from "../../charts/religion/Religion";
import MethodOfGovernance from "../../charts/methodOfGovernance/MethodOfGovernance";
import EthnicGroup from "../../charts/ethnicGroup/EthnicGroup";
import { Chart } from "react-google-charts";
import LeavingOffice from "../../charts/leavingOffice/MethodOfLeavingOffice";

const Insights = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-based
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
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={`sw ${styles.charts}`}>
        {/* Age Distribution */}
        <div className={styles.chart}>
          <div>
            <ChartHeader
              metric={"Age distribution of Nigeria Presidents"}
              fact={
                "The Youngest President to come to power is Yakubu Gowon at 31 while the Oldest is Muhammadu Buhari at 72."
              }
              average={
                "The average age of Nigerian presidents when they came to power is 54.5 years old."
              }
            />
          </div>
          <div>
            <AgeDistribution />
          </div>
        </div>
        {/* Age at  Office Assumption */}
        <div className={styles.chart}>
          <div>
            <ChartHeader
              metric={
                "Age distribution of Nigeria Presidents by Office Assumption"
              }
              fact={
                "Since 1966, The Entry Age to Presidency has increased by 132%."
              }
              average={
                "The average age of Nigerian presidents when they came to power is 54.5 years old."
              }
            />
          </div>
          <div>
            <OfficeAssumption />
          </div>
        </div>
        {/* Birth Month */}
        <div className={styles.chart}>
          <div>
            <ChartHeader
              metric={"Birth Month Distribution of Nigeria Presidents"}
              fact={
                "The Most Birth Month is March(3) and November(3). No President has been born in January, April, July and September."
              }
              average={
                "So far, Only 1 President had been born in February, May, June, August and October. 2 were born in December."
              }
            />
          </div>
          <div>
            <BirthMonth />
          </div>
        </div>
        {/* Religion */}
        <div className={styles.chart}>
          <div>
            <ChartHeader
              metric={"Religious Distribution of Nigeria Presidents"}
              fact={"Nigeria has had more Muslim presidents(8)."}
              average={
                "There has never been a president who practised any religion different from Islam and Christainity."
              }
            />
          </div>
          <div>
            <Religion />
          </div>
        </div>
        {/* Method of governance */}
        <div className={styles.chart}>
          <div>
            <ChartHeader
              metric={"Method of Governance"}
              fact={
                "The Democratic and Military types of government have been equalled in the last 16 presidencies."
              }
              average={
                "The Longest Military rule was under General Ibrahim Babangida from 1985 to 1993. He ruled for 8 years. The Longest Democratic rules were under Olusegun Obasanjo and Muhammad Buhari. They ruled for 8 years each."
              }
            />
          </div>
          <div>
            <MethodOfGovernance />
          </div>
        </div>
        {/* Ethnic group */}
        <div className={styles.chart}>
          <div>
            <ChartHeader
              metric={"Ethnic Distribution of Nigeria Presidents"}
              fact={
                "The Ethnic group to produce the most presidents is the Fulani."
              }
              average={
                "Aside Fulani, only 4 presidents have come from the minority. They are the Gwaris, Ngas, Ijaws and the Kanuris."
              }
            />
          </div>
          <div>
            <EthnicGroup />
          </div>
        </div>
        {/* Method of leaving office */}
        <div className={styles.chart}>
          <div>
            <ChartHeader
              metric={"Method of Leaving Office"}
              fact={
                "Nigeria has experienced 6 coups. The most methods of leaving office. No president has ever been impeached."
              }
              average={
                "Only 2 times has a president left office by Natural Expiration, 2 deaths, 2 transitions, 1 assassination, 1 resignation and 1 defeat."
              }
            />
          </div>
          <div>
            <LeavingOffice />
          </div>
        </div>
        {/* Term in Office */}
        <div className={styles.chart}>
          <div>
            <ChartHeader
              metric={"Term in Office"}
              fact={
                "The Shortest rule was under Earnest Shonekan. He ruled for only 83 days after which Sani Abacha took over by a coup."
              }
              average={
                "The Longest Military rule was under General Ibrahim Babangida from 1985 to 1993. He ruled for 8 years. The Longest Democratic rules were under Olusegun Obasanjo and Muhammad Buhari. They ruled for 8 years each."
              }
            />
          </div>
          <div>
            <Chart
              chartType="Timeline"
              data={data}
              width="100%"
              height="400px"
            />
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
