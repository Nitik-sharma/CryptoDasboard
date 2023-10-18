import React from "react";
import "./grid.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function Grid({ coin }) {
  return (
    <div className={`grid-container  ${coin.price_change_percentage_24h > 0 ?"grid-green":"grid-red"}`}>
      <div className="top-container">
        <img src={coin.image} className="image" />
        <div className="name-info">
          <p className="symbol">{coin.symbol}</p>
          <p className="name">{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ? (
        <div className="chip-icon">
          <div className="chip-percent">
            <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
          </div>
          <div className="trending-up">
            <TrendingUpRoundedIcon className="trending-icon" />
          </div>
        </div>
      ) : (
        <div className="chip-icon">
          <div className="chip-percent chip-red">
            <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
          </div>
          <div className="trending-up chip-red">
            <TrendingDownRoundedIcon className="trending-icon" />
          </div>
        </div>
      )}
      <div className="container-info">
        <h3 style={{ color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)" }}>{coin.current_price.toLocaleString()}</h3>

        <div className="volume">
          <p className="total-volume">Total Volume :{coin.total_volume.toLocaleString()
          }</p>
           <p className="total-volume">MarketCap:{coin.market_cap.toLocaleString()
}</p>
        </div>

      </div>

    </div>
  );
}

export default Grid;
