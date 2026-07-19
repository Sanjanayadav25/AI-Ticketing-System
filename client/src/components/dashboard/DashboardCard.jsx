import AnimatedCounter from "../common/AnimatedCounter";

function DashboardCard({
  title,
  value,
  color,
}) {
  return (
    <div className={`rounded-3xl p-7 text-white shadow-lg hover:scale-105 transition-all duration-300
      cursor-pointer ${color}`}>

      <h3 className="text-lg opacity-90">
        {title}
      </h3>

      <h1 className="text-4xl font-bold mt-4">
        {typeof value === "number" ? (
          <AnimatedCounter
            value={value}
          />
        ) : (
          value
        )}

      </h1>

    </div>
  );
}

     


export default DashboardCard;