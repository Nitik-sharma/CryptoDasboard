import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Component/Common/Header/Header";
import Lodder from "../Component/Common/Lodder/Lodder";
import { ConverObj } from "../function/ConvertToObject";
import axios from "axios";
import List from "../Component/DashBoard/List";
import CoinInfo from "../Component/Coin/CoinInfo/CoinInfo";
import { getCoinData } from "../function/getCoinDtata";
import { getPrice } from "../function/getCoinPrice";
import LineChart from "../Component/Coin/LineChart/LineChart";
import { ConvertDate } from "../function/ConvertTODate";
import SelectDays from "../Component/Coin/SelectDays/SelectDays";
import { getChart } from "../function/getChart";
import TogglePriceType from "../Component/Coin/PriceType/PriceType";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState({ name: "", desc: "" }); // Initialize with default values
  const [days, setDays] = useState(60);
  const [chartData, setChartData] = useState({
    datasets: [
      {
        data: [],
        label: "Default Data",
      },
    ],
  });
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    try {
      const data = await getCoinData(id);
      if (data) {
        ConverObj(setCoinData, data);
        const prices = await getPrice(id, days, priceType);
        if (prices.length > 0) {
          getChart(setChartData, prices);
          setLoading(false);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error, e.g., set an error state.
    }
  }
  const handleDayChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getPrice(id, event.target.value, priceType);
    if (prices.length > 0) {
      getChart(setChartData, prices);
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    setLoading(true);
    setPriceType(newType);

    const prices = await getPrice(id, days, newType);
    if (prices && prices.length > 0) {
      getChart(setChartData, prices);
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Lodder />
      ) : (
        <div className="gray-wrapper">
          <List coin={coinData} />
        </div>
      )}
      <div className="gray-wrapper">
        <SelectDays day={days} handleDayChange={handleDayChange} />
        <TogglePriceType
          priceType={priceType}
          handlePriceTypeChange={handlePriceTypeChange}
        />
        <LineChart
          chartData={chartData}
          priceType={priceType}
          multiAxis={true}
        />
      </div>
      <CoinInfo heading={coinData.name} desc={coinData.desc} />
    </div>
  );
}

export default CoinPage;
