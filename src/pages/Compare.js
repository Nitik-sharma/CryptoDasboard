import React, { useEffect, useState } from "react";
import Header from "../Component/Common/Header/Header.js";
import SelectCoin from "../Component/Compare/SelectCoins/SelectCoin.js";
import SelectDays from "../Component/Coin/SelectDays/SelectDays.js";
import CoinInfo from "../Component/Coin/CoinInfo/CoinInfo.js";
import List from "../Component/DashBoard/List/index.js";
import { ConverObj } from "../function/ConvertToObject.js";
import { getCoinData } from "../function/getCoinDtata.js";
import { getPrice } from "../function/getCoinPrice.js";
import Lodder from "../Component/Common/Lodder/Lodder.js";
import { getChart } from "../function/getChart.js";
import TogglePriceType from "../Component/Coin/PriceType/PriceType.js";

import LineChart from "../Component/Coin/LineChart/LineChart.js";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  const handleDayChange = async (event) => {
    setDays(event.target.value);
    const prices1 = await getPrice(crypto1, event.target.value, priceType);
    const prices2 = await getPrice(crypto2, event.target.value, priceType);
    getChart(setChartData, prices1, prices2);
    if (prices1.length > 0 && prices2.length > 0) {
      console.log("Both prices-->", prices1, prices2);
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    setLoading(true);
    setPriceType(newType);
    const prices1 = await getPrice(crypto1, days, newType);
    const prices2 = await getPrice(crypto2, days, newType);
    getChart(setChartData, prices1, prices2);
    setLoading(false);
  };

  const handleCoinChange = async (event, isCoin2) => {
    setLoading(true);
    var selectedCrypto = event.target.value;

    const data = await getCoinData(selectedCrypto);

    if (isCoin2) {
      setCrypto2(selectedCrypto);
      console.log("crypto2-->", crypto2);
      ConverObj(setCrypto2Data, data);
    } else {
      setCrypto1(selectedCrypto);
      ConverObj(setCrypto1Data, data);
    }

    const prices1 = await getPrice(crypto1, days, priceType);
    const prices2 = await getPrice(crypto2, days, priceType);

    if (prices1.length > 0 && prices2.length > 0) {
      console.log("Both prices-->", prices1, prices2);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [crypto1, crypto2, days, priceType]);

  async function getData() {
    setLoading(true);

    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if (data1) {
      ConverObj(setCrypto1Data, data1);
    }
    if (data2) {
      ConverObj(setCrypto2Data, data2);
      const prices1 = await getPrice(crypto1, days, priceType);
      const prices2 = await getPrice(crypto2, days, priceType);
      getChart(setChartData, prices1, prices2);
      if (prices1.length > 0 && prices2.length > 0) {
        console.log("Both prices-->", prices1, prices2);
        setLoading(false);
      }
    }
  }

  return (
    <div>
      <Header />
      {loading ? (
        <Lodder />
      ) : (
        <>
          <div className="coin-select">
            <SelectCoin
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              day={days}
              handleDayChange={handleDayChange}
              noPTag={true}
            />
          </div>
          <div className="gray-wrapper">
            <List coin={crypto1Data} />
          </div>
          <div className="gray-wrapper">
            <List coin={crypto2Data} />
          </div>
          <TogglePriceType
            priceType={priceType}
            handlePriceTypeChange={handlePriceTypeChange}
          />
          <LineChart chartData={chartData} priceType={priceType} />
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
}

export default ComparePage;
