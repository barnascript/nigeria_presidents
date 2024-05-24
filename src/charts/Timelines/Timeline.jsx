import React, { useEffect, useRef, useCallback } from "react";
import { useCsvContext } from "../../context/CsvContext";
import c3 from "c3";
import styles from "./Timeline.module.scss";

const Timeline = ({ metric }) => {
  const chartRef = useRef();
  const { selectedPresident, presidents, isLoading } = useCsvContext();
  const chartInstance = useRef(null); // Ref to store the chart instance

  const rate = selectedPresident?.[metric];

  // Memoize the resize handler function
  const handleResize = useCallback(() => {
    if (chartInstance.current) {
      chartInstance.current.resize(); // Update chart dimensions
    }
  }, []); // Empty dependency array means this function is memoized and does not change across renders

  useEffect(() => {
    // Initialize the chart once
    if (rate && !chartInstance.current) {
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

      chartInstance.current = c3.generate({
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
    }

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedPresident, metric, rate, presidents, handleResize]); // Include handleResize in the dependency array

  return <div className={styles.container} ref={chartRef}></div>;
};

export default Timeline;
