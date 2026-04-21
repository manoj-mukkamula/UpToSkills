import { IconBell } from "../Icons";

export default function Topbar({ pageTitle = "Dashboard" }) {
  return (
    <header style={styles.topbar}>
      <h1 style={styles.pageTitle}>{pageTitle}</h1>

      <div style={styles.right}>
        {/* Notification Bell */}
        <div style={styles.bellWrap}>
          <IconBell size={19} color="#64748B" />
          <span style={styles.badge}>3</span>
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* User Info */}
        <div style={styles.userRow}>
          <div style={styles.avatar}>MK</div>
          <div>
            <p style={styles.userName}>Mukkamula Manoj</p>
            <p style={styles.userRole}>System Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}

const styles = {
  topbar: {
    height: 68,
    background: "#FFFFFF",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 28px",
    flexShrink: 0,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 800,
    color: "var(--text-primary)",
    letterSpacing: "-0.4px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 18,
  },
  bellWrap: {
    position: "relative",
    width: 40,
    height: 40,
    borderRadius: 10,
    border: "1.5px solid var(--border)",
    background: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    background: "var(--orange)",
    color: "#fff",
    fontSize: 9,
    fontWeight: 800,
    width: 17,
    height: 17,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #fff",
    fontFamily: "inherit",
  },
  divider: {
    width: 1,
    height: 30,
    background: "var(--border)",
  },
  userRow: {
    display: "flex",
    alignItems: "center",
    gap: 11,
    cursor: "pointer",
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: "var(--orange)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 13,
    letterSpacing: "0.02em",
    flexShrink: 0,
  },
  userName: {
    fontWeight: 700,
    fontSize: 13.5,
    color: "var(--text-primary)",
    lineHeight: 1.3,
  },
  userRole: {
    fontSize: 11,
    color: "var(--text-muted)",
    marginTop: 1,
    fontWeight: 400,
  },
};
