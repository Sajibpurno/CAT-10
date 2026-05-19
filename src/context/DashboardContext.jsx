"use client";

import { createContext, useCallback, useContext, useState } from "react";

const DashboardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("listings");

  const openDashboard = useCallback((tab = "listings") => {
    setActiveTab(tab);
    setSidebarOpen(true);
  }, []);

  const closeDashboard = useCallback(() => setSidebarOpen(false), []);

  return (
    <DashboardContext.Provider
      value={{
        sidebarOpen,
        activeTab,
        setActiveTab,
        openDashboard,
        closeDashboard,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }
  return context;
};
