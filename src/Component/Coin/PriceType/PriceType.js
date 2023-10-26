import * as React from "react";
import { useState } from "react";
import "./PriceType.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function TogglePriceType({ priceType, handlePriceTypeChange }) {
  return (
    <div className="toggle-btn">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          "& .Mui-selected": {
            color: "blue !important",
          },
          borderColor: "blue !important",
          border: "unset ",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset ",
            color: "blue ",
          },
          "& .MuiToggleButton-standard": {
            color: "blue  ",
          },
        }}
      >
        <ToggleButton value="prices">Price</ToggleButton>
        <ToggleButton value="market_caps"> MarketCap</ToggleButton>
        <ToggleButton value="total_volumes">TotalVlome</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
