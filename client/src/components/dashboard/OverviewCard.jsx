import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";
import { motion } from "framer-motion";

function OverviewChart({ stats }) {
  const data = [
    {
      name: "Files",
      value: stats.knowledge_files,
    },
    {
      name: "Chunks",
      value: stats.knowledge_chunks,
    },
    {
      name: "Tickets",
      value: stats.tickets,
    },
  ];

  const colors = ["#6366F1", "#10B981", "#F59E0B"];

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
        duration: 0.6,
      }}
      className="bg-white rounded-3xl shadow-lg p-6"
    >
      <h2 className="text-xl font-bold mb-6">System Overview</h2>

      <ResponsiveContainer width="100%" height={360}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default OverviewChart;
