import React from "react";
import "./Style.css";
import SwipeableTemporaryDrawer from "./Drower";
import Button from "../Buttoon/index.js";
function Header() {
  return (
    <div className="header">
      <h1 className="logo">
        CryptoTracker <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/">
          <p className="link">Compare</p>
        </a>
        <a href="/">
          <p className="link">WatchList</p>
        </a>
        <a href="#">
          <Button text={"Dashboard"}  onclick={()=>console.log("hello world")}/>
        </a>
      </div>
      <div className="mobile-view">
        <SwipeableTemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
