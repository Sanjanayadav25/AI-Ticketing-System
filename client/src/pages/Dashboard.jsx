import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import DashboardCard from "../components/dashboard/DashboardCard";
import SystemStatus from "../components/dashboard/SystemStatus";
import RecentActivity from "../components/dashboard/RecentActivity";

function Dashboard() {
  return (
    <>
      <WelcomeBanner />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        <DashboardCard
          title="Knowledge Files"
          value="4"
          color="bg-indigo-600"
        />

        <DashboardCard
          title="Knowledge Chunks"
          value="33"
          color="bg-violet-600"
        />

        <DashboardCard
          title="Resolved Tickets"
          value="5"
          color="bg-emerald-600"
        />

        <DashboardCard
          title="AI Status"
          value="Online"
          color="bg-orange-500"
        />
      </div>


      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-4">
        <RecentActivity />

        <SystemStatus />
      </div>
    </>
  );
}

export default Dashboard;