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

      // Extract unique ages from the presidents data
      const uniqueAges = [
        ...new Set(
          presidents.map((president) => president["Age When he came to power"])
        ),
      ];

      // Calculate the total number of presidents
      const totalPresidents = presidents.length;

      // Calculate the proportion of each age group relative to the total number of presidents
      const ageProportions = uniqueAges.reduce((acc, age) => {
        const count = presidents.filter(
          (president) => president["Age When he came to power"] === age
        ).length;
        acc[age] = count / totalPresidents;
        return acc;
      }, {});

      // Sort the data in descending order based on age (as numbers)
      const sortedData = Object.entries(ageProportions)
        .sort((a, b) => b[0] - a[0]) // Numerical sort
        .map(([age, proportion]) => [parseInt(age), proportion]); // Convert age to number

      const chart = c3.generate({
        bindto: chartRef.current,
        data: {
          columns: sortedData,
          type: "pie",
        },
        tooltip: {
          format: {
            value: function (value) {
              return `${(value * 100).toFixed(2)}%`; // Format percentage with two decimal places
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
    <div className="piechart-container">
      <div ref={chartRef}></div>
    </div>
  );
};

export default AgeDistribution;
