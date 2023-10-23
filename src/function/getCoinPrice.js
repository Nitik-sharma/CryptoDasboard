import axios from "axios";
export const getPrice=(id,days)=>{
   const prices= axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=full`).then((response)=>{
          console.log("prices-->",response.data.prices);
          return response.data.prices;
        })
        .catch((error)=>{
          console.log("error-->",error.message);
        })

        return prices;

}