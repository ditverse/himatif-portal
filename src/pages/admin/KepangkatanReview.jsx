import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import TextArea from '../../components/ui/TextArea';

export default function KepangkatanReview() {
  const [selectedId, setSelectedId] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState('Pending');
  const [remarks, setRemarks] = useState('');

  const [applications, setApplications] = useState([
    {
      id: 1,
      name: 'Budi Santoso',
      nim: '140810210045',
      currentRank: 'Prajurit Muda',
      requestedRank: 'Pendekar Utama',
      date: '24 Okt 2023',
      status: 'pending',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVmNd8jVYDAy4A527tQqXIB2Mfb1W85u9wp9yfZiLJjpJEkthmE-shwhCMQupZgNRLA0-gtD4zU1wlc6Uc6oG8sSatJXEe0GBbBby-gz1hCcPe88dC-rxdosVZO41leyBIDSaNsHfA9C6p2uXwRg6IQ6Q-kYnDY6kD1AjIiRQyrtFlVlZYhhT7fwenySfhL8QJ972-7yEWDGBg0IgxIuXJ4aKZnjeOy5izbf_buivlAGdlS7dfdVnUOL2KmvW59ZLwIQPZdY8Yq6A',
      requirements: [
        { label: 'Telah menjabat sebagai Prajurit Utama', desc: 'Minimal 1 periode kepengurusan', checked: true },
        { label: 'Lulus Sertifikasi Kepemimpinan', desc: 'Lampirkan sertifikat LDKM/setara', checked: true },
        { label: 'Rekomendasi Kepala Departemen', desc: 'Surat rekomendasi tertulis & ttd', checked: false }
      ],
      documents: [
        { name: 'SK_Prajurit.pdf', size: '1.2 MB' },
        { name: 'Sertif_LDKM.pdf', size: '850 KB' },
        { name: 'Surat_Rekomendasi_Kadep.jpg', size: '2.4 MB' }
      ]
    },
    {
      id: 2,
      name: 'Siti Aminah',
      nim: '140810210012',
      currentRank: 'Prajurit Muda',
      requestedRank: 'Prajurit Muda',
      date: '23 Okt 2023',
      status: 'pending',
      image: '',
      requirements: [
        { label: 'Telah menjabat sebagai Prajurit Utama', desc: 'Minimal 1 periode kepengurusan', checked: false },
        { label: 'Lulus Sertifikasi Kepemimpinan', desc: 'Lampirkan sertifikat LDKM/setara', checked: true },
        { label: 'Rekomendasi Kepala Departemen', desc: 'Surat rekomendasi tertulis & ttd', checked: true }
      ],
      documents: [
        { name: 'SK_Prajurit.pdf', size: '1.0 MB' }
      ]
    },
    {
      id: 3,
      name: 'Rina Melati',
      nim: '140810210088',
      currentRank: 'Prajurit Muda',
      requestedRank: 'Ksatria',
      date: '22 Okt 2023',
      status: 'pending',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnD0Fph82gW_76CwxdrvYczfkBm1GYL1tl9qdtkHmkO3uVFAo5TBaFjNjnZZGRGVLQRswQzv3TMUC6U06KhvWD9O18W6T_Ehxhw7ZhMP4244KFb7VFc98ChZRO3xc45zmaNAHAq-9Lvjh7W9dnxjwSNrpZOelos5bE42r7SH07O-fBwe8t8FUAgtrtA7r5Q_iupp-QBtrr2630uL-k6GonDEL8wUed-YmZkryAf6Vqx0xGBzxr2nVejU--2ugrvTWDVd3yvrwAWfk',
      requirements: [
        { label: 'Telah menjabat sebagai Prajurit Utama', desc: 'Minimal 1 periode kepengurusan', checked: true },
        { label: 'Lulus Sertifikasi Kepemimpinan', desc: 'Lampirkan sertifikat LDKM/setara', checked: true },
        { label: 'Rekomendasi Kepala Departemen', desc: 'Surat rekomendasi tertulis & ttd', checked: true }
      ],
      documents: [
        { name: 'SK_Prajurit.pdf', size: '1.4 MB' },
        { name: 'Sertif_LDKM.pdf', size: '900 KB' }
      ]
    }
  ]);

  const activeApp = applications.find(a => a.id === selectedId) || applications[0];

  const handleApprove = () => {
    setApplications(prev => prev.map(a => a.id === activeApp.id ? { ...a, status: 'disetujui' } : a));
    alert(`Pengajuan ${activeApp.name} berhasil Disetujui!`);
  };

  const handleReject = () => {
    setApplications(prev => prev.map(a => a.id === activeApp.id ? { ...a, status: 'ditolak' } : a));
    alert(`Pengajuan ${activeApp.name} berhasil Ditolak!`);
  };

  const filteredApplications = applications.filter((app) => {
    if (selectedFilter === 'Semua') return true;
    return app.status.toLowerCase() === selectedFilter.toLowerCase();
  });

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'disetujui':
        return <Badge variant="success">Disetujui</Badge>;
      case 'ditolak':
        return <Badge variant="error">Ditolak</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };

  return (
    <div className="flex gap-6 h-[calc(100vh-140px)] min-h-[500px] overflow-hidden bg-background">
      {/* Left Side: Main List View */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-shrink-0 mb-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-on-surface tracking-tight">Kepangkatan</h2>
              <span className="px-3 py-1 bg-primary-container text-white text-xs font-bold rounded-full">
                {applications.filter(a => a.status === 'pending').length} Menunggu
              </span>
            </div>
            <Button variant="secondary" icon="download" onClick={() => alert('Exporting data...')}>
              Export Data
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-outline-variant/30">
            {['Semua', 'Pending', 'Disetujui', 'Ditolak'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`pb-3 text-sm font-bold transition-all relative ${
                  selectedFilter === tab
                    ? 'text-primary border-b-2 border-primary font-bold'
                    : 'text-secondary hover:text-on-surface border-b-2 border-transparent'
                }`}
              >
                {tab}
                <span className="ml-1.5 px-2 py-0.5 bg-surface-container-high rounded-full text-[10px] text-secondary">
                  {tab === 'Semua' ? applications.length : applications.filter(a => a.status.toLowerCase() === tab.toLowerCase()).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Table Container */}
        <div className="flex-1 overflow-y-auto pb-6">
          <div className="bg-white rounded-xl border border-surface-variant/30 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant/30 bg-surface-container-low text-secondary text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Nama Mahasiswa</th>
                  <th className="py-4 px-6">NIM</th>
                  <th className="py-4 px-6">Pengajuan Pangkat</th>
                  <th className="py-4 px-6">Tanggal</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-sm text-on-surface divide-y divide-outline-variant/10">
                {filteredApplications.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-secondary">
                      Tidak ada pengajuan ditemukan.
                    </td>
                  </tr>
                ) : (
                  filteredApplications.map((app) => {
                    const isActive = app.id === selectedId;
                    return (
                      <tr 
                        key={app.id}
                        onClick={() => setSelectedId(app.id)}
                        className={`transition-colors cursor-pointer border-l-4 ${
                          isActive 
                            ? 'bg-surface-container-low/60 border-l-primary' 
                            : 'hover:bg-surface border-l-transparent'
                        }`}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            {app.image ? (
                              <img className="w-9 h-9 rounded-full object-cover shadow-sm" src={app.image} alt={app.name} />
                            ) : (
                              <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-sm text-secondary">
                                {app.name[0]}
                              </div>
                            )}
                            <span className="font-bold text-on-surface">{app.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-secondary">{app.nim}</td>
                        <td className="py-4 px-6">
                          <Badge variant="primary">{app.requestedRank}</Badge>
                        </td>
                        <td className="py-4 px-6 text-secondary">{app.date}</td>
                        <td className="py-4 px-6">{getStatusBadge(app.status)}</td>
                        <td className="py-4 px-6 text-right">
                          <Button variant="secondary" className="!py-1.5 !px-3 text-xs" onClick={() => setSelectedId(app.id)}>
                            Review
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Side: Drawer / Review Panel */}
      {activeApp && (
        <aside className="w-[420px] bg-white border-l border-outline-variant/30 flex flex-col flex-shrink-0 shadow-lg z-10">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-outline-variant/30">
            <h3 className="text-lg font-bold text-on-surface tracking-tight">Review Pengajuan</h3>
            <button className="text-secondary hover:text-on-surface p-1 rounded-full hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Drawer Content Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Profile Block */}
            <div className="flex flex-col items-center text-center">
              {activeApp.image ? (
                <img className="w-20 h-20 rounded-full object-cover shadow-md border border-outline-variant/30 mb-4" src={activeApp.image} alt={activeApp.name} />
              ) : (
                <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-2xl text-secondary mb-4">
                  {activeApp.name[0]}
                </div>
              )}
              <h4 className="text-base font-bold text-on-surface">{activeApp.name}</h4>
              <p className="text-xs text-secondary mt-0.5">NIM. {activeApp.nim}</p>

              {/* Rank Transition */}
              <div className="flex items-center justify-center gap-4 bg-surface-container-low p-4 rounded-xl w-full border border-outline-variant/20 mt-4">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-1">Saat Ini</span>
                  <Badge variant="neutral">{activeApp.currentRank}</Badge>
                </div>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-primary-container uppercase tracking-wider mb-1">Pengajuan</span>
                  <Badge variant="primary">{activeApp.requestedRank}</Badge>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold text-on-surface uppercase tracking-wider">Syarat Pangkat</h5>
              <div className="space-y-2">
                {activeApp.requirements?.map((req, idx) => (
                  <label key={idx} className="flex items-start gap-3 p-3 border border-outline-variant/20 rounded-lg bg-surface hover:bg-surface-container-low/30 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      defaultChecked={req.checked}
                      className="mt-0.5 w-5 h-5 text-primary border-outline-variant rounded focus:ring-primary focus:ring-2"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">{req.label}</span>
                      <span className="text-xs text-secondary mt-0.5">{req.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold text-on-surface uppercase tracking-wider">Dokumen Bukti</h5>
              <div className="grid grid-cols-1 gap-2">
                {activeApp.documents?.map((doc, idx) => (
                  <a key={idx} className="flex items-center gap-3 p-3 border border-outline-variant/20 rounded-lg hover:border-primary hover:bg-[#FFF0F0] transition-all group" href="#">
                    <div className="w-10 h-10 bg-error-container/20 text-primary-container rounded flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
                    </div>
                    <div className="flex flex-col overflow-hidden flex-1">
                      <span className="text-sm font-semibold text-on-surface group-hover:text-primary truncate">{doc.name}</span>
                      <span className="text-xs text-secondary mt-0.5">{doc.size}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Catatan Reviewer */}
            <TextArea
              label="Catatan Tambahan (Opsional)"
              id="remarks"
              placeholder="Tambahkan alasan penolakan atau catatan persetujuan..."
              rows={3}
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>

          {/* Drawer Actions */}
          <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low/40 flex items-center gap-3">
            <button 
              onClick={handleReject}
              className="flex-1 py-2.5 px-4 border border-primary text-primary font-bold text-sm rounded-lg hover:bg-error-container/10 transition-colors"
            >
              Tolak
            </button>
            <button 
              onClick={handleApprove}
              className="flex-1 py-2.5 px-4 bg-[#10B981] text-white font-bold text-sm rounded-lg hover:bg-[#059669] transition-all shadow-sm"
            >
              Setujui
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}
