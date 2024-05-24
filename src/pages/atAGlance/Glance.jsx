import React, { useState, useEffect } from "react";
import styles from "./Glance.module.scss";
import { useCsvContext } from "../../context/CsvContext";
import Header from "../../components/header/Header";
import ChartHeader from "../../mini components/chartHeader/ChartHeader";
import Timeline from "../../charts/Timelines/Timeline";
import {
  EthnicGroup,
  HeroTitle,
  MethodOfLeavingOffice,
  MethodOfGovernance,
  Religion,
  OfficeAssumption,
  AgeDistribution,
  BirthMonth,
  TermInOffice,
  Footer,
} from "../../exports/exports";

const Glance = () => {
  const {
    presidents,
    value,
    setValue,
    selectedPresident,
    setSelectedPresident,
  } = useCsvContext();

  const handlePresidentChange = (e) => {
    const selectedId = e.target.value;
    setValue(selectedId);
    const selected = presidents.find(
      (president) => president.id.toString() === selectedId
    );

    setSelectedPresident(selected);
  };

  const pres = presidents.map((president) => {
    return {
      name: president.Full_Name,
      population: president.Population,
    };
  });

  console.log(pres);

  return (
    <div className={styles.wrapper}>
      <div>
        <Header />
      </div>
      <div>
        <HeroTitle
          title={"At a Glance"}
          position={"Learn more about the Presidents of Nigeria"}
        />
      </div>
      <div className={`sw ${styles.container}`}>
        {/* <div className={styles.top}>
          <select
            name="president"
            id="president"
            onChange={handlePresidentChange}
            value={selectedPresident?.id}
          >
            {presidents.map((president) => (
              <option key={president.id} value={president.id}>
                {president.Full_Name}
              </option>
            ))}
          </select>
          {selectedPresident && (
            <img
              src={
                selectedPresident
                  ? selectedPresident["Image Url"]
                  : presidents[0]["Image Url"]
              }
              alt={selectedPresident.Full_Name}
            />
          )}
        </div> */}

        <div className={styles.charts}>
          {/* Age Distribution */}
          <div className={styles.chart}>
            <ChartHeader
              metric={"Age distribution of Nigeria Presidents"}
              fact={
                "The Youngest President to come to power is Yakubu Gowon at 31 while the Oldest is Muhammadu Buhari at 72."
              }
              average={
                "The average age of Nigerian presidents when they came to power is 54.5 years old."
              }
            />
            <AgeDistribution />
          </div>
          {/* Birth Month */}
          <div className={styles.chart}>
            <ChartHeader
              metric={"Birth Month"}
              fact={selectedPresident?.["Death Rate Analysis"]}
              average={selectedPresident?.["Death Rate Highest and Lowest"]}
            />
            <BirthMonth />
          </div>
          {/* Ethnic Group */}
          <div className={styles.chart}>
            <ChartHeader
              metric={"Ethnic Distribution of Nigeria Presidents"}
              fact={
                "The Ethnic group to produce the most presidents is the Fulani."
              }
              average={
                "Aside Fulani, only 4 presidents have come from the minority. They are the Gwaris, Ngas, Ijaws and the Kanuris."
              }
            />
            <EthnicGroup />
          </div>
          {/* Religion */}
          <div className={styles.chart}>
            <ChartHeader
              metric={"Religious Distribution of Nigeria Presidents"}
              fact={"Nigeria has had more Muslim presidents(8)."}
              average={
                "There has never been a president who practised any religion different from Islam and Christainity."
              }
            />
            <Religion />
          </div>
          {/* Leaving Office */}
          <div className={styles.chart}>
            <ChartHeader
              metric={"Method of Leaving Office"}
              fact={
                "Nigeria has experienced 6 coups. The most methods of leaving office. No president has ever been impeached"
              }
              average={
                "Only 2 times has a president left office by Natural Expiration, 2 deaths, 2 transitions, 1 assassination, 1 resignation and 1 defeat."
              }
            />
            <MethodOfLeavingOffice />
          </div>
          {/* Method of Governance */}
          <div className={styles.chart}>
            <ChartHeader
              metric={"Method of Governance"}
              fact={
                "The Democratic and Military types of government have been equalled in the last 16 presidencies."
              }
              average={`The Longest Military rule was under General Ibrahim Babangida from 1985 to 1993. He ruled for 8 years.
              The Longest Democratic rules were under Olusegun Obasanjo and Muhammad Buhari. They ruled for 8 years each.`}
            />
            <MethodOfGovernance />
          </div>
          {/* Office Assumption */}
          <div className={styles.chart}>
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
            <OfficeAssumption />
          </div>
          {/* Term in Office */}
          <div className={styles.chart}>
            <ChartHeader
              metric={"Term in Office"}
              fact={
                "The Shortest rule was under Earnest Shonekan. He ruled for only 83 days after which Sani Abacha took over by a coup."
              }
              average={`The Longest Military rule was under General Ibrahim Babangida from 1985 to 1993. He ruled for 8 years.
              The Longest Democratic rules were under Olusegun Obasanjo and Muhammad Buhari. They ruled for 8 years each.`}
            />
            <TermInOffice />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Glance;
