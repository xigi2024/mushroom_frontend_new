"use client";
import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
  userRole?: string;
}

const Layout = ({ children, activeSection, setActiveSection, userRole }: LayoutProps) => {
  return (
    <div className="dashboard-container">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} userRole={userRole} />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
