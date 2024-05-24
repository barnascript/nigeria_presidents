import React from "react";
import Header from "../../components/header/Header";
import MultiLines from "../../charts/multiLines/MultiLines";
import styles from "./Comparisons.module.scss";
import { useCsvContext } from "../../context/CsvContext";
import { Footer, HeroTitle } from "../../exports/exports";

const Comparisons = () => {
  const { presidents, selectedPresident, setValue, setSelectedPresident } =
    useCsvContext();

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
      <div>
        <Header />
      </div>
      <HeroTitle
        title={"Comparisons"}
        position={"Learn more about the Presidents of Nigeria"}
      />
      <div className={`sw ${styles.container}`}>
        <div className={styles.top}>
          <select
            name="president"
            id="president"
            value={selectedPresident?.id}
            onChange={handlePresidentChange}
          >
            {presidents &&
              presidents.map((president) => (
                <option value={president.id}>{president.Full_Name}</option>
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
            <MultiLines metric1={"Life Expectancy"} metric2={"Death Numbers"} />
          </div>
          <div className={styles.chart}>
            <MultiLines metric1={"Birth Rate"} metric2={"Death Numbers"} />
          </div>
          <div className={styles.chart}>
            <MultiLines metric1={"Inflation"} metric2={"Real GDP"} />
          </div>
          <div className={styles.chart}>
            <MultiLines metric1={"Unemployment Numbers"} metric2={"Real GDP"} />
          </div>
          <div className={styles.chart}>
            <MultiLines
              metric1={"Infant Mortality Number"}
              metric2={"Birth Rate"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Comparisons;
