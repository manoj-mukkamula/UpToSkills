import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import DashboardPage from "./pages/DashboardPage";
import "./styles/globals.css";

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div style={styles.shell}>
      <Sidebar active={activePage} onNavigate={setActivePage} />

      <div style={styles.mainArea}>
        <Topbar pageTitle={activePage} />

        <main style={styles.content}>
          {activePage === "Dashboard" ? (
            <DashboardPage />
          ) : (
            <div style={styles.stub}>
              <p style={styles.stubText}>
                {activePage} page — coming soon.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

const styles = {
  shell: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
    background: "#F4F6FA",
  },
  mainArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  content: {
    flex: 1,
    overflowY: "auto",
    padding: "26px 28px",
  },
  stub: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    opacity: 0.4,
  },
  stubText: {
    fontSize: 18,
    fontWeight: 600,
    color: "#475569",
  },
};
