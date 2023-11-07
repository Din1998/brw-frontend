'use client'
import { useState } from 'react';
import DashboardHeader from '@/components/dashboardHeader/dashboardHeader';


import { usePathname } from 'next/navigation';
import Sidebar2 from '@/components/leftSideBar2/leftSideBar2';

const DashboardLayout = ({ children }) => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const currentRoute = usePathname();
  return (
    <div className='dashboard_layout'>
      
        <DashboardHeader  routeName={currentRoute} toggleSidebar={toggleSidebar} />

        <Sidebar2 activeClass={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
  
  );
};

export default DashboardLayout;