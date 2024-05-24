import React, { useEffect, useRef } from "react";
import { useCsvContext } from "../../context/CsvContext";
import c3 from "c3";
import styles from "./Timeline.module.scss";

const Timeline = ({ metric }) => {
  const chartRef = useRef();
  const { selectedPresident, presidents, isLoading } = useCsvContext();

  const rate = selectedPresident?.[metric];

  useEffect(() => {
    const AreaChart = () => {
      if (!rate) {
        return;
      }
      const deathEntries = rate.split("\n").map((line) => {
        const parts = line.split(",");
        const year = parseInt(parts[0].split(":")[1]);
        const value = parseInt(parts[1].split(":")[1]);
        return { year, value };
      });

      const data = {
        x: "year",
        columns: [["year"], ["value"]],
        type: "area",
      };

      deathEntries.forEach((entry) => {
        const year = new Date(entry.year, 0, 1);
        const value = entry.value;
        data.columns[0].push(year);
        data.columns[1].push(value);
      });

      const minValue = Math.min(...deathEntries.map((entry) => entry.value));
      const maxValue = Math.max(...deathEntries.map((entry) => entry.value));

      const chart = c3.generate({
        bindto: chartRef.current,
        data: data,
        color: {
          pattern: ["#268c36"],
        },
        axis: {
          x: {
            type: "timeseries",
            tick: {
              format: "%Y",
            },
          },
          y: {
            min: minValue,
            max: maxValue,
          },
        },
      });

      return () => {
        chart.destroy();
      };
    };

    AreaChart();
    window.addEventListener("resize", AreaChart);

    return () => {
      window.removeEventListener("resize", AreaChart);
    };
  }, [selectedPresident, metric, rate, presidents]);

  return <div className={styles.container} ref={chartRef}></div>;
};

export default Timeline;
