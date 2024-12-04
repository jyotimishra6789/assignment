import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';
const App = () => {
  return (
    <Router>
      {/* Ensures consistent baseline styles */}
      <CssBaseline />
      {/* Flex layout for sidebar and main content */}
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar navigation */}
        <Sidebar />
        {/* Main content area */}
        <main style={{ flexGrow: 1, padding: "20px", backgroundColor: "#f9fafc" }}>
          <Routes>
            {/* Route for Dashboard */}
            <Route path="/" element={<Dashboard />} />
            {/* Route for User Management */}
            <Route path="/users" element={<UserManagement />} />
            {/* Route for Role Management */}
            <Route path="/roles" element={<RoleManagement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
