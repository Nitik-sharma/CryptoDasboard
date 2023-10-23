// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Header from '../Component/Common/Header/Header';
// import Lodder from '../Component/Common/Lodder/Lodder';
// import { ConverObj } from '../function/ConvertToObject';
// import axios from 'axios';
// import List from '../Component/DashBoard/List';
// import CoinInfo from '../Component/Coin/CoinInfo/CoinInfo';
// import { getCoinData } from '../function/getCoinDtata';
// import { getPrice } from '../function/getCoinPrice';
// import LineChart from '../Component/Coin/LineChart/LineChart';

// function CoinPage() {
//     const {id}=useParams();
//     const [isLoading,setLoading]=useState(true)
//     const [coinData,setCoinData]=useState();
//     const [days,setDays]=useState(30);
//     const [chartData,setChartData]=useState({});
//     useEffect(()=>{
//        if(id){
//        getData()

//        }
//     },[id])
//      async function getData(){
//         const data=await getCoinData(id);
//         if(data){
//           ConverObj(setCoinData,data);
//           const prices= await getPrice(id,days);
//           if(prices.length>0){
//            console.log("hello");
//            setChartData({
//             labels: ["Mon", "Tue", "Wed", "Fri", "Sat", "Sun"],
//             datasets: [
//               {
//                 label: 'Dataset 1',
//                 data: [12, 15, 20, 9, 6],
//                 borderColor: "#3a80e9",
//                 backgroundColor: "transparent",
//                 yAxisID: 'y',
//               },
//             ],
//           });
//            setLoading(false)
//           }

//         }

//      }
//   return (
//     <div>
//       <Header/>
//       {
//         isLoading?(<Lodder/>):(<div className='gray-wrapper'><List coin={coinData}/></div>)
//       }
//       <div className='gray-wrapper'><LineChart chartData={chartData}/></div>
//       <CoinInfo heading={coinData?.name} desc={coinData?.desc}/>
//     </div>
//   )
// }
// export default CoinPage

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

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState({ name: "", desc: "" }); // Initialize with default values
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({}); // Initialize with an empty object

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
          // Replace this dummy data with your actual chart data
          setChartData({
            datasets: [
              {
                data: [],
                label: "Default Data",
              },
            ],
          });
          setLoading(false);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error, e.g., set an error state.
    }
  }

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
        <LineChart chartData={chartData} />
      </div>
      <CoinInfo heading={coinData.name} desc={coinData.desc} />
    </div>
  );
}

export default CoinPage;
