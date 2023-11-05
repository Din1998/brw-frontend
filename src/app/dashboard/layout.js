'use client'
import React from 'react';
import LeftSideBar from '@/components/leftSidebar/leftSidebar';
import DashboardHeader from '@/components/dashboardHeader/dashboardHeader';




const DashboardLayout = ({ children }) => {
  return (
    <div className='dashboard_layout'>
      
      <DashboardHeader />
        <LeftSideBar />
        {children}
      </div>
  
  );
};

export default DashboardLayout;