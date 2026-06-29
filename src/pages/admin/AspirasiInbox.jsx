import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import TextArea from '../../components/ui/TextArea';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

export default function AspirasiInbox() {
  const [selectedFilter, setSelectedFilter] = useState('Semua');
  const [selectedId, setSelectedId] = useState(1);
  const [aspirations, setAspirations] = useState([
    {
      id: 1,
      sender: 'Anonim',
      nim: 'Disembunyikan',
      time: '10:42 AM',
      date: '10 Oktober 2023',
      category: 'Fasilitas',
      status: 'pending',
      title: 'AC di Ruang Kelas Lab Komputer 2 Mati',
      message: 'AC di Lab Komputer 2 (Gedung B Lantai 3) mati. Kondisi ini sangat mengganggu kenyamanan mahasiswa saat melakukan praktikum, terutama di siang hari karena ruangan menjadi sangat pengap dan panas. Mohon bantuan dari pihak himpunan untuk membantu mem-follow up keluhan ini.',
      note: ''
    },
    {
      id: 2,
      sender: 'Budi Santoso',
      nim: '140810200001',
      time: 'Kemarin',
      date: '09 Oktober 2023',
      category: 'Akademik',
      status: 'diproses',
      title: 'Jadwal UTS Bentrok',
      message: 'Ada bentrok jadwal antara mata kuliah Basis Data dan Struktur Data di hari rabu besok. Mohon segera dikoordinasikan dengan dosen pengampu.',
      note: 'Sudah di-email ke dosen koordinator.'
    },
    {
      id: 3,
      sender: 'Siti Aminah',
      nim: '140810200023',
      time: '2 Hari lalu',
      date: '08 Oktober 2023',
      category: 'Kegiatan',
      status: 'selesai',
      title: 'Saran Tema Makrab',
      message: 'Bagaimana kalau tema makrab tahun ini mengangkat isu teknologi hijau dan keberlanjutan?',
      note: 'Saran diterima dan akan dibahas pada rapat program kerja.'
    }
  ]);

  const activeAspirasi = aspirations.find(a => a.id === selectedId) || aspirations[0];

  const handleStatusChange = (e) => {
    const updatedStatus = e.target.value;
    setAspirations(prev => prev.map(a => a.id === activeAspirasi.id ? { ...a, status: updatedStatus } : a));
  };

  const handleNoteChange = (e) => {
    const updatedNote = e.target.value;
    setAspirations(prev => prev.map(a => a.id === activeAspirasi.id ? { ...a, note: updatedNote } : a));
  };

  const handleSaveAction = () => {
    alert(`Aspirasi "${activeAspirasi.title}" berhasil diperbarui!`);
  };

  const filteredAspirations = aspirations.filter(a => {
    if (selectedFilter === 'Semua') return true;
    return a.status.toLowerCase() === selectedFilter.toLowerCase();
  });

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'pending': return <Badge variant="warning">Pending</Badge>;
      case 'diproses': return <Badge variant="primary">Diproses</Badge>;
      case 'selesai': return <Badge variant="success">Selesai</Badge>;
      default: return <Badge variant="neutral">{status}</Badge>;
    }
  };

  return (
    <div className="flex gap-6 h-[calc(100vh-140px)] min-h-[500px] overflow-hidden">
      {/* LEFT PANEL: Inbox List (38%) */}
      <div className="w-[38%] flex flex-col bg-white rounded-xl border border-surface-variant/30 overflow-hidden shadow-sm">
        {/* Panel Header */}
        <div className="p-4 border-b border-outline-variant/20 bg-surface-container-low/40 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-on-surface">Aspirasi</h2>
            <span className="bg-[#cc0000] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {aspirations.filter(a => a.status === 'pending').length} Pending
            </span>
          </div>
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {['Semua', 'Pending', 'Diproses', 'Selesai'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  selectedFilter === tab
                    ? 'bg-primary-container text-white'
                    : 'bg-surface-container-low text-secondary hover:bg-surface-container-high'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto divide-y divide-outline-variant/10">
          {filteredAspirations.length === 0 ? (
            <div className="p-8 text-center text-secondary text-sm">
              Tidak ada aspirasi.
            </div>
          ) : (
            filteredAspirations.map((a) => {
              const isActive = a.id === selectedId;
              return (
                <div
                  key={a.id}
                  onClick={() => setSelectedId(a.id)}
                  className={`p-4 cursor-pointer relative transition-colors ${
                    isActive ? 'bg-surface-container-low/60' : 'bg-white hover:bg-surface/30'
                  }`}
                >
                  {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />}
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                      {a.status === 'pending' && <span className="w-2 h-2 rounded-full bg-primary" />}
                      <span className="text-sm font-bold text-on-surface">{a.sender}</span>
                    </div>
                    <span className="text-xs text-secondary">{a.time}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-surface-container-high text-secondary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      {a.category}
                    </span>
                    {getStatusBadge(a.status)}
                  </div>
                  <h3 className="text-sm font-bold text-on-surface mb-1 truncate">{a.title}</h3>
                  <p className="text-xs text-secondary line-clamp-2 leading-relaxed">{a.message}</p>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* RIGHT PANEL: Message Details (62%) */}
      <div className="w-[62%] flex flex-col bg-white rounded-xl border border-surface-variant/30 overflow-hidden shadow-sm">
        {activeAspirasi ? (
          <div className="flex-1 flex flex-col overflow-y-auto">
            {/* Meta Header */}
            <div className="p-6 border-b border-outline-variant/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary border border-outline-variant/30">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-on-surface">{activeAspirasi.sender}</h3>
                    <p className="text-xs text-secondary">NIM: {activeAspirasi.nim}</p>
                  </div>
                </div>
                <div className="text-right text-xs text-secondary">
                  <p>{activeAspirasi.date}</p>
                  <p>{activeAspirasi.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-surface-container-high text-secondary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                  Kategori: {activeAspirasi.category}
                </span>
                {getStatusBadge(activeAspirasi.status)}
              </div>
              <h2 className="text-lg font-bold text-on-surface leading-tight mt-2">{activeAspirasi.title}</h2>
            </div>

            {/* Message Body */}
            <div className="p-6 text-sm text-secondary leading-relaxed flex-1 space-y-4">
              <p>Halo pengurus HIMATIF,</p>
              <p>{activeAspirasi.message}</p>
            </div>

            {/* Admin Action Area (sticky bottom) */}
            <div className="bg-surface-container-low/40 border-t border-outline-variant/20 p-6 space-y-4">
              <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider">Tindakan Admin</h4>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">Ubah Status</label>
                  <div className="relative">
                    <select
                      value={activeAspirasi.status}
                      onChange={handleStatusChange}
                      className="w-full appearance-none bg-white border border-outline-variant/30 rounded-lg px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary-container"
                    >
                      <option value="pending">Pending</option>
                      <option value="diproses">Diproses</option>
                      <option value="selesai">Selesai</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                <TextArea
                  label="Catatan Internal (Tidak terlihat oleh pengirim)"
                  id="internal-note"
                  placeholder="Tambahkan catatan untuk pengurus lain..."
                  rows={3}
                  value={activeAspirasi.note}
                  onChange={handleNoteChange}
                />

                <Button icon="save" onClick={handleSaveAction} className="w-full justify-center">
                  Simpan Perubahan
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-secondary py-12">
            Pilih aspirasi dari daftar untuk melihat detail.
          </div>
        )}
      </div>
    </div>
  );
}
