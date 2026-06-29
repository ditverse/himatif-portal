import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminSidebar({ isOpen, setIsOpen }) {
  const adminLinks = [
    { to: '/admin', label: 'Overview', icon: 'dashboard' },
    { to: '/admin/blog', label: 'Blog', icon: 'article' },
    { to: '/admin/kabinet', label: 'Kabinet', icon: 'groups' },
    { to: '/admin/departemen', label: 'Departemen', icon: 'domain' },
    { to: '/admin/timeline', label: 'Timeline', icon: 'schedule' },
    { to: '/admin/aspirasi', label: 'Aspirasi', icon: 'chat_bubble' },
    { to: '/admin/kepangkatan', label: 'Kepangkatan', icon: 'military_tech' },
    { to: '/admin/settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside 
        className={`fixed inset-y-0 left-0 z-50 flex flex-col h-screen w-64 border-r border-outline-variant bg-surface py-6 shrink-0 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-6 mb-8 flex items-center space-x-3">
          <img 
            className="w-12 h-12 rounded-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8RYK_7Qli3QlZusAtaGNjSptRTROtgtoyy8dI_Otee6dQWxe8i_j7YMwpwZVFaKRjWS4TeGD9ioSPSVo7g0kUaXi0oG3IrdPB5Kl7t0I1_LMkbXDH_5HjHMQa19tfJYsoJArNnGFStbYiAz6DOHk--Rrs9YOlsm53dtKqfyGQt2HVJu69nfLFY8wPgBUHGxm9NnZlCpo7TG4I6JHylZ2CyFROK_luC5Ahg4dLObRHPR6pxF1w-4TIeUfPBZP60xXanlrDSHZvRD8_ig" 
            alt="Himatif Logo"
          />
          <div>
            <h2 className="text-xl text-on-surface font-bold font-display-xl leading-none">Himatif</h2>
            <p className="font-semibold text-xs text-secondary mt-1">Admin Panel</p>
          </div>
        </div>
        
        <nav className="flex-1 space-y-1 px-3">
          {adminLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/admin'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-lg transition-all duration-200 ease-in-out font-medium text-sm ${
                  isActive
                    ? 'text-primary font-bold bg-surface-container-low border-r-4 border-primary'
                    : 'text-secondary hover:bg-surface-container-lowest hover:text-on-surface'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`material-symbols-outlined mr-3 ${isActive ? 'icon-fill' : ''}`}>
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
