import React, { useEffect, useRef } from "react";
import c3 from "c3";
import "c3/c3.css"; // Import C3 CSS
import { useCsvContext } from "../../context/CsvContext";

const LineChart = () => {
  const svgRef = useRef();
  const { presidents } = useCsvContext();

  useEffect(() => {
    if (!presidents) return;

    const containerWidth = svgRef.current.offsetWidth,
      containerHeight = 400;

    const margin = { top: 20, right: 30, bottom: 30, left: 70 },
      width = containerWidth - margin.left - margin.right,
      height = containerHeight - margin.top - margin.bottom;

    const data = presidents.map((president) => {
      const matchResult = president["Entry Age and Year"].match(
        /year: (\d+), value: (\d+)/
      );
      return {
        name: president.Full_Name.split(" ").pop(), // President's name
        year: parseInt(matchResult[1]),
        age: parseInt(matchResult[2]),
      };
    });

    const years = data.map((d) => new Date(d.year, 0, 1));
    const ages = data.map((d) => d.age);

    const chart = c3.generate({
      bindto: svgRef.current,
      data: {
        x: "Year",
        columns: [
          ["Year", ...years],
          ["Age", ...ages],
        ],
        type: "line",
        names: {
          // Customize the series names for tooltip
          Age: "Age",
        },
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y",
          },
          label: {
            text: "Year",
            position: "outer-center",
          },
        },
        y: {
          label: {
            text: "Age",
            position: "outer-middle",
          },
        },
      },

      tooltip: {
        format: {
          title: function (x) {
            // Ensure the index is within the bounds of the data array
            const index = Math.max(0, Math.min(x - 1, data.length - 1));
            return data[index].name; // Display president's name as title
          },
          value: function (value, ratio, id) {
            return value + " years";
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [presidents]);

  return <div className="line-chart-container" ref={svgRef}></div>;
};

export default LineChart;
