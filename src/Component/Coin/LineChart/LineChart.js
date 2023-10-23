import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData, multiAxis, priceType }) {
  console.log(chartData);
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      // Corrected typo: 'intraction' to 'interaction'
      mode: "index",
      intersect: false,
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
