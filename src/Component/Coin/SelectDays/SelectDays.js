import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Select.css";

export default function SelectDays({ day, handleDayChange, noText }) {
  return (
    <div className="select">
      <p>Price in Change</p>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={day}
        label="Days"
        onChange={handleDayChange}
        sx={{
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
        }}
        className={noText && "select-coin"}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={10}>10 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={360}>1 year</MenuItem>
      </Select>
    </div>
  );
}
