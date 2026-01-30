import React from "react";
import "../Styles/SupportedCoinsSection.css";

const coins = [
  { name: "Bitcoin", icon: "/coins/btc.svg" },
  { name: "Ethereum", icon: "/coins/eth.svg" },
  { name: "Litecoin", icon: "/coins/ltc.svg" },
  { name: "USDT", icon: "/coins/usdt.svg" },
  { name: "Tron", icon: "/coins/trx.svg" },
  { name: "BNB", icon: "/coins/bnb.svg" },
  { name: "Polygon", icon: "/coins/polygon.svg" },
  { name: "USDC", icon: "/coins/usdc.svg" },
  { name: "Bitcoin Cash", icon: "/coins/bch.svg" },
];

const SupportedCoinsSection = () => {
  return (
    <section className="supported-coins">
      <div className="supported-container">

        <h2 className="fade-in">Supported coins and blockchains</h2>

       <p className="supported-subtitle fade-in-delay">
  Accept a wide range of cryptocurrencies across leading global blockchains.
  Enable seamless payments with a single integration built for scale,
  security, and reliability across borders.
</p>


        <div className="coins-marquee">
          <div className="coins-track">
            {[...coins, ...coins].map((coin, index) => (
              <div className="coin-card" key={index} title={coin.name}>
                <img src={coin.icon} alt={coin.name} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupportedCoinsSection;
