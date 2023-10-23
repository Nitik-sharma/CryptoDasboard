import React, { useEffect, useState } from "react";
import "./Scrool.css";
import KeyboardDoubleArrowUpTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowUpTwoTone";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add an event listener for the "scroll" event when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle scroll events
  function handleScroll() {
    if (window.scrollY > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  // Function to scroll back to the top of the page
  function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className={`back-to-top ${showButton ? "visible" : ""}`}
      onClick={topFunction}
    >
      <KeyboardDoubleArrowUpTwoToneIcon
        style={{ color: "var(--blue)" }}
        className="back-logo"
      />
    </div>
  );
}

export default BackToTop;
