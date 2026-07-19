import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import TicketAnalyzer from "../pages/TicketAnalyzer";
import KnowledgeBase from "../pages/KnowledgeBase";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />} >
            <Route
                path="/"
                element={<Dashboard />}
            />

            <Route
                path="/ticket-analyzer"
                element={<TicketAnalyzer />}
            />

            <Route
                path="/knowledge-base"
                element={<KnowledgeBase />}
            />

            <Route
                path="/analytics"
                element={<Analytics />}
            />

            <Route
                path="/settings"
                element={<Settings />}
            />
            </Route>
        </Routes>
    );
}

export default AppRoutes;