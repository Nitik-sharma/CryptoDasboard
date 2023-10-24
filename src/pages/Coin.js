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
  }); // Initialize with an empty object

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
        const prices = await getPrice(id, days);
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
    const prices = await getPrice(id, event.target.value);
    if (prices.length > 0) {
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
        <div className="gray-wrapper" style={{ padding: "0rem 1rem" }}>
          <List coin={coinData} />
        </div>
      )}
      <div className="gray-wrapper">
        <SelectDays day={days} handleDayChange={handleDayChange} />
        <LineChart chartData={chartData} />
      </div>
      <CoinInfo heading={coinData.name} desc={coinData.desc} />
    </div>
  );
}

export default CoinPage;
