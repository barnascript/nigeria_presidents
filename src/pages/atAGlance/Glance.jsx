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
              fact={selectedPresident["Death Rate Analysis"]}
              average={selectedPresident["Death Rate Highest and Lowest"]}
            />
            <Timeline metric={"Death Numbers"} />
          </div>
          <div className={styles.chart}>
            <Timeline metric={"Death Numbers"} />
          </div>
          <div className={styles.chart}>
            <Timeline metric={"Death Numbers"} />
          </div>
          <div className={styles.chart}>
            <Timeline metric={"Death Numbers"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glance;
