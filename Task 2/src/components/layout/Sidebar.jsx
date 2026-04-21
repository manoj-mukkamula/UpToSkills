import {
  IconDashboard,
  IconCenters,
  IconUsers,
  IconReports,
  IconSettings,
} from "../Icons";

const NAV_ITEMS = [
  { key: "Dashboard", Icon: IconDashboard },
  { key: "Centers",   Icon: IconCenters },
  { key: "Users",     Icon: IconUsers },
  { key: "Reports",   Icon: IconReports },
  { key: "Settings",  Icon: IconSettings },
];

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside style={styles.sidebar}>
      {/* Logo */}
      <div style={styles.logoWrap}>
        <div style={styles.logoIcon}>🐣</div>
        <div>
          <p style={styles.logoName}>LittleSteps</p>
          <p style={styles.logoRole}>System Administrator</p>
        </div>
      </div>

      {/* Navigation */}
      <nav style={styles.nav}>
        {NAV_ITEMS.map(({ key, Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              style={{
                ...styles.navItem,
                background: isActive ? "#F97316" : "transparent",
                color: isActive ? "#ffffff" : "#4B5563",
              }}
            >
              <span style={styles.navIconWrap}>
                <Icon size={17} color={isActive ? "#ffffff" : "#6B7280"} />
              </span>
              {key}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: 210,
    minWidth: 210,
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    padding: "0 0 24px 0",
    borderRight: "1px solid #E8EDF5",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 11,
    padding: "22px 20px 20px 20px",
    borderBottom: "1px solid #F1F5F9",
  },
  logoIcon: {
    width: 40,
    height: 40,
    background: "#F97316",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 21,
    flexShrink: 0,
  },
  logoName: {
    color: "#0F172A",
    fontWeight: 800,
    fontSize: 15,
    letterSpacing: "-0.2px",
    lineHeight: 1.2,
  },
  logoRole: {
    color: "#94A3B8",
    fontSize: 11,
    marginTop: 3,
    fontWeight: 400,
  },
  nav: {
    flex: 1,
    padding: "16px 12px 0 12px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    width: "100%",
    padding: "10px 14px",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    textAlign: "left",
    transition: "background 0.15s, color 0.15s",
    cursor: "pointer",
    border: "none",
  },
  navIconWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    flexShrink: 0,
  },
};
