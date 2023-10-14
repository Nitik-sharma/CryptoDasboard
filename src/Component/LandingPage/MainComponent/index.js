import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import Button from "../../Common/Buttoon";
import iphone from "../../../assest/iphone.png";
import gradient from "../../../assest/gradient.png";
function MainComp() {
  return (
    <div className="flex-info">
      <div className="left">
        <motion.h1
          className="crypto-tracter-heading"
          initial={{ opacity: 0, Y: 50 }}
          animate={{ opacity: 1, Y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, Y: 50 }}
          animate={{ opacity: 1, Y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Real Time .
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, Y: 50 }}
          animate={{ opacity: 1, Y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Track Crypto through a public api in real time . Visit the dashboard
          to do this.{" "}
        </motion.p>
        <motion.div
          className="flex-btn"
          initial={{ opacity: 0, Y: 50 }}
          animate={{ opacity: 1, Y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button text={"DashBoard"} />
          <Button text={"Share App"} outLined={true} />
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -30 }}
          animate={{ y: 30 }}
          transition={{
            type: "smooth",
            repeatType:"mirror",
            duration:2,
            repeat:Infinity
          }}
        />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  );
}

export default MainComp;
