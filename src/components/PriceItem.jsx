import React from "react";

export const PriceItem = ({ name, price, change }) => {
  return (
    <div className={`coin ${change < 0 ? "falling" : "rising"}`}>
      <div className="coin__logo">
        <img src={`images/${name}.png`} alt={`img-${name}`} />
      </div>
      <div class="coin__name">
        <h3>{name}</h3>
        <span>/USD</span>
      </div>
      <div class="coin__price">
        <span class="price">${price}</span>
        <span class="change">{change}</span>
      </div>
    </div>
  );
};
