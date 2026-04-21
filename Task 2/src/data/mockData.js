export const statCards = [
  {
    id: "users",
    label: "Total Users",
    value: "1,248",
    change: "+12%",
    positive: true,
    iconBg: "#FFF3E8",
    iconColor: "#F97316",
    icon: "users",
  },
  {
    id: "children",
    label: "Active Children",
    value: "856",
    change: "+8%",
    positive: true,
    iconBg: "#E6FDF7",
    iconColor: "#0D9488",
    icon: "children",
  },
  {
    id: "centers",
    label: "Daycare Centers",
    value: "24",
    change: "+2",
    positive: true,
    iconBg: "#EBF3FF",
    iconColor: "#3B82F6",
    icon: "centers",
  },
  {
    id: "revenue",
    label: "Total Revenue",
    value: "₹12.5L",
    change: "+18%",
    positive: true,
    iconBg: "#EAFAF1",
    iconColor: "#16A34A",
    icon: "revenue",
  },
];

export const userGrowthData = [
  { month: "Jan", registered: 1020, active: 720 },
  { month: "Feb", registered: 1050, active: 740 },
  { month: "Mar", registered: 1090, active: 762 },
  { month: "Apr", registered: 1310, active: 800 },
];

export const revenueData = [
  { month: "Jan", revenue: 98 },
  { month: "Feb", revenue: 106 },
  { month: "Mar", revenue: 120 },
  { month: "Apr", revenue: 132 },
];

export const pendingApprovals = [
  { id: 1, name: "Rainbow Daycare", city: "Mumbai", submitted: "2 hours ago" },
  { id: 2, name: "Sunshine Kids", city: "Pune", submitted: "5 hours ago" },
  { id: 3, name: "Little Learners", city: "New Delhi", submitted: "Yesterday" },
];

export const recentActivities = [
  {
    id: 1,
    title: "New Center Registration",
    desc: "Sunshine Daycare Center - Pending Approval",
    time: "2 hours ago",
    type: "registration",
  },
  {
    id: 2,
    title: "User Role Updated",
    desc: "Priya Sharma promoted to Daycare Manager",
    time: "4 hours ago",
    type: "user",
  },
  {
    id: 3,
    title: "Payment Received",
    desc: "Rainbow Daycare – ₹18,500 subscription fee",
    time: "6 hours ago",
    type: "payment",
  },
  {
    id: 4,
    title: "Report Generated",
    desc: "Monthly summary for March has been exported",
    time: "Yesterday",
    type: "report",
  },
];
