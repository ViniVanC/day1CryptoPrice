import React from "react";
import { PriceItem } from "./PriceItem";

export const PriceList = ({ coins }) => {
  return (
    <div className="priceList">
      {coins?.map((coin, i) => (
        <PriceItem
          key={i}
          name={coin[0]}
          price={coin[1].usd}
          change={coin[1].usd_24h_change.toFixed(5)}
        />
      ))}
    </div>
  );
};
