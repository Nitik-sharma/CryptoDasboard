import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import { CategoryScale, registerables } from "chart.js";

Chart.register(CategoryScale);
function LineChart({ chartData, multiAxis, priceType }) {
  console.log(chartData);
  Chart.register(...registerables);
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
  };

  return <Line data={chartData} options={config.options} />;
}

export default LineChart;
