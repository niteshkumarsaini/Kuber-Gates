import { useState } from "react";
import {
  SiBitcoin,
  SiEthereum,
  SiLitecoin,
  SiDogecoin,
  SiBinance,
  SiRipple,
  SiTether,
  SiPolygon,
  SiSolana
} from "react-icons/si";
import "../Styles/CryptoAssets.css";
import tronIcon from "/tron.svg";

const TABS = [
  "Accepted by merchants",
  "Settlements",
  "Crypto Payouts & Withdrawals",
  "Deposits"
];

const DATA = {
  "Accepted by merchants": [
    {
      name: "Bitcoin",
      desc: "Decentralized digital currency used worldwide",
      icon: <SiBitcoin />,
      networks: ["Bitcoin", "Lightning"]
    },
    {
      name: "Ethereum",
      desc: "Smart-contract powered blockchain",
      icon: <SiEthereum />,
      networks: ["Ethereum", "BSC", "Arbitrum", "Base", "Optimism"]
    },
    {
      name: "Litecoin",
      desc: "Fast and low-cost digital payments",
      icon: <SiLitecoin />,
      networks: ["Litecoin"]
    },
    {
      name: "TRON",
      desc: "High-speed blockchain for stablecoins",
      icon: <img src={tronIcon} alt="TRON" className="tron-icon" />,
      networks: ["Tron"]
    },
    {
      name: "XRP",
      desc: "Optimized for global value transfer",
      icon: <SiRipple />,
      networks: ["XRP"]
    },
    {
      name: "USDC",
      desc: "Fully-backed regulated stablecoin",
      icon: <SiTether />,
      networks: ["Ethereum", "Polygon", "Solana", "Arbitrum"]
    },
    {
      name: "Binance Coin",
      desc: "Native asset of Binance ecosystem",
      icon: <SiBinance />,
      networks: ["Ethereum", "BSC"]
    },
    {
      name: "Polygon",
      desc: "Scalable Ethereum layer-2 network",
      icon: <SiPolygon />,
      networks: ["Ethereum", "Polygon"]
    },
    {
      name: "Solana",
      desc: "High-performance blockchain",
      icon: <SiSolana />,
      networks: ["Solana"]
    },
    {
      name: "Dogecoin",
      desc: "Community-driven digital currency",
      icon: <SiDogecoin />,
      networks: ["Dogecoin"]
    }
  ],

  "Settlements": [
    {
      name: "Bitcoin",
      desc: "On-chain merchant settlements",
      icon: <SiBitcoin />,
      networks: ["On-chain"]
    },
    {
      name: "Ethereum",
      desc: "Reliable blockchain settlements",
      icon: <SiEthereum />,
      networks: ["On-chain"]
    }
  ],

  "Crypto Payouts & Withdrawals": [
    {
      name: "Ethereum",
      desc: "Multi-network payouts",
      icon: <SiEthereum />,
      networks: ["Ethereum", "Arbitrum", "Base"]
    },
    {
      name: "USDC",
      desc: "Stable payouts across chains",
      icon: <SiTether />,
      networks: ["Ethereum", "Polygon", "Optimism"]
    },
    {
      name: "Bitcoin",
      desc: "Direct BTC withdrawals",
      icon: <SiBitcoin />,
      networks: ["Bitcoin"]
    }
  ],

  "Deposits": [
    {
      name: "Bitcoin",
      desc: "Secure blockchain deposits",
      icon: <SiBitcoin />,
      networks: ["Bitcoin"]
    },
    {
      name: "Ethereum",
      desc: "Multi-chain crypto deposits",
      icon: <SiEthereum />,
      networks: ["Ethereum", "BSC"]
    },
    {
      name: "USDC",
      desc: "Stablecoin deposits",
      icon: <SiTether />,
      networks: ["Ethereum", "Polygon"]
    }
  ]
};

export default function CryptoAssets() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="crypto-section">
      <div className="crypto-container">

        {/* ===== Heading ===== */}
        <div className="crypto-heading">
          <h2>Supported Crypto Assets</h2>
          <p>
            Accept, settle, and manage leading cryptocurrencies across multiple
            blockchains with enterprise-grade reliability.
          </p>
        </div>

        {/* Tabs */}
        <div className="crypto-tabs">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`crypto-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="crypto-grid">
          {DATA[activeTab].map((item, index) => (
            <div className="crypto-card" key={index}>
              <div className="crypto-card-header">
                <div className="crypto-icon">{item.icon}</div>

                <div className="crypto-title">
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>

              <div className="crypto-divider" />

              <p className="crypto-label">Supported networks</p>

              <div className="crypto-tags">
                {item.networks.map((net, i) => (
                  <span key={i} className="crypto-tag">
                    {net}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
