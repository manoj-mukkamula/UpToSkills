import { useState, useEffect } from "react";
import { SlidersHorizontal, Bell, Shield, CreditCard, LayoutDashboard } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import GeneralTab from "./components/GeneralTab";
import Toast from "./components/Toast";

const DEFAULTS = {
  platformName: "Daycare Marketplace",
  timezone: "Asia/Kolkata (IST)",
  supportEmail: "support@daycmarketplace.com",
  supportPhone: "+91 80 1234 5678",
  defaultLanguage: "English",
  currency: "INR (₹)",
};

const TABS = [
  { key: "general",       label: "General",       icon: SlidersHorizontal },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "security",      label: "Security",      icon: Shield },
  { key: "payment",       label: "Payment",       icon: CreditCard },
  { key: "platform",      label: "Platform",      icon: LayoutDashboard },
];

const PLACEHOLDER_ICONS = {
  notifications: Bell,
  security:      Shield,
  payment:       CreditCard,
  platform:      LayoutDashboard,
};

export default function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [sidebarOpen, setSidebarOpen]   = useState(false);
  const [activeNav, setActiveNav]       = useState("settings");
  const [activeTab, setActiveTab]       = useState("general");
  const [form, setForm]                 = useState({ ...DEFAULTS });
  const [saved, setSaved]               = useState({ ...DEFAULTS });
  const [errors, setErrors]             = useState({});
  const [isDirty, setIsDirty]           = useState(false);
  const [toast, setToast]               = useState({ show: false, msg: "", type: "success" });
  const [langOpen, setLangOpen]         = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    setIsDirty(Object.keys(DEFAULTS).some((k) => form[k] !== saved[k]));
  }, [form, saved]);

  const showToast = (msg, type = "success") => {
    setToast({ show: true, msg, type });
    setTimeout(() => setToast({ show: false, msg: "", type: "success" }), 3000);
  };

  const validate = () => {
    const e = {};
    if (!form.platformName.trim())
      e.platformName = "Platform name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.supportEmail))
      e.supportEmail = "Enter a valid email address.";
    if (!/^\+?[\d\s\-]{7,15}$/.test(form.supportPhone))
      e.supportPhone = "Enter a valid phone number.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) { showToast("Please fix the errors before saving.", "error"); return; }
    setSaved({ ...form });
    setIsDirty(false);
    showToast("Settings saved successfully!");
  };

  const handleReset = () => {
    setForm({ ...DEFAULTS });
    setSaved({ ...DEFAULTS });
    setErrors({});
    setIsDirty(false);
    showToast("Settings reset to default.");
  };

  const handleLangSelect = (lang) => {
    setForm((f) => ({ ...f, defaultLanguage: lang }));
    setLangOpen(false);
    showToast(`Language changed to ${lang}.`);
  };

  return (
    <div
      className="flex h-screen overflow-hidden bg-gray-100 dark:bg-[#0d1f1c]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          langOpen={langOpen}
          setLangOpen={setLangOpen}
          onLangSelect={handleLangSelect}
          selectedLang={form.defaultLanguage}
          onSave={handleSave}
          onReset={handleReset}
          isDirty={isDirty}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-[#0d1f1c]">

          {/* Tab Bar */}
          <div className="flex gap-1 bg-gray-200 dark:bg-[#1a2e2a] p-1.5 rounded-full w-fit mb-6 overflow-x-auto max-w-full">
            {TABS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all
                  ${activeTab === key
                    ? "bg-white dark:bg-[#0d1f1c] text-gray-900 dark:text-white shadow-md"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "general" ? (
            <GeneralTab
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
            />
          ) : (
            <PlaceholderTab tab={activeTab} darkMode={darkMode} />
          )}
        </main>
      </div>

      <Toast
        toast={toast}
        onClose={() => setToast({ show: false, msg: "", type: "success" })}
      />
    </div>
  );
}

function PlaceholderTab({ tab, darkMode }) {
  const Icon = PLACEHOLDER_ICONS[tab] || Shield;
  const label = tab.charAt(0).toUpperCase() + tab.slice(1);
  return (
    <div className={`rounded-2xl p-16 flex flex-col items-center justify-center gap-4 shadow-sm border
      ${darkMode
        ? "bg-[#1a2e2a] border-white/10 text-gray-400"
        : "bg-white border-gray-100 text-gray-400"}`}
    >
      <Icon size={40} strokeWidth={1.5} />
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{label} Settings</p>
      <p className="text-sm text-gray-400">Not part of the current task.</p>
    </div>
  );
}