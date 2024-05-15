import React, { useEffect } from "react";
import c3 from "c3";
import { useCsvContext } from "../../context/CsvContext";

const PieChart = () => {
  const { presidents } = useCsvContext();

  useEffect(() => {
    if (!presidents) return;

    // Count the occurrences of each month
    const monthCounts = presidents.reduce((acc, president) => {
      const month = president["Month of Birth"];
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});

    // Convert the counts into an array of arrays
    const data = Object.entries(monthCounts).map(([month, count]) => [
      month,
      count,
    ]);

    const chart = c3.generate({
      bindto: "#pieChart",
      data: {
        columns: data,
        type: "pie",
      },
      pie: {
        label: {
          format: function (value, ratio, id) {
            return value; // Display the count as label
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [presidents]);

  return <div id="pieChart" />;
};

export default PieChart;
