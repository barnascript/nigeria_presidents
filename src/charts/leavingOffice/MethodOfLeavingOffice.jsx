import React, { useEffect } from "react";
import c3 from "c3";
import { useCsvContext } from "../../context/CsvContext";

const LeavingOffice = () => {
  const { presidents } = useCsvContext();

  useEffect(() => {
    if (!presidents) return;

    const methodCounts = {};
    presidents.forEach((president) => {
      const method = president["Method of leaving power"];
      methodCounts[method] = (methodCounts[method] || 0) + 1;
    });

    const data = Object.entries(methodCounts).map(([method, count]) => [
      method,
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

export default LeavingOffice;
