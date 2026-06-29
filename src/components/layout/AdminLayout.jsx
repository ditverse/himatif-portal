import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-background text-on-background font-body-md antialiased">
      {/* Sidebar Navigation */}
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Panel Content */}
      <div className="flex-1 flex flex-col md:ml-64 min-h-screen">
        {/* Top Header */}
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

        {/* Dynamic Nested Route Page */}
        <main className="flex-grow p-6 md:px-16 md:pb-16 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
