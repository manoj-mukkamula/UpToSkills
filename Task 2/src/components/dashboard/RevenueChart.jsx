import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={tooltipStyle}>
      <p style={tooltipLabel}>{label}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: 2,
            background: "#F97316",
            display: "block",
          }}
        />
        <span style={{ fontSize: 12, color: "#475569" }}>
          Revenue: <strong>Rs.{payload[0].value}L</strong>
        </span>
      </div>
    </div>
  );
};

const CustomDot = (props) => {
  const { cx, cy } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      fill="#F97316"
      stroke="#fff"
      strokeWidth={3}
    />
  );
};

export default function RevenueChart({ data }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>Monthly Revenue (in Rs. Lakhs)</h3>
        <div style={styles.legend}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 3,
                background: "#F97316",
                display: "block",
              }}
            />
            <span style={{ fontSize: 12, color: "#64748B", fontWeight: 500 }}>
              Revenue
            </span>
          </div>
        </div>
      </div>

      {/* Height increased to 280px, strokeWidth bumped to 3, dots larger at r=6 */}
      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={data}
          margin={{ top: 12, right: 8, left: -14, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="0"
            stroke="#F1F5F9"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: "#94A3B8",
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 500,
            }}
            dy={8}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 11,
              fill: "#94A3B8",
              fontFamily: "Plus Jakarta Sans",
            }}
            domain={[0, 140]}
            ticks={[0, 35, 70, 105, 140]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#F97316",
              strokeWidth: 1,
              strokeDasharray: "4 4",
            }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#F97316"
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 8, fill: "#F97316", stroke: "#fff", strokeWidth: 3 }}
            name="Revenue"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const styles = {
  card: {
    background: "#FFFFFF",
    borderRadius: "var(--r-lg)",
    border: "1px solid var(--border)",
    padding: "22px 24px 18px 24px",
    boxShadow: "var(--shadow-card)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 18,
  },
  title: {
    fontSize: 15,
    fontWeight: 700,
    color: "var(--text-primary)",
    letterSpacing: "-0.2px",
  },
  legend: {
    display: "flex",
    gap: 16,
  },
};

const tooltipStyle = {
  background: "#fff",
  border: "1px solid #E8EDF5",
  borderRadius: 10,
  padding: "10px 14px",
  boxShadow: "0 4px 20px rgba(15,23,42,0.1)",
  fontFamily: "Plus Jakarta Sans, sans-serif",
};
const tooltipLabel = {
  fontSize: 12,
  fontWeight: 700,
  color: "#0F172A",
  marginBottom: 6,
};
