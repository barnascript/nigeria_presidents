import React, { useEffect, useRef } from "react";
import { useCsvContext } from "../../context/CsvContext";
import c3 from "c3";
import "c3/c3.css";
import styles from "./OfficeAssumption.module.scss";

const OfficeAssumption = () => {
  const chartRef = useRef();
  const { presidents } = useCsvContext();

  useEffect(() => {
    const data = {
      x: "year",
      columns: [["year"], ["age"]],
      type: "line",
    };

    presidents.forEach((president) => {
      const matchResult = president["Entry Age and Year"].match(
        /year: (\d+), value: (\d+)/
      );
      const year = parseInt(matchResult[1]);
      const age = parseInt(matchResult[2]);
      data.columns[0].push(year);
      data.columns[1].push(age);
    });

    const chart = c3.generate({
      bindto: chartRef.current,
      data: data,
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y",
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [presidents]);

  return <div className={styles.container} ref={chartRef}></div>;
};

export default OfficeAssumption;
