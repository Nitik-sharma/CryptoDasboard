import axios from "axios";
export const getPrice = (id, days, priceType) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=full`
    )
    .then((response) => {
      console.log("prices-->", response.data);
      return response.data[priceType];
    })
    .catch((error) => {
      console.log("error-->", error.message);
    });

  return prices;
};
