import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

export default function DashboardOverview() {
  const navigate = useNavigate();

  const metrics = [
    {
      title: 'Total Articles',
      value: '142',
      change: '+12 this month',
      icon: 'article',
      color: 'error',
      onClick: () => navigate('/admin/blog')
    },
    {
      title: 'Kepangkatan',
      value: '38',
      change: '5 requests pending',
      icon: 'military_tech',
      color: 'primary',
      onClick: () => navigate('/admin/kepangkatan')
    },
    {
      title: 'Aspirasi',
      value: '24',
      change: '3 unread',
      icon: 'campaign',
      color: 'warning',
      onClick: () => navigate('/admin/aspirasi')
    },
    {
      title: 'Members',
      value: '450',
      change: 'Active accounts',
      icon: 'group',
      color: 'success',
      onClick: () => {}
    }
  ];

  const activities = [
    {
      title: 'Article Published',
      time: '2 mins ago',
      desc: 'Media Kominfo published "HIMATIF Tech Monthly - Edition Nov 2024"',
      icon: 'edit_document',
      isPrimary: true
    },
    {
      title: 'New Member',
      time: '1 hour ago',
      desc: 'Alumni Engagement: 5 new mentors joined the "Informatics Career Hub"',
      icon: 'person_add',
      isPrimary: false
    },
    {
      title: 'System Alert',
      time: '3 hours ago',
      desc: 'Website Security: SSL Certificate successfully renewed for primary domain',
      icon: 'warning',
      isPrimary: false
    }
  ];

  const systems = [
    { name: 'Database', status: 'Online', isOnline: true },
    { name: 'API Services', status: 'Online', isOnline: true },
    { name: 'Storage', status: '82% Full', value: 82, isProgress: true }
  ];

  const upcomingAgenda = [
    { title: 'Rapat Pengurus Inti', time: 'Besok, 10:00 WIB', isPrimary: true },
    { title: 'Deadline Pengumpulan Aspirasi', time: 'Nov 24, 2024', isPrimary: false }
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <header className="flex justify-between items-end pb-4 border-b border-outline-variant/30">
        <div>
          <h1 className="text-3xl font-extrabold text-on-surface mb-1">Overview</h1>
          <p className="text-sm text-secondary">Monitor system metrics and recent activities.</p>
        </div>
        <div className="hidden md:flex space-x-3">
          <Button 
            variant="secondary" 
            icon="edit_note" 
            onClick={() => navigate('/admin/blog/edit')}
          >
            Buat Artikel
          </Button>
          <Button 
            icon="military_tech" 
            onClick={() => navigate('/admin/kepangkatan')}
          >
            Review Kepangkatan
          </Button>
        </div>
      </header>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, idx) => (
          <Card 
            key={idx} 
            variant="flat" 
            onClick={m.onClick}
            className="flex justify-between items-start cursor-pointer hover:translate-y-[-2px]"
          >
            <div className="flex-grow">
              <h3 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{m.title}</h3>
              <p className="text-3xl font-extrabold text-on-surface mb-1">{m.value}</p>
              <p className="text-xs text-primary font-semibold flex items-center">
                {m.title === 'Total Articles' && <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>}
                {m.change}
              </p>
            </div>
            <div className={`w-12 h-12 rounded-lg bg-[#cc0000]/10 flex items-center justify-center shrink-0`}>
              <span className={`material-symbols-outlined text-primary-container text-2xl`}>{m.icon}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Recent Activity */}
        <Card variant="flat" hoverEffect={false} className="lg:col-span-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-on-surface">Recent Activity</h3>
            <a className="text-sm font-semibold text-primary hover:underline cursor-pointer">View All</a>
          </div>
          
          <div className="relative pl-6 border-l-2 border-outline-variant/30 space-y-8">
            {activities.map((act, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <span className={`absolute -left-11 top-0 z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${
                  act.isPrimary ? 'bg-primary-container text-white' : 'bg-surface-container-high text-on-surface-variant'
                }`}>
                  <span className="material-symbols-outlined text-[18px]">{act.icon}</span>
                </span>
                
                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20 shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-on-surface text-sm">{act.title}</h4>
                    <span className="text-xs text-secondary">{act.time}</span>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Right Column: Status & Agenda */}
        <div className="lg:col-span-4 space-y-6">
          {/* System Status */}
          <Card variant="flat" hoverEffect={false}>
            <h3 className="text-lg font-bold text-on-surface mb-6">System Status</h3>
            <div className="space-y-4">
              {systems.map((sys, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container mr-2" />
                      <span className="text-sm font-bold text-on-surface">{sys.name}</span>
                    </div>
                    <span className="text-xs text-secondary">{sys.status}</span>
                  </div>
                  {sys.isProgress && (
                    <div className="w-full bg-surface-container-high rounded-full h-2">
                      <div className="bg-primary-container h-2 rounded-full" style={{ width: `${sys.value}%` }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Timeline */}
          <Card variant="flat" hoverEffect={false}>
            <h3 className="text-lg font-bold text-on-surface mb-6">Upcoming Timeline</h3>
            <div className="space-y-4">
              {upcomingAgenda.map((agenda, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 border-l-4 rounded-r-lg bg-surface-container-low/50 ${
                    agenda.isPrimary ? 'border-primary-container' : 'border-outline-variant'
                  }`}
                >
                  <p className={`text-xs font-bold mb-1 ${agenda.isPrimary ? 'text-primary' : 'text-secondary'}`}>
                    {agenda.time}
                  </p>
                  <p className="text-on-surface text-sm font-bold">{agenda.title}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
