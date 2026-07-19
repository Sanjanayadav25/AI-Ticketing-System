function ToggleSetting({ title, description, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between py-5 border-b border-slate-300 last:border-none">
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>

        <p className="text-slate-500 text-sm mt-1">
          {description}
        </p>
      </div>

      <button
        onClick={onToggle}
        className={`w-14 h-8 rounded-full transition duration-300 flex items-center px-1 ${
          enabled ? "bg-indigo-600" : "bg-slate-300"
        }`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
            enabled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

export default ToggleSetting;