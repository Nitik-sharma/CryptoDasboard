import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import "./SelectCoin.css";

import { get100Coin } from "../../../function/get100Coin";
export default function SelectCoin({ crypto1, crypto2, handleCoinChange }) {
  const [allCoin, setAllCoin] = useState([]);

  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    "& .MuiSvgIcon--root": {
      color: "#fff",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoin = await get100Coin();
    setAllCoin(myCoin);
  };

  return (
    <div className="coin-flex">
      <p>Crypto 1</p>

      <Select
        labelId="crypto1-select-label"
        id="crypto1-select"
        value={crypto1}
        label="Crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
        sx={style}
      >
        {allCoin &&
          allCoin.length > 0 &&
          allCoin
            .filter((item) => item.id !== crypto2)
            .map((coins, i) => (
              <MenuItem key={i} value={coins.id}>
                {coins.name}
              </MenuItem>
            ))}
      </Select>
      <p>Crypto 2</p>
      <Select
        labelId="crypto2-select-label"
        id="crypto2-select"
        value={crypto2}
        label="Crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
        sx={style}
      >
        {allCoin &&
          allCoin.length > 0 &&
          allCoin
            .filter((item) => item.id !== crypto1)
            .map((coins, i) => (
              <MenuItem key={i} value={coins.id}>
                {coins.name}
              </MenuItem>
            ))}
      </Select>
    </div>
  );
}
