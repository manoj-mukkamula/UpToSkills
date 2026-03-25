import {
  LayoutDashboard, Building2, Users, FileText,
  MessageSquare, UserCircle, Activity, Settings, ArrowLeft,
} from "lucide-react";

const navItems = [
  { key: "dashboard",  label: "Dashboard",      icon: LayoutDashboard },
  { key: "daycares",   label: "Manage Daycares", icon: Building2 },
  { key: "parents",    label: "Manage Parents",  icon: Users },
  { key: "reports",    label: "Reports",         icon: FileText },
  { key: "complaints", label: "Complaints",      icon: MessageSquare },
  { key: "profile",    label: "Admin Profile",   icon: UserCircle },
  { key: "logs",       label: "System Logs",     icon: Activity },
  { key: "settings",   label: "Settings",        icon: Settings },
];

export default function Sidebar({ activeNav, setActiveNav, sidebarOpen, setSidebarOpen, darkMode }) {
  return (
    <aside
      className={`
        fixed md:static z-30 h-full w-60 flex flex-col shrink-0
        transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        ${darkMode
          ? "bg-[#0d1f1c] border-r border-white/10"
          : "bg-white border-r border-gray-200"}
      `}
    >
      {/* Brand */}
      <div className={`px-6 py-6 border-b ${darkMode ? "border-white/10" : "border-gray-200"}`}>
        <p className="text-[#00bea3] font-bold text-base leading-tight">Admin Portal</p>
        <p className={`text-xs mt-0.5 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          Daycare Marketplace
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5 overflow-y-auto">
        {navItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => { setActiveNav(key); setSidebarOpen(false); }}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium w-full text-left transition-all
              ${activeNav === key
                ? darkMode
                  ? "bg-[#00bea3]/20 text-[#00bea3] border border-[#00bea3]/30"
                  : "bg-[#00bea3]/10 text-[#00bea3] border border-[#00bea3]/20"
                : darkMode
                  ? "text-gray-400 hover:bg-white/5 hover:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }
            `}
          >
            <Icon size={20} />
            {label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className={`px-3 py-4 border-t ${darkMode ? "border-white/10" : "border-gray-200"}`}>
        <button
          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium w-full transition-all
            ${darkMode
              ? "text-gray-400 hover:bg-white/5 hover:text-white"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>
      </div>
    </aside>
  );
}