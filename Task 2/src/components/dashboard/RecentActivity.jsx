import { IconActivity } from "../Icons";

const TYPE_COLORS = {
  registration: { bg: "#FFF3E8", color: "#F97316" },
  user:         { bg: "#EBF3FF", color: "#3B82F6" },
  payment:      { bg: "#EAFAF1", color: "#16A34A" },
  report:       { bg: "#F3EEFF", color: "#8B5CF6" },
};

export default function RecentActivity({ items }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>Recent Activities</h3>
        <button style={styles.viewAll}>View all</button>
      </div>

      <div style={styles.list}>
        {items.map((item, idx) => {
          const theme = TYPE_COLORS[item.type] || TYPE_COLORS.registration;
          return (
            <div key={item.id} style={{ ...styles.row, borderBottom: idx < items.length - 1 ? "1px solid var(--border-light)" : "none" }}>
              {/* Icon */}
              <div style={{ ...styles.iconBox, background: theme.bg }}>
                <IconActivity type={item.type} size={15} />
              </div>

              {/* Content */}
              <div style={styles.content}>
                <p style={styles.actTitle}>{item.title}</p>
                <p style={styles.actDesc}>{item.desc}</p>
              </div>

              {/* Time */}
              <p style={styles.time}>{item.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#FFFFFF",
    borderRadius: "var(--r-lg)",
    border: "1px solid var(--border)",
    padding: "22px 24px",
    boxShadow: "var(--shadow-card)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 15,
    fontWeight: 700,
    color: "var(--text-primary)",
    letterSpacing: "-0.2px",
  },
  viewAll: {
    fontSize: 12,
    fontWeight: 600,
    color: "#F97316",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    alignItems: "flex-start",
    gap: 13,
    padding: "13px 0",
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: 1,
  },
  content: {
    flex: 1,
    minWidth: 0,
  },
  actTitle: {
    fontWeight: 700,
    fontSize: 13.5,
    color: "var(--text-primary)",
    letterSpacing: "-0.1px",
    lineHeight: 1.4,
  },
  actDesc: {
    fontSize: 12,
    color: "var(--text-secondary)",
    marginTop: 3,
    lineHeight: 1.5,
    fontWeight: 400,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  time: {
    fontSize: 11,
    color: "var(--text-muted)",
    flexShrink: 0,
    marginTop: 2,
    fontWeight: 500,
  },
};
