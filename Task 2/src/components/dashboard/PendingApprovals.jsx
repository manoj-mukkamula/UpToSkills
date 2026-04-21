import { useState } from "react";
import { IconCheck, IconX } from "../Icons";

export default function PendingApprovals({ items }) {
  const [list, setList] = useState(items);

  function handleApprove(id) {
    setList((prev) => prev.filter((item) => item.id !== id));
  }

  function handleReject(id) {
    setList((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>Pending Center Approvals</h3>
        {list.length > 0 && (
          <span style={styles.countBadge}>{list.length}</span>
        )}
      </div>

      {list.length === 0 ? (
        <div style={styles.empty}>
          <p style={styles.emptyText}>All caught up! No pending approvals.</p>
        </div>
      ) : (
        <div style={styles.list}>
          {list.map((item) => (
            <div key={item.id} style={styles.row}>
              {/* Center avatar */}
              <div style={styles.centerAvatar}>
                {item.name.charAt(0)}
              </div>

              {/* Info */}
              <div style={styles.info}>
                <p style={styles.centerName}>{item.name}</p>
                <p style={styles.centerMeta}>{item.city} · {item.submitted}</p>
              </div>

              {/* Actions */}
              <div style={styles.actions}>
                <button
                  style={styles.actionBtn}
                  onClick={() => handleApprove(item.id)}
                  title="Approve"
                >
                  <IconCheck size={20} />
                </button>
                <button
                  style={styles.actionBtn}
                  onClick={() => handleReject(item.id)}
                  title="Reject"
                >
                  <IconX size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
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
    alignItems: "center",
    gap: 10,
    marginBottom: 18,
  },
  title: {
    fontSize: 15,
    fontWeight: 700,
    color: "var(--text-primary)",
    letterSpacing: "-0.2px",
  },
  countBadge: {
    background: "#FFF3E8",
    color: "#F97316",
    fontSize: 11,
    fontWeight: 700,
    padding: "2px 9px",
    borderRadius: 20,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: 13,
    padding: "13px 15px",
    background: "var(--bg-row)",
    borderRadius: "var(--r-md)",
    border: "1px solid var(--border-light)",
    transition: "background 0.15s",
  },
  centerAvatar: {
    width: 38,
    height: 38,
    borderRadius: 10,
    background: "#EBF3FF",
    color: "#3B82F6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 15,
    flexShrink: 0,
  },
  info: {
    flex: 1,
    minWidth: 0,
  },
  centerName: {
    fontWeight: 700,
    fontSize: 13.5,
    color: "var(--text-primary)",
    letterSpacing: "-0.1px",
  },
  centerMeta: {
    fontSize: 12,
    color: "var(--text-muted)",
    marginTop: 2,
    fontWeight: 400,
  },
  actions: {
    display: "flex",
    gap: 8,
    flexShrink: 0,
  },
  actionBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    transition: "background 0.12s",
  },
  empty: {
    padding: "20px 0",
    textAlign: "center",
  },
  emptyText: {
    fontSize: 13,
    color: "var(--text-muted)",
  },
};
