import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../Styles/AttractiveGraph.css";

const data = [
  { month: "Jan", value: 2200 },
  { month: "Feb", value: 2800 },
  { month: "Mar", value: 3600 },
  { month: "Apr", value: 4800 },
  { month: "May", value: 6200 },
  { month: "Jun", value: 7800 },
  { month: "Jul", value: 9200 },
];

export default function AttractiveGraph() {
  return (
    <section className="graph-section">
      <motion.div
        className="graph-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* HEADER */}
        <div className="graph-header">
          <div>
            <h3>Transaction Volume</h3>
            <p>Monthly crypto payment growth</p>
          </div>
          <span className="graph-badge">+32% ↑</span>
        </div>

        {/* GRAPH */}
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={data}>
            <defs>
              {/* MAIN GRADIENT */}
              <linearGradient id="mainGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.55} />
                <stop offset="60%" stopColor="#93c5fd" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#ffffff" stopOpacity={0.05} />
              </linearGradient>

              {/* GLOW */}
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              tick={{ fill: "#64748b", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#64748b", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{ stroke: "#c7d2fe", strokeWidth: 1 }}
              contentStyle={{
                background: "rgba(255,255,255,0.9)",
                borderRadius: "14px",
                border: "none",
                boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                fontSize: "13px",
              }}
            />

            {/* SHADOW AREA */}
            <Area
              type="monotone"
              dataKey="value"
              fill="url(#mainGradient)"
              stroke="none"
            />

            {/* MAIN LINE */}
            <Area
              type="monotone"
              dataKey="value"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth={4}
              dot={{
                r: 4,
                fill: "#2563eb",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 7,
                fill: "#2563eb",
                stroke: "#ffffff",
                strokeWidth: 3,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* FOOTER STATS */}
        <div className="graph-stats">
          <div>
            <strong>$9.2M</strong>
            <span>Total Volume</span>
          </div>
          <div>
            <strong>1,480</strong>
            <span>Merchants</span>
          </div>
          <div>
            <strong>99.99%</strong>
            <span>Success Rate</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
