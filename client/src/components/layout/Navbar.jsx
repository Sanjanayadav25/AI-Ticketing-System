import { Bell, Search, UserCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation()

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

const currentPage =
  pageInfo[location.pathname] || {
    title: "AI Ticketing",
    subtitle: "Enterprise Assistant",
  };
  return (
     
    <header className="h-20 bg-white shadow-sm flex items-center justify-between px-10">

      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          {currentPage.title}
        </h2>

        <p className="text-slate-500 text-sm">
          {currentPage.subtitle}
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

        <button className="p-2 rounded-full hover:bg-slate-100 transition">
          <Bell />
        </button>

        <UserCircle2
          size={40}
          className="text-indigo-600"
        />

      </div>

    </header>
  );
}

export default Navbar;