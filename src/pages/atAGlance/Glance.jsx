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
              metric={"Age Distribution"}
              fact={selectedPresident?.["Death Rate Analysis"]}
              average={selectedPresident?.["Death Rate Highest and Lowest"]}
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
              metric={"Ethnic Group"}
              fact={selectedPresident?.["Death Rate Analysis"]}
              average={selectedPresident?.["Death Rate Highest and Lowest"]}
            />
            <EthnicGroup />
          </div>
          {/* Religion */}
          <div className={styles.chart}>
            <ChartHeader
              metric={"Religion"}
              fact={selectedPresident?.["Death Rate Analysis"]}
              average={selectedPresident?.["Death Rate Highest and Lowest"]}
            />
            <Religion />
          </div>
          {/* Leaving Office */}
          <div className={styles.chart}>
            <ChartHeader
              metric={"Leaving Office"}
              fact={selectedPresident?.["Death Rate Analysis"]}
              average={selectedPresident?.["Death Rate Highest and Lowest"]}
            />
            <MethodOfLeavingOffice />
          </div>
          {/* Method of Governance */}
          <div className={styles.chart}>
            <ChartHeader
              metric={"Method of Governance"}
              fact={selectedPresident?.["Death Rate Analysis"]}
              average={selectedPresident?.["Death Rate Highest and Lowest"]}
            />
            <MethodOfGovernance />
          </div>
          {/* Office Assumption */}
          <div className={styles.chart}>
            <ChartHeader
              metric={"Office Assumption"}
              fact={selectedPresident?.["Death Rate Analysis"]}
              average={selectedPresident?.["Death Rate Highest and Lowest"]}
            />
            <OfficeAssumption />
          </div>
          {/* Term in Office */}
          <div className={styles.chart}>
            <ChartHeader
              metric={"Term in Office"}
              fact={selectedPresident?.["Death Rate Analysis"]}
              average={selectedPresident?.["Death Rate Highest and Lowest"]}
            />
            <TermInOffice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glance;
