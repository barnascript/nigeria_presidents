import React, { useEffect, useRef } from "react";
import c3 from "c3";
import "c3/c3.css"; // Import C3 CSS
import { useCsvContext } from "../../context/CsvContext";

const Religion = () => {
  const { presidents } = useCsvContext();
  const chartRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (!presidents) return;

      // Count the occurrences of each region
      const countByRegion = {};
      presidents.forEach((president) => {
        const religion = president["Religion"];
        countByRegion[religion] = (countByRegion[religion] || 0) + 1;
      });

      // Extract regions and counts from the object
      const regions = Object.keys(countByRegion);
      const counts = Object.values(countByRegion).map((count) => count - 1);

      const chart = c3.generate({
        bindto: chartRef.current,
        data: {
          x: "Region",
          columns: [
            ["Region", ...regions],
            ["Count", ...counts],
          ],
          type: "bar",
        },
        color: {
          pattern: ["#268c36"],
        },
        axis: {
          x: {
            type: "category",
            label: {
              text: "Religion",
              position: "outer-center",
            },
          },
          y: {
            label: {
              text: "Count",
              position: "outer-middle",
            },
          },
        },
        bar: {
          width: {
            ratio: 0.8,
          },
        },
        tooltip: {
          format: {
            value: function (value, ratio, id, index) {
              return `${regions[index]}: ${value}`;
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

export default Religion;
