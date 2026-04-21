import {
  BarChart,
  Bar,
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
      {payload.map((p) => (
        <div key={p.dataKey} style={tooltipRow}>
          <span style={{ ...tooltipDot, background: p.fill }} />
          <span style={tooltipText}>
            {p.name}: <strong>{p.value.toLocaleString()}</strong>
          </span>
        </div>
      ))}
    </div>
  );
};

export default function UserGrowthChart({ data }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>User Growth</h3>
        <div style={styles.legend}>
          <LegendItem color="#F97316" label="Registered" />
          <LegendItem color="#4ADE80" label="Active" />
        </div>
      </div>

      {/* barCategoryGap reduced to 20% and maxBarSize set to 52 for thicker, more visible bars */}
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          barCategoryGap="20%"
          barGap={3}
          margin={{ top: 8, right: 4, left: -14, bottom: 0 }}
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
            domain={[0, 1400]}
            ticks={[0, 350, 700, 1050, 1400]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(249,115,22,0.04)" }}
          />
          <Bar
            dataKey="registered"
            fill="#F97316"
            radius={[5, 5, 0, 0]}
            name="Registered"
            maxBarSize={52}
          />
          <Bar
            dataKey="active"
            fill="#4ADE80"
            radius={[5, 5, 0, 0]}
            name="Active"
            maxBarSize={52}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function LegendItem({ color, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: 3,
          background: color,
          display: "block",
        }}
      />
      <span style={{ fontSize: 12, color: "#64748B", fontWeight: 500 }}>
        {label}
      </span>
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
const tooltipRow = {
  display: "flex",
  alignItems: "center",
  gap: 7,
  marginBottom: 3,
};
const tooltipDot = {
  width: 8,
  height: 8,
  borderRadius: 2,
  display: "block",
  flexShrink: 0,
};
const tooltipText = {
  fontSize: 12,
  color: "#475569",
};
