'use client'
import React from 'react';
import DashboardHeader from '@/components/dashboardHeader/dashboardHeader';


import { usePathname } from 'next/navigation';
import Sidebar2 from '@/components/leftSideBar2/leftSideBar2';

const DashboardLayout = ({ children }) => {
  const currentRoute = usePathname();
  return (
    <div className='dashboard_layout'>
      
      <DashboardHeader  routeName={currentRoute} />

        <Sidebar2 />
        {children}
      </div>
  
  );
};

export default DashboardLayout;