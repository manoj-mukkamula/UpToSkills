const TIMEZONES = [
  "Asia/Kolkata (IST)", "Asia/Dubai (GST)", "America/New_York (EST)",
  "America/Los_Angeles (PST)", "Europe/London (GMT)", "Europe/Paris (CET)",
];
const LANGUAGES = ["English", "Hindi", "Telugu", "Tamil", "Kannada"];
const CURRENCIES = ["INR (₹)", "USD ($)", "EUR (€)", "GBP (£)"];

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl text-sm font-medium bg-gray-100 dark:bg-[#0d1f1c] border border-transparent text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#00bea3] focus:ring-1 focus:ring-[#00bea3] transition-all";

const selectClass =
  "w-full px-4 py-3 rounded-xl text-sm font-medium bg-gray-100 dark:bg-[#0d1f1c] border border-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border-[#00bea3] focus:ring-1 focus:ring-[#00bea3] transition-all appearance-none cursor-pointer";

export default function GeneralTab({ form, setForm, errors, setErrors }) {
  const handle = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  return (
    <div className="bg-white dark:bg-[#1a2e2a] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-white/10">

      {/* Card Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-11 h-11 rounded-xl bg-[#00bea3]/10 flex items-center justify-center text-xl">
          🌐
        </div>
        <div>
          <h2 className="text-base font-bold text-gray-900 dark:text-white">
            General Configuration
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Configure basic platform information and preferences
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-white/10 mb-7" />

      {/* Form Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">

        <Field label="Platform Name" error={errors.platformName}>
          <input
            className={inputClass}
            type="text"
            value={form.platformName}
            placeholder="Enter platform name"
            onChange={(e) => handle("platformName", e.target.value)}
          />
        </Field>

        <Field label="Timezone">
          <div className="relative">
            <select
              className={selectClass}
              value={form.timezone}
              onChange={(e) => handle("timezone", e.target.value)}
            >
              {TIMEZONES.map((tz) => <option key={tz}>{tz}</option>)}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
          </div>
        </Field>

        <Field label="Support Email" error={errors.supportEmail}>
          <input
            className={inputClass}
            type="email"
            value={form.supportEmail}
            placeholder="support@example.com"
            onChange={(e) => handle("supportEmail", e.target.value)}
          />
        </Field>

        <Field label="Support Phone" error={errors.supportPhone}>
          <input
            className={inputClass}
            type="tel"
            value={form.supportPhone}
            placeholder="+91 XXXXX XXXXX"
            onChange={(e) => handle("supportPhone", e.target.value)}
          />
        </Field>

        <Field label="Default Language">
          <div className="relative">
            <select
              className={selectClass}
              value={form.defaultLanguage}
              onChange={(e) => handle("defaultLanguage", e.target.value)}
            >
              {LANGUAGES.map((l) => <option key={l}>{l}</option>)}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
          </div>
        </Field>

        <Field label="Currency">
          <div className="relative">
            <select
              className={selectClass}
              value={form.currency}
              onChange={(e) => handle("currency", e.target.value)}
            >
              {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
          </div>
        </Field>

      </div>
    </div>
  );
}