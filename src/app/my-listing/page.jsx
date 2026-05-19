"use client";

import { useEffect } from "react";
import { useDashboard } from "../../context/DashboardContext";

const MyListingPage = () => {
  const { openDashboard } = useDashboard();

  useEffect(() => {
    openDashboard("listings");
  }, [openDashboard]);

  return null;
};

export default MyListingPage;
