import React from "react";
import "./Style.css";
import SwipeableTemporaryDrawer from "./Drower";
import Button from "../Buttoon/index.js";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <h1 className="logo">
        CryptoTracker <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">WatchList</p>
        </Link>
        <Link to="/dashboard">
          <Button text={"Dashboard"}  onclick={()=>console.log("hello world")}/>
        </Link>
      </div>
      <div className="mobile-view">
        <SwipeableTemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
