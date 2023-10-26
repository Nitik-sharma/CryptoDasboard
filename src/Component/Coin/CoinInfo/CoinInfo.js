import React, { useState } from "react";
import "./CoinInfo.css";
function CoinInfo({ heading, desc }) {
  let shortDesc =
    desc?.slice(0, 200) +
    "<p style='color: var(--gray) !important'>Read More....</p>";
  let longWord =
    desc + "<p style='color: var(--gray) !important'>Read Less....</p>";

  const [flag, setFlag] = useState(false);
  return (
    <div className="info-wrapper" style={{ padding: "0rem 1rem" }}>
      <h1 className="info-wreaper-heading">{heading}</h1>
      {desc?.length > 200 ? (
        <p
          className="info-wreaper-discription"
          onClick={() => setFlag(!flag)}
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longWord }}
        ></p>
      ) : (
        <p
          className="info-wreaper-discription"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
      )}
    </div>
  );
}

export default CoinInfo;
