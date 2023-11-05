'use client'
import React from 'react';
import LeftSideBar from '@/components/leftSidebar/leftSidebar';
import DashboardHeader from '@/components/dashboardHeader/dashboardHeader';


import { usePathname } from 'next/navigation';

const DashboardLayout = ({ children }) => {
  const currentRoute = usePathname();
  return (
    <div className='dashboard_layout'>
      
      <DashboardHeader  routeName={currentRoute} />
        <LeftSideBar />
        {children}
      </div>
  
  );
};

export default DashboardLayout;