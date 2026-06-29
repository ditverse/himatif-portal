import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

export default function TimelineManagement() {
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const activities = [
    {
      id: 1,
      name: 'IT Expo 2024',
      sub: 'Pameran karya mahasiswa',
      dept: 'Ristek',
      start: '12 Okt 2024',
      end: '14 Okt 2024',
      location: 'Gedung Serbaguna',
      status: 'ongoing'
    },
    {
      id: 2,
      name: 'Pelatihan Jurnalistik',
      sub: 'Workshop penulisan artikel',
      dept: 'Medkom',
      start: '25 Okt 2024',
      end: '25 Okt 2024',
      location: 'Ruang Kelas A3',
      status: 'upcoming'
    },
    {
      id: 3,
      name: 'Latihan Dasar Kepemimpinan',
      sub: 'Pengkaderan anggota baru',
      dept: 'PSDM',
      start: '01 Sep 2024',
      end: '03 Sep 2024',
      location: 'Bumi Perkemahan',
      status: 'done'
    },
    {
      id: 4,
      name: 'Rapat Kerja Tengah Tahun',
      sub: 'Evaluasi program kerja',
      dept: 'Kabinet',
      start: '15 Nov 2024',
      end: '16 Nov 2024',
      location: 'Aula Utama',
      status: 'upcoming'
    }
  ];

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return <Badge variant="warning" dot={true}>Ongoing</Badge>;
      case 'upcoming':
        return <Badge variant="primary">Upcoming</Badge>;
      case 'done':
        return <Badge variant="neutral">Done</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };

  const filteredActivities = activities.filter((act) => {
    const matchesDept = selectedDept === '' || act.dept.toLowerCase() === selectedDept.toLowerCase();
    const matchesStatus = selectedStatus === '' || act.status.toLowerCase() === selectedStatus.toLowerCase();
    return matchesDept && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-on-surface tracking-tight">Timeline</h2>
          <p className="text-sm text-secondary mt-1">Manage and track all organizational activities, department schedules, and upcoming events.</p>
        </div>
        <Button icon="add" onClick={() => alert('Fitur tambah kegiatan')}>
          Tambah Kegiatan
        </Button>
      </div>

      {/* Toolbar */}
      <Card variant="flat" hoverEffect={false} className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 !p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="appearance-none bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:border-primary-container cursor-pointer"
            >
              <option value="">Semua Departemen</option>
              <option value="ristek">Ristek</option>
              <option value="medkom">Medkom</option>
              <option value="psdm">PSDM</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">
              arrow_drop_down
            </span>
          </div>

          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="appearance-none bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:border-primary-container cursor-pointer"
            >
              <option value="">Semua Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="done">Done</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">
              arrow_drop_down
            </span>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-surface-container-low rounded-lg p-1 border border-outline-variant/30 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-1.5 bg-white text-on-surface rounded shadow-sm text-xs font-bold transition-all">
            <span className="material-symbols-outlined text-sm">table_rows</span>
            Tabel
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-1.5 text-secondary hover:text-on-surface rounded text-xs font-bold transition-all">
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            Kalender
          </button>
        </div>
      </Card>

      {/* Table Card */}
      <div className="bg-white rounded-xl border border-surface-variant/30 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/30">
                <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">Nama Kegiatan</th>
                <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">Departemen</th>
                <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">Waktu Pelaksanaan</th>
                <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">Lokasi</th>
                <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm text-on-surface divide-y divide-outline-variant/20">
              {filteredActivities.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-secondary">
                    Tidak ada kegiatan ditemukan.
                  </td>
                </tr>
              ) : (
                filteredActivities.map((act) => (
                  <tr key={act.id} className="hover:bg-surface transition-colors group">
                    <td className="px-6 py-4">
                      <p className="font-bold text-on-surface">{act.name}</p>
                      <p className="text-xs text-secondary mt-1">{act.sub}</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="neutral">{act.dept}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col text-xs font-semibold text-on-surface">
                        <span>{act.start}</span>
                        {act.start !== act.end && (
                          <span className="text-secondary flex items-center gap-1 mt-0.5">
                            <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span> {act.end}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-secondary">{act.location}</td>
                    <td className="px-6 py-4">{getStatusBadge(act.status)}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-secondary hover:text-on-surface p-1 rounded-md hover:bg-surface-container-high transition-colors" title="Edit">
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </button>
                        <button className="text-secondary hover:text-error p-1 rounded-md hover:bg-error-container transition-colors ml-2" title="Delete">
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="bg-surface-container-low border-t border-outline-variant/30 px-6 py-4 flex items-center justify-between text-xs text-secondary">
          <p>Showing {filteredActivities.length} of {activities.length} entries</p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 border border-outline-variant/30 rounded text-secondary hover:bg-surface-container-high transition-colors disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 bg-primary-container text-white rounded font-bold">1</button>
            <button className="px-3 py-1 border border-outline-variant/30 rounded text-on-surface hover:bg-surface-container-high transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
