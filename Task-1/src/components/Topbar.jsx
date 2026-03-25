import { Languages, Moon, Sun, RotateCcw, Save, Menu } from "lucide-react";
import { useRef, useEffect } from "react";

const LANGUAGES = ["English", "Hindi", "Telugu", "Tamil", "Kannada"];
const FLAGS = { English: "🇬🇧", Hindi: "🇮🇳", Telugu: "🇮🇳", Tamil: "🇮🇳", Kannada: "🇮🇳" };

export default function Topbar({
  darkMode, setDarkMode,
  langOpen, setLangOpen,
  onLangSelect, selectedLang,
  onSave, onReset, isDirty,
  setSidebarOpen,
}) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className={`shrink-0 px-6 border-b ${darkMode ? "bg-[#112420] border-white/10" : "bg-white border-gray-200"}`}>

      {/* Row 1 */}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <button
            className={`md:hidden ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <div>
            <h1 className={`text-xl font-bold leading-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
              Platform Settings
            </h1>
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Configure and manage platform preferences
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen((o) => !o)}
              className={`p-2.5 rounded-full transition-all ${
                langOpen
                  ? "bg-[#00bea3] text-white"
                  : darkMode
                    ? "text-gray-400 hover:bg-white/10"
                    : "text-gray-500 hover:bg-gray-100"
              }`}
              title="Change Language"
            >
              <Languages size={22} />
            </button>

            {langOpen && (
              <div className={`absolute right-0 top-12 w-52 rounded-xl shadow-xl border z-50 overflow-hidden
                ${darkMode ? "bg-[#1a2e2a] border-white/10" : "bg-white border-gray-100"}`}>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-4 pt-3 pb-1">
                  Select Language
                </p>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => onLangSelect(lang)}
                    className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm transition-all
                      ${selectedLang === lang
                        ? "text-[#00bea3] font-semibold bg-[#00bea3]/10"
                        : darkMode
                          ? "text-gray-300 hover:bg-white/5"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    <span>{FLAGS[lang]}</span> {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setDarkMode((d) => !d)}
            className={`p-2.5 rounded-full transition-all
              ${darkMode
                ? "text-gray-400 hover:bg-white/10"
                : "text-gray-500 hover:bg-gray-100"}`}
            title="Toggle dark mode"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className={`border-t ${darkMode ? "border-white/10" : "border-gray-200"}`} />

      {/* Row 2 */}
      <div className="flex justify-end gap-3 py-3">
        <button
          onClick={onReset}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border transition-all
            ${darkMode
              ? "border-white/20 text-gray-300 hover:bg-white/10"
              : "border-gray-300 text-gray-600 hover:bg-gray-50"}`}
        >
          <RotateCcw size={16} />
          Reset to Default
        </button>

        <button
          onClick={onSave}
          disabled={!isDirty}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            isDirty
              ? "bg-[#00bea3] text-white hover:bg-[#009e87] shadow-md"
              : "bg-[#00bea3]/30 text-white/50 cursor-not-allowed"
          }`}
        >
          <Save size={16} />
          Save Changes
        </button>
      </div>
    </header>
  );
}