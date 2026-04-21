import StatCard from "../components/dashboard/StatCard";
import UserGrowthChart from "../components/dashboard/UserGrowthChart";
import RevenueChart from "../components/dashboard/RevenueChart";
import PendingApprovals from "../components/dashboard/PendingApprovals";
import RecentActivity from "../components/dashboard/RecentActivity";

import {
  statCards,
  userGrowthData,
  revenueData,
  pendingApprovals,
  recentActivities,
} from "../data/mockData";

export default function DashboardPage() {
  return (
    <div style={styles.page}>

      {/* ── Stat Cards ── */}
      <div style={styles.statsGrid}>
        {statCards.map((card) => (
          <StatCard key={card.id} {...card} />
        ))}
      </div>

      {/* ── Charts Row ── */}
      <div style={styles.chartsRow}>
        <UserGrowthChart data={userGrowthData} />
        <RevenueChart data={revenueData} />
      </div>

      {/* ── Bottom Row ── */}
      <div style={styles.bottomRow}>
        <PendingApprovals items={pendingApprovals} />
        <RecentActivity items={recentActivities} />
      </div>

    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    gap: 22,
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
  },
  chartsRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
  },
  bottomRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
  },
};
