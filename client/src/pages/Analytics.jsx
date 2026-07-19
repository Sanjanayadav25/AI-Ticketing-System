import { useEffect, useState } from "react";
import api from "../api/api";
import toast from "react-hot-toast";
import StatCard from "../components/dashboard/StatCard";
import { FileText, Database, Ticket } from "lucide-react";
import OverviewChart from "../components/dashboard/OverviewCard";

function Analytics() {
  const [stats, setStats] = useState({
    knowledge_files: 0,
    knowledge_chunks: 0,
    tickets: 0,
  });

  const loadStats = async () => {
    try {
      const response = await api.get("/stats");

      setStats(response.data);
    } catch (error) {
      console.error(error);

      toast.error("Failed to load analytics.");
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <p className="text-slate-700 text-xl mt-1">Overview of AI Ticketing System</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <StatCard
          title="Knowledge Files"
          value={stats.knowledge_files}
          icon={<FileText />}
          color="bg-blue-100"
        />

        <StatCard
          title="Knowledge Chunks"
          value={stats.knowledge_chunks}
          icon={<Database />}
          color="bg-green-100"
        />

        <StatCard
          title="Tickets"
          value={stats.tickets}
          icon={<Ticket />}
          color="bg-purple-100"
        />
      </div>

      <div className="mt-10 w-full">
        <OverviewChart stats={stats} />
      </div>
    </div>
  );
}

export default Analytics;
