import React, { useEffect, useState } from "react";
import Header from "../Component/Common/Header/Header";
import TabsComponent from "../Component/DashBoard/Tabs";
import Search from "../Component/DashBoard/Search/Search";
import PaginationControlled from "../Component/DashBoard/Pagination/Pagination";
import BackToBottom from "../Component/Common/Scrool/Scroll.js";

import axios from "axios";
import Lodder from "../Component/Common/Lodder/Lodder";
function DashboardPage() {
  const [coin, setCoin] = useState([]);
  const [pageCoin, setPageCoin] = useState([]);
  const [isLoading,setLoading]=useState(true)
  const [search, setSearch] = useState("");
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    var prevIndex=(value-1)*10;
    setPageCoin(coin.slice(prevIndex,prevIndex+10));

  };
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        console.log("RESPONSE-->", res);
        setCoin(res.data);
        setPageCoin(res.data.slice(0,9));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const searchBox = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
var filterCoin=coin.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()))
  return (
   <>
   <Header />
   <BackToBottom/>
   {
    isLoading?(<Lodder/>):( <div>
      
     <Search search={search} searchBox={searchBox} />
     <TabsComponent coin={search?filterCoin:pageCoin} />
{
 !search&&<PaginationControlled page={page} handleChange={handleChange}/>
} 
    
   </div>)
   }
   </>
  );
}

export default DashboardPage;
