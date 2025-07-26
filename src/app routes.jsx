import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/ARRequestor/Dashboard";
import JDStatusPage from "../pages/ARRequestor/JDStatusPage";
import AdminConsole from "../pages/Recruiter/AdminConsole";
import JDSearch from "../pages/Recruiter/JDSearch";
import ReportGenerator from "../pages/Recruiter/ReportGenerator";
import NotFound from "../pages/NotFound";

// TODO: Add role-based routing logic here, possibly using context

const AppRoutes = () => (
  <Routes>
    {/* AR Requestor routes */}
    <Route path="/" element={<Dashboard />} />
    <Route path="/jd-status/:jdId" element={<JDStatusPage />} />
    {/* Recruiter routes */}
    <Route path="/recruiter/admin" element={<AdminConsole />} />
    <Route path="/recruiter/jd-search" element={<JDSearch />} />
    <Route path="/recruiter/report-generator" element={<ReportGenerator />} />
    {/* Not found */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
