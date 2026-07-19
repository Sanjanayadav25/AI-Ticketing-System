import { Bell, Search, UserCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const pageInfo = {
    "/": {
      title: "Dashboard",
      subtitle: "Welcome back 👋",
    },

    "/ticket-analyzer": {
      title: "AI Ticket Analyzer",
      subtitle: "Analyze employee support tickets",
    },

    "/knowledge-base": {
      title: "Knowledge Base",
      subtitle: "Manage your company documents",
    },

    "/analytics": {
      title: "Analytics",
      subtitle: "View system insights",
    },

    "/settings": {
      title: "Settings",
      subtitle: "Configure your application",
    },
  };

  const currentPage = pageInfo[location.pathname] || {
    title: "AI Ticketing",
    subtitle: "Enterprise Assistant",
  };
  return (
    <header className="bg-white shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 md:px-10 md:h-20">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
          {currentPage.title}
        </h2>

        <p className="text-slate-500 text-sm">{currentPage.subtitle}</p>
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />

          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-64 pl-10 pr-4 py-2 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button className="p-2 rounded-full hover:bg-slate-100 transition">
          <Bell />
        </button>

        <UserCircle2 size={40} className="text-indigo-600" />
      </div>
    </header>
  );
}

export default Navbar;
