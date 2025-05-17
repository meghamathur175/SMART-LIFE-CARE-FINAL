import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/AdminDashboardSidebar.css";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <button
        className="admin-toggle-button"
        aria-label="Toggle Sidebar"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <div className="adminLayout">
        <aside className={`admin_sidebar ${sidebarOpen ? "active" : ""}`}>
          <h2>Admin Dashboard</h2>
          <nav className="admin-nav">
            <Link className="nav-link" to="/" onClick={closeSidebar}>
              Home
            </Link>
            <Link
              className="nav-link"
              to="partner-onbording"
              onClick={closeSidebar}
            >
              Partner Onboarding
            </Link>
            <Link
              className="nav-link"
              to="commission-management"
              onClick={closeSidebar}
            >
              Commission Management
            </Link>
            <Link
              className="nav-link"
              to="admin-reports"
              onClick={closeSidebar}
            >
              Reports
            </Link>
          </nav>
        </aside>

        <main className="admin-content">
          <div className="welcome-container">
            <h1>Welcome to Admin Dashboard</h1>
          </div>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
