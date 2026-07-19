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
    <aside className="w-72 bg-slate-900 text-white flex flex-col">
      <div className="p-8 border-b border-slate-800">
        <h1 className="text-2xl font-bold">AI Ticketing</h1>

        <p className="text-sm text-slate-400 mt-1">Enterprise Assistant</p>
      </div>

      <nav className="flex-1 p-5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 p-4 rounded-xl mb-2 transition-all duration-300 ${
                  isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
