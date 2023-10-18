import React from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import './List.css'
import { ConvertToNumber } from '../../../function/ConvertToNubmer';
function List({coin}) {
  return (
   
    <tr className='list-row'>
         <td className="flex-info">

           
        <img src={coin.image} className="image" />
        </td>
        <td>
        <div className="name-info">
          <p className="symbol">{coin.symbol}</p>
          <p className="name">{coin.name}</p>
        </div>
      </td>
     
      {coin.price_change_percentage_24h > 0 ? (
        <td className="chip-icon">
          <div className="chip-percent">
            <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
          </div>
          <div className="trending-up  td-icon">
            <TrendingUpRoundedIcon className="trending-icon  " />
          </div>
        </td>
      ) : (
        <td className="chip-icon">
          <div className="chip-percent chip-red ">
            <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
          </div>
          <div className="trending-up chip-red  td-icon">
            <TrendingDownRoundedIcon className="trending-icon  " />
          </div>
        </td>
      )}
    <td>
    <h3 className='coin-center' style={{ color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)" }}>{coin.current_price.toLocaleString()}</h3>
</td>
<td>
  <p className="total-volume  volume-right  td-total-volume">{coin.total_volume.toLocaleString()
  }</p>
  </td>
  <td>
   <p className="total-volume  volume-right Desktop-view">${coin.market_cap.toLocaleString()
}</p>


   <p className="total-volume  volume-right  mobile-view">${ConvertToNumber(coin.market_cap)
}</p>
</td>

   
       

      

    </tr>
  
  )
}

export default List
