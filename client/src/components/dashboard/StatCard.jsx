import { motion } from "framer-motion";

function StatCard({ title, value, icon, color }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="bg-white rounded-3xl shadow-lg p-6"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-500 font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>
        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

export default StatCard;