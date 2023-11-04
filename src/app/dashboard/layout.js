'use client'
import React from 'react';
import LeftSideBar from '@/components/leftSidebar/leftSidebar';




const DashboardLayout = ({ children }) => {
  return (
    <div>
      
     
        <LeftSideBar />
        {children}
      </div>
  
  );
};

export default DashboardLayout;