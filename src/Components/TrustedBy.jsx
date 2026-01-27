import React, { useEffect, useState } from "react";
import "../Styles/TrustedBy.css";

const countersData = [
  { label: "Businesses Trust Us", target: 50, suffix: "+" },
  { label: "Satisfied Clients", target: 120, suffix: "+" },
  { label: "Transactions Processed Daily", target: 1000, suffix: "K+" },
];

const TrustedBy = () => {
  const [counts, setCounts] = useState(countersData.map(() => 0));

  useEffect(() => {
    const duration = 2000; // animation duration in ms
    const intervalTime = 30; // update every 30ms

    const increments = countersData.map(c => c.target / (duration / intervalTime));

    const counterInterval = setInterval(() => {
      setCounts(prevCounts => {
        return prevCounts.map((count, index) => {
          const newCount = count + increments[index];
          if (newCount >= countersData[index].target) return countersData[index].target;
          return newCount;
        });
      });
    }, intervalTime);

    return () => clearInterval(counterInterval);
  }, []);

  return (
    <section className="trustedby-section">
      <div className="trustedby-container">
        <p className="trustedby-title">
          Trusted by fast-growing businesses and individuals worldwide
        </p>

        <div className="trustedby-counters">
          {countersData.map((counter, index) => (
            <div key={index} className="counter-box">
              <h2>{Math.floor(counts[index])}{counter.suffix}</h2>
              <p>{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
