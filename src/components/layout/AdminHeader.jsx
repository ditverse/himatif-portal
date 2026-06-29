import React from 'react';

export default function AdminHeader({ onMenuClick }) {
  return (
    <div className="sticky top-0 z-10 bg-surface border-b border-outline-variant px-6 flex items-center justify-between mb-8 py-3">
      <div className="flex items-center flex-1 max-w-md mr-6">
        {/* Mobile Toggle Button */}
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 text-secondary hover:text-on-surface mr-3 focus:outline-none"
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>

        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
            search
          </span>
          <input 
            type="text" 
            placeholder="Search across admin..." 
            className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center ml-4 shrink-0">
        <div className="flex items-center space-x-4">
          <button className="relative p-1 text-secondary hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined text-2xl">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-surface"></span>
          </button>
          <button className="p-1 text-secondary hover:text-on-surface transition-colors hidden sm:block">
            <span className="material-symbols-outlined text-2xl">help</span>
          </button>
        </div>

        <div className="h-8 w-px bg-outline-variant mx-4 hidden sm:block"></div>

        <div className="flex items-center space-x-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-on-surface leading-none">Kominfo</p>
            <p className="text-xs text-secondary mt-1">Admin</p>
          </div>
          <img 
            className="w-10 h-10 rounded-full object-cover border border-outline-variant" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8RYK_7Qli3QlZusAtaGNjSptRTROtgtoyy8dI_Otee6dQWxe8i_j7YMwpwZVFaKRjWS4TeGD9ioSPSVo7g0kUaXi0oG3IrdPB5Kl7t0I1_LMkbXDH_5HjHMQa19tfJYsoJArNnGFStbYiAz6DOHk--Rrs9YOlsm53dtKqfyGQt2HVJu69nfLFY8wPgBUHGxm9NnZlCpo7TG4I6JHylZ2CyFROK_luC5Ahg4dLObRHPR6pxF1w-4TIeUfPBZP60xXanlrDSHZvRD8_ig" 
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
}
