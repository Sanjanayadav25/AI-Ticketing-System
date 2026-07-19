import {
  LayoutDashboard,
  Bot,
  Database,
  BarChart3,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "AI Ticket Analyzer",
    icon: Bot,
    path: "/ticket-analyzer",
  },
  {
    title: "Knowledge Base",
    icon: Database,
    path: "/knowledge-base",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="w-20 md:w-72 h-screen bg-slate-900 text-white flex flex-col transition-all duration-300">
      <div className="p-4 md:p-8 border-b border-slate-800">
        {/* Desktop Logo */}
        <div className="hidden md:block">
          <h1 className="text-2xl font-bold">AI Ticketing</h1>

          <p className="text-sm text-slate-400 mt-1">Enterprise Assistant</p>
        </div>

        {/* Mobile Logo */}
        <div className="flex justify-center md:hidden">
          <h1 className="text-2xl font-bold">AI</h1>
        </div>
      </div>

      <nav className="flex-1 p-5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-center md:justify-start gap-4 p-2 rounded-xl mb-2 transition-all duration-300 ${
                  isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-800"
                }`
              }
            >
              <Icon className="w-6 h-6 md:w-5 md:h-5" />

              <span className="hidden md:block">{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
