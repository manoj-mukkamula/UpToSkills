/* All icons as named exports — clean, scalable SVGs */

export function IconDashboard({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="7" height="7" rx="1.5" fill={color} />
      <rect x="11" y="2" width="7" height="7" rx="1.5" fill={color} />
      <rect x="2" y="11" width="7" height="7" rx="1.5" fill={color} />
      <rect x="11" y="11" width="7" height="7" rx="1.5" fill={color} />
    </svg>
  );
}

export function IconCenters({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M2 18V8l8-5 8 5v10H2z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="7.5" y="11" width="5" height="7" rx="1" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

export function IconUsers({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="8" cy="6" r="3.5" stroke={color} strokeWidth="1.6" />
      <path d="M2 18c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 9c1.381 0 2.5 1.119 2.5 2.5V13" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="15.5" cy="6.5" r="2.5" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

export function IconReports({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="3" y="2" width="14" height="16" rx="2" stroke={color} strokeWidth="1.6" />
      <path d="M6.5 7h7M6.5 10.5h7M6.5 14h4.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconSettings({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="2.5" stroke={color} strokeWidth="1.6" />
      <path d="M10 2v1.5M10 16.5V18M2 10h1.5M16.5 10H18M4.1 4.1l1.06 1.06M14.84 14.84l1.06 1.06M4.1 15.9l1.06-1.06M14.84 5.16l1.06-1.06" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconBell({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M15 8A5 5 0 0 0 5 8c0 5.833-2.5 7.5-2.5 7.5h15S15 13.833 15 8z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M11.44 17.5a1.667 1.667 0 0 1-2.88 0" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="#22C55E" strokeWidth="1.6" />
      <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#22C55E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconX({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="#EF4444" strokeWidth="1.6" />
      <path d="M13 7l-6 6M7 7l6 6" stroke="#EF4444" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

/* Stat card icons — colored, larger */
export function IconStatUsers({ color = "#F97316", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="9.5" cy="7" r="4" stroke={color} strokeWidth="1.8" />
      <path d="M2 21c0-4 3.358-7 7.5-7s7.5 3 7.5 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="19" cy="7.5" r="3" stroke={color} strokeWidth="1.8" />
      <path d="M22 21v-.5a3 3 0 0 0-3-3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconStatChildren({ color = "#0D9488", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.8" />
      <path d="M5 21c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 8c0 .552.448 1.5 3 1.5s3-.948 3-1.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconStatCenters({ color = "#3B82F6", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 22V10l9-7 9 7v12H3z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="9" y="14" width="6" height="8" rx="1.2" stroke={color} strokeWidth="1.8" />
      <path d="M9 10h6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconStatRevenue({ color = "#16A34A", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 3v18h18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 17l4-5.5 3.5 3.5 5-7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19" cy="8" r="1.5" fill={color} />
    </svg>
  );
}

export function IconActivity({ type = "registration", size = 16 }) {
  const colors = {
    registration: "#F97316",
    user: "#3B82F6",
    payment: "#16A34A",
    report: "#8B5CF6",
  };
  const c = colors[type] || "#F97316";

  if (type === "user") {
    return <svg width={size} height={size} viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3.5" stroke={c} strokeWidth="1.6"/><path d="M4 18c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>;
  }
  if (type === "payment") {
    return <svg width={size} height={size} viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="12" rx="2" stroke={c} strokeWidth="1.6"/><path d="M2 9h16" stroke={c} strokeWidth="1.6"/><path d="M6 13h3" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>;
  }
  if (type === "report") {
    return <svg width={size} height={size} viewBox="0 0 20 20" fill="none"><rect x="3" y="2" width="14" height="16" rx="2" stroke={c} strokeWidth="1.6"/><path d="M6.5 7h7M6.5 10.5h7M6.5 14h4" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>;
  }
  return <svg width={size} height={size} viewBox="0 0 20 20" fill="none"><path d="M2 18V8l8-5 8 5v10H2z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/><rect x="7.5" y="11" width="5" height="7" rx="1" stroke={c} strokeWidth="1.6"/></svg>;
}
