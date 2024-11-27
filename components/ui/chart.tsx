import dynamic from "next/dynamic";
import React, { useState } from "react";

// Dynamically import ReactApexChart with SSR disabled
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ChartComponent: React.FC = () => {
  const [state] = useState({
    series: [
      {
        name: "Supply",
        data: [31, 40, 28, 51, 42],
      },
      {
        name: "Demand",
        data: [11, 32, 45, 32, 34],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area" as const,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth" as const,
      },
      xaxis: {
        type: "datetime" as const,
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={200}
        />
      </div>
    </div>
  );
};

export default ChartComponent;
