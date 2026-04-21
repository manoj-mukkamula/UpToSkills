import {
  IconStatUsers,
  IconStatChildren,
  IconStatCenters,
  IconStatRevenue,
} from "../Icons";

const ICON_MAP = {
  users:    IconStatUsers,
  children: IconStatChildren,
  centers:  IconStatCenters,
  revenue:  IconStatRevenue,
};

export default function StatCard({ label, value, change, positive, iconBg, iconColor, icon }) {
  const Icon = ICON_MAP[icon];

  return (
    <div style={styles.card}>
      {/* Top row: icon + badge */}
      <div style={styles.topRow}>
        <div style={{ ...styles.iconWrap, background: iconBg }}>
          {Icon && <Icon color={iconColor} size={26} />}
        </div>
        <span
          style={{
            ...styles.changeBadge,
            color: positive ? "#16A34A" : "#DC2626",
            background: positive ? "#DCFCE7" : "#FEE2E2",
          }}
        >
          {change}
        </span>
      </div>

      {/* Label + Value */}
      <div style={styles.bottomRow}>
        <p style={styles.label}>{label}</p>
        <p style={styles.value}>{value}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "var(--bg-card)",
    borderRadius: "var(--r-lg)",
    border: "1px solid var(--border)",
    padding: "22px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    boxShadow: "var(--shadow-card)",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  changeBadge: {
    fontSize: 12,
    fontWeight: 700,
    padding: "4px 10px",
    borderRadius: 20,
  },
  bottomRow: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  label: {
    fontSize: 13,
    fontWeight: 500,
    color: "var(--text-muted)",
    letterSpacing: "0.01em",
  },
  value: {
    fontSize: 32,
    fontWeight: 800,
    color: "var(--text-primary)",
    letterSpacing: "-0.8px",
    lineHeight: 1.1,
  },
};
