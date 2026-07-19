function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between py-3 border-b border-slate-300 last:border-none">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-semibold  ">
        {value}
      </span>
    </div>
  );
}

export default InfoRow;