import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = ({ chartSeries = [] }) => {
  const chartOptions = {
    chart: {
      id: "basic-area",
      toolbar: {
        show: false,
      },
      type: "area",
    },
    xaxis: {
      type: "category", 
      labels: {
        rotate: -45,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "80%",
        borderRadius: 4,
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        colors: ["var(--primary2)"],
      },
      background: {
        enabled: true,
        foreColor: "#fff",
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "var(--primary2)",
        opacity: 0.9,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: "var(--primary2)",
          opacity: 0.45,
        },
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: "var(--primary2)",
        opacity: 0.35,
      },
    },
    stroke: {
      show: true,
      width: 3,
      colors: "#7367f0",
    },
    fill: {
      colors: ["var(--primary2)", "var(--secondary2)"],
      opacity: 1,
    },
    yaxis: {
      show: true,
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={370}
      />
    </div>
  );
};

export default BarChart;
