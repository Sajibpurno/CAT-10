"use client";

import { useEffect } from "react";
import { useDashboard } from "../../context/DashboardContext";

const MyRequestsPage = () => {
  const { openDashboard } = useDashboard();

  useEffect(() => {
    openDashboard("requests");
  }, [openDashboard]);

  return null;
};

export default MyRequestsPage;
