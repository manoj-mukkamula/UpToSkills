export default function Toast({ toast, onClose }) {
  if (!toast.show) return null;

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        px-5 py-3 rounded-xl shadow-xl
        text-sm font-medium text-white
        transition-all duration-300
        ${toast.type === "success" ? "bg-[#00bea3]" : "bg-red-500"}
      `}
      role="alert"
    >
      <span>{toast.type === "success" ? "✅" : "❌"}</span>
      <span>{toast.msg}</span>
      <button
        onClick={onClose}
        className="ml-2 text-white/80 hover:text-white text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}