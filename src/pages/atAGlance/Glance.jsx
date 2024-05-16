import React, { useState, useEffect } from "react";
import styles from "./Glance.module.scss";
import { useCsvContext } from "../../context/CsvContext";
import Header from "../../components/header/Header";
import ChartHeader from "../../mini components/chartHeader/ChartHeader";
import Timeline from "../../charts/Timelines/Timeline";

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
      <Header />
      <div className={`sw ${styles.container}`}>
        <div className={styles.top}>
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
        </div>

        <div className={styles.charts}>
          <div className={styles.chart}>
            <ChartHeader
              metric={"Number of Deaths Per 1000"}
              fact={selectedPresident?.["Death Rate Analysis"]}
              average={selectedPresident?.["Death Rate Highest and Lowest"]}
            />
            <Timeline metric={"Death Numbers"} />
          </div>
          <div className={styles.chart}>
            <ChartHeader
              metric={"Real GDP"}
              fact={selectedPresident?.["GDP Analysis"]}
              average={selectedPresident?.["GDP Highest and Lowest"]}
            />
            <Timeline metric={"Real GDP"} />
          </div>
          <div className={styles.chart}>
            <ChartHeader
              metric={"Infant Mortality Per 1000"}
              fact={selectedPresident?.["Infant Mortality Analysis"]}
              average={
                selectedPresident?.[
                  "Infant Mortality Percent Highest and Lowest"
                ]
              }
            />
            <Timeline metric={"Infant Mortality Number"} />
          </div>
          <div className={styles.chart}>
            <ChartHeader
              metric={"Population in Millions"}
              fact={selectedPresident?.["Population Analysis"]}
              average={selectedPresident?.["Population Highest and Lowest"]}
            />
            <Timeline metric={"Population"} />
          </div>
          <div className={styles.chart}>
            <ChartHeader
              metric={"Birth Rate"}
              fact={selectedPresident?.["Birth Rate Analysis"]}
              average={selectedPresident?.["Birth Rate Highest and Lowest"]}
            />
            <Timeline metric={"Birth Rate"} />
          </div>
          <div className={styles.chart}>
            <ChartHeader
              metric={"Life Expectancy"}
              fact={selectedPresident?.["Life Expectancy Analysis"]}
              average={
                selectedPresident?.["Life Expectancy Highest and Lowest"]
              }
            />
            <Timeline metric={"Life Expectancy"} />
          </div>
          <div className={styles.chart}>
            <ChartHeader
              metric={"Unemployment Rate"}
              fact={selectedPresident?.["Unemployment Rate Analysis"]}
              average={selectedPresident?.["Unemployment Highest and Lowest"]}
            />
            <Timeline metric={"Unemployment Numbers"} />
          </div>
          <div className={styles.chart}>
            <ChartHeader
              metric={"Inflation"}
              fact={selectedPresident?.["Inflation Analysis"]}
              average={selectedPresident?.["Inflation Highest and Lowest"]}
            />
            <Timeline metric={"Inflation"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glance;
