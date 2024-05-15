import React, { useEffect, useRef } from "react";
import c3 from "c3";
import "c3/c3.css"; // Import C3 CSS
import { useCsvContext } from "../../context/CsvContext";

const AgeDistribution = () => {
  const { presidents } = useCsvContext();
  const chartRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (!presidents) return;

      const data = presidents.map((president) => ({
        name: president.Full_Name.split(" ").pop(),
        age: president["Age When he came to power"],
      }));

      const categories = data.map((d) => d.name);
      const values = data.map((d) => d.age);

      const chart = c3.generate({
        bindto: chartRef.current,
        data: {
          columns: [["Age", ...values]],
          type: "bar",
        },
        axis: {
          rotated: true, // Transpose the axes
          x: {
            type: "category",
            categories: categories,
            label: {
              text: "Age", // X-axis label
              position: "outer-middle",
            },
          },
          y: {
            label: {
              text: "President", // Y-axis label
              position: "outer-center",
            },
          },
        },
        bar: {
          width: {
            ratio: 0.8, // Adjust the width of bars
          },
        },
        tooltip: {
          format: {
            value: function (value, ratio, id, index) {
              return `${categories[index]}: ${value} years`;
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [presidents]);

  return (
    <div className="barchart-container">
      <div ref={chartRef}></div>
    </div>
  );
};

export default AgeDistribution;
