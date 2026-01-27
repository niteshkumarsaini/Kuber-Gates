import "../Styles/StatsSection.css";

const StatsSection = () => {
  return (
    <div className="stats-card">

      <div className="stats-header">
        <h3>Transaction Growth</h3>
        <p>
          Real-time crypto payment volume across the Kuber Gates network
        </p>
      </div>

      <div className="stats-metrics">
        <div className="metric">
          <span>Total Volume</span>
          <strong>$7.2M</strong>
        </div>
        <div className="metric">
          <span>Active Merchants</span>
          <strong>1,284</strong>
        </div>
        <div className="metric">
          <span>Success Rate</span>
          <strong>99.98%</strong>
        </div>
      </div>
<div className="stats-chart">
  <img
    src="./chart.jpg"
    alt="Transaction Growth Chart"
  />
</div>

    </div>
  );
};

export default StatsSection;
