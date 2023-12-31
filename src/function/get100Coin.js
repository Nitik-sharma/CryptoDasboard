import axios from "axios";
export const get100Coin = () => {
  const myCoin = axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
    .then((res) => {
      console.log("RESPONSE-->", res);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return myCoin;
};
