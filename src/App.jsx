import React, { useEffect, useState } from "react";
import { PriceList } from "./components/PriceList";

function App() {
  const [coins, setCoins] = useState();

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin%2Ccardano%2Clitecoin%2Cethereum%2Ctether%2Cbitcoin&vs_currencies=usd&include_24hr_change=true",
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((json) => {
        setCoins(Object.entries(json));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <PriceList coins={coins} />
      </div>
    </div>
  );
}

export default App;
