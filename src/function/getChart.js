import { ConvertDate } from "./ConvertTODate";
export const getChart = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices1.map((price) => ConvertDate(price[0])),
      datasets: [
        {
          label: "crypto1",
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          boderWidth: 2,
          fill: false,
          tension: 0.25,

          pointRadius: 1,
          yAxisID: "crypto1",
        },
        {
          label: "crypto2",
          data: prices2.map((price) => price[1]),
          borderColor: "#61c96f",
          boderWidth: 2,
          fill: false,
          tension: 0.25,

          pointRadius: 1,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price) => ConvertDate(price[0])),
      datasets: [
        {
          label: "crypto1",
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          boderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(128,233,0.1)",
          pointRadius: 1,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
