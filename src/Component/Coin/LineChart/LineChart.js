import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import { CategoryScale, registerables } from "chart.js";
import { ConvertToNumber } from "../../../function/ConvertToNubmer";

Chart.register(CategoryScale);
Chart.register(...registerables);

function LineChart({ chartData, multiAxis, priceType }) {
  const formatValue = (value) => {
    if (priceType === "prices") return "$" + value.toLocaleString();
    else return "$" + ConvertToNumber(value);
  };

  const config = {
    type: "line",
    options: {
      plugins: {
        legend: {
          display: multiAxis ? true : false,
        },
      },
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      crypto1: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          callback: formatValue,
        },
      },
      crypto2: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          callback: formatValue,
        },
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
  };

  return <Line data={chartData} options={config.options} />;
}

export default LineChart;
