import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

export default function Timeline() {
  const [selectedFilters, setSelectedFilters] = useState({
    all: true,
    akademik: false,
    nonAkademik: false,
    kepanitiaan: false,
  });

  const calendarDays = [
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true },
    { day: 5, isCurrentMonth: true, hasEvent: 'primary' },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true, isActive: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true, hasEvent: 'secondary' },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true },
  ];

  const events = [
    {
      id: 1,
      category: 'Akademik',
      badge: 'primary',
      date: '09',
      month: 'Nov 2024',
      title: 'Seminar Teknologi Masa Depan',
      desc: 'Diskusi interaktif mengenai perkembangan AI dan dampaknya terhadap industri kreatif dan rekayasa perangkat lunak.',
      time: '09:00 - 15:00 WIB',
      location: 'Aula Utama Kampus',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLRHI7SDqxzy0T-pw4nRV0UJnRSAMCml7k2e4W7k0xlGm9LkpCl3MI-6tv7h6W-R-8AyNr3SxDtiX79zpHdWuRvty_EaLT1z0zM_VpcYz3ZVPfwudLvFiS_c26-GYN0dwIVLhpQIvUMNMronJYPbJKRzwCMZT2e89EAaW7aX8U0u8hGbCG97fRvVMJaovSRpV6fbYpX0lI20sqU24tMspTZA1qK-Lte1t9C-5fnMC00_DxuwljF54RkhlfkGENqVrGdlSM_xQEg-c'
    },
    {
      id: 2,
      category: 'Kepanitiaan',
      badge: 'neutral',
      date: '13',
      month: 'Nov 2024',
      title: 'Rapat Koordinasi Akhir Tahun',
      desc: 'Pertemuan seluruh pengurus untuk evaluasi program kerja semester ini dan perencanaan kegiatan mendatang.',
      time: '19:00 - Selesai',
      location: 'Google Meet',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG8NZVytGtmM3O18fz1mbNI4Gw1K-gslUbW0Ld-jZprOpToQakm1eRSy1BVXrcAgQZPaWnNxFgCtq6fgflendgvONnz8DmhEPE4yvUUbPiotosUQEmSMBGxLn_Ykc6WISBRbzehi6VRGUH7v5u-yQqB-A3A-if4_teoOnguMoCck5tSogxwimGyJaeSvv2KAeAk9wMTsofupKD8Vv1da9gBuoggX_iNRC1LfZGRUS5o8OWfLF2tu0J_BuuXM3xc3ik4wo7vErfGEg'
    }
  ];

  const handleFilterChange = (filter) => {
    if (filter === 'all') {
      setSelectedFilters({
        all: true,
        akademik: false,
        nonAkademik: false,
        kepanitiaan: false,
      });
    } else {
      setSelectedFilters((prev) => {
        const next = { ...prev, all: false, [filter]: !prev[filter] };
        // If all subfilters are false, check "all" again
        const anySelected = next.akademik || next.nonAkademik || next.kepanitiaan;
        if (!anySelected) next.all = true;
        return next;
      });
    }
  };

  const filteredEvents = selectedFilters.all
    ? events
    : events.filter((e) => {
        if (e.category === 'Akademik' && selectedFilters.akademik) return true;
        if (e.category === 'Non-Akademik' && selectedFilters.nonAkademik) return true;
        if (e.category === 'Kepanitiaan' && selectedFilters.kepanitiaan) return true;
        return false;
      });

  return (
    <div className="bg-[#F9FAFB] text-[#0A0A0A] min-h-screen pt-12 pb-24">
      <div className="px-6 md:px-16 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <header className="mb-12 text-center md:text-left mt-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-custom-dark mb-4 font-display-xl">
            Timeline
          </h1>
          <p className="text-lg text-secondary max-w-2xl leading-relaxed">
            Jadwal kegiatan dan program kerja Himpunan Mahasiswa Teknik Informatika.
          </p>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Calendar & Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Calendar */}
            <Card variant="flat" hoverEffect={false}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-on-surface">November 2024</h2>
                <div className="flex space-x-1">
                  <button className="p-1.5 hover:bg-surface-container-low rounded-full transition-colors">
                    <span className="material-symbols-outlined text-secondary text-[20px]">chevron_left</span>
                  </button>
                  <button className="p-1.5 hover:bg-surface-container-low rounded-full transition-colors">
                    <span className="material-symbols-outlined text-secondary text-[20px]">chevron_right</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
                  <div key={day} className="text-xs font-bold text-secondary">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {calendarDays.map((c, idx) => (
                  <div
                    key={idx}
                    className={`py-2 text-sm font-semibold rounded-full relative flex items-center justify-center ${
                      c.isActive
                        ? 'bg-primary-container text-white font-bold'
                        : c.isCurrentMonth
                        ? 'text-on-surface hover:bg-surface-container-low cursor-pointer transition-colors'
                        : 'text-tertiary-fixed-dim opacity-40'
                    }`}
                  >
                    {c.day}
                    {c.hasEvent && !c.isActive && (
                      <div className={`absolute bottom-1 w-1.5 h-1.5 rounded-full ${
                        c.hasEvent === 'primary' ? 'bg-primary-container' : 'bg-tertiary'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Filters */}
            <Card variant="flat" hoverEffect={false}>
              <h3 className="text-sm font-bold text-on-surface mb-4 flex items-center">
                <span className="material-symbols-outlined mr-2 text-secondary text-[20px]">filter_list</span>
                Filter Kategori
              </h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedFilters.all}
                    onChange={() => handleFilterChange('all')}
                    className="form-checkbox h-4 w-4 text-primary border-outline-variant rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm text-secondary group-hover:text-on-surface transition-colors">Semua Kegiatan</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedFilters.akademik}
                    onChange={() => handleFilterChange('akademik')}
                    className="form-checkbox h-4 w-4 text-primary border-outline-variant rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm text-secondary group-hover:text-on-surface transition-colors">Akademik</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedFilters.nonAkademik}
                    onChange={() => handleFilterChange('nonAkademik')}
                    className="form-checkbox h-4 w-4 text-primary border-outline-variant rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm text-secondary group-hover:text-on-surface transition-colors">Non-Akademik</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedFilters.kepanitiaan}
                    onChange={() => handleFilterChange('kepanitiaan')}
                    className="form-checkbox h-4 w-4 text-primary border-outline-variant rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm text-secondary group-hover:text-on-surface transition-colors">Kepanitiaan</span>
                </label>
              </div>
            </Card>
          </div>

          {/* Right Column: Agenda List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-on-surface mb-4">Agenda Mendatang</h2>
            
            {filteredEvents.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-dashed border-outline-variant flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-surface-variant mb-2">event_busy</span>
                <p className="text-sm text-secondary">Belum ada agenda untuk filter yang dipilih.</p>
              </div>
            ) : (
              filteredEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="bg-white rounded-xl p-6 border border-surface-variant/30 hover:shadow-[0_8px_24px_rgba(17,24,39,0.08)] transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group"
                >
                  <div className="flex-shrink-0 w-full md:w-32 h-32 rounded-lg overflow-hidden bg-surface-container-low">
                    <img className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-500" src={evt.image} alt={evt.title} />
                  </div>
                  <div className="flex-grow flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant={evt.badge}>{evt.category}</Badge>
                        <div className="text-right">
                          <span className="text-xl font-bold text-primary block leading-none">{evt.date}</span>
                          <span className="text-xs text-secondary font-bold uppercase">{evt.month}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                        {evt.title}
                      </h3>
                      <p className="text-sm text-secondary leading-relaxed line-clamp-2">{evt.desc}</p>
                    </div>
                    <div className="mt-4 flex items-center space-x-6 text-secondary text-xs">
                      <div className="flex items-center"><span className="material-symbols-outlined text-sm mr-1">schedule</span> {evt.time}</div>
                      <div className="flex items-center"><span className="material-symbols-outlined text-sm mr-1">location_on</span> {evt.location}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
