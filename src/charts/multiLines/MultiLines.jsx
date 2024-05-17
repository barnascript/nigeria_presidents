import React, { useEffect, useRef } from "react";
import { useCsvContext } from "../../context/CsvContext";
import c3 from "c3";

const Timeline = ({ metric1, metric2 }) => {
  const chartRef = useRef();
  const { selectedPresident } = useCsvContext();

  useEffect(() => {
    if (!selectedPresident) return;

    const birthEntries = selectedPresident && selectedPresident?.[metric1];
    const deathEntries = selectedPresident && selectedPresident?.[metric2];

    const parseEntry = (rate) => {
      return rate.split("\n").map((line) => {
        const parts = line.split(",");
        const year = parseInt(parts[0].split(":")[1]);
        const value = parseInt(parts[1].split(":")[1]);
        return { year, value };
      });
    };

    const birthData = parseEntry(birthEntries);
    const deathData = parseEntry(deathEntries);

    const allYears = new Set([
      ...birthData.map((entry) => entry.year),
      ...deathData.map((entry) => entry.year),
    ]);
    const years = Array.from(allYears).sort((a, b) => a - b);

    const birthValues = years.map((year) => {
      const entry = birthData.find((e) => e.year === year);
      return entry ? entry.value : null;
    });

    const deathValues = years.map((year) => {
      const entry = deathData.find((e) => e.year === year);
      return entry ? entry.value : null;
    });

    // Determine y-axis range
    const maxYValue = Math.max(
      Math.max(...birthValues.filter((val) => val !== null)),
      Math.max(...deathValues.filter((val) => val !== null))
    );
    const minYValue = Math.min(
      Math.min(...birthValues.filter((val) => val !== null)),
      Math.min(...deathValues.filter((val) => val !== null))
    );

    const data = {
      x: "x",
      columns: [
        ["x", ...years],
        [metric1, ...birthValues],
        [metric2, ...deathValues],
      ],
      types: {
        "Birth Rate": "line",
        "Death Rate": "line",
      },
    };

    const chart = c3.generate({
      bindto: chartRef.current,
      data: data,
      axis: {
        x: {
          type: "category",
          categories: years,
        },
        y: {
          label: {
            text: "Rates",
            position: "outer-middle",
          },
          max: maxYValue,
          min: minYValue,
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [selectedPresident]);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default Timeline;
