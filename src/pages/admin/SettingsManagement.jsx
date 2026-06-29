import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

export default function SettingsManagement() {
  const [innerTab, setInnerTab] = useState('users'); // users | profile | security | import
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Budi Santoso',
      nim: '210102001',
      email: 'budi.s@student.univ.edu',
      role: 'Mahasiswa',
      active: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9UTcXB7crkkiqWlyatw97EFaAGeCoiOj6PEJd6YDGQOQOZJTPymf8Xy-DpI34jBv4Bq3-AEQf6Pp_sTODt1EVsotc--KMfekJe363dSdD3r_k1sFVAPEQP0HulrRTFS6xulrEkK3VBQum_jbkpc5_CFU77zjVJB8RRSsmvllPMqAb2sRFuXpsdboKhGIMdNDR4SQ5lr9MYWUlfjaakp5IDsoh8dGlV_gFlblH59tKuPvkp6OYYKxXWy7KyAfa2-N_8NIHZK8ER8'
    },
    {
      id: 2,
      name: 'Andi Wijaya',
      nim: 'Admin System',
      email: 'admin@himatif.org',
      role: 'Admin',
      active: true,
      image: ''
    },
    {
      id: 3,
      name: 'Siti Nurhaliza',
      nim: '210102005',
      email: 'siti.n@student.univ.edu',
      role: 'Mahasiswa',
      active: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO9s_L17K3bH1R1xxTDqBHMs27zBi8QpqISvO4oLWtwvMS3KanGRoGOl7FyfpFVsZnJKmIwsRth64z6iwkBHYFNFeJU0F6Pj6QaMTuHh1--T5vSPWIM_-vBwHmrt5-UsNedSjPsZ97soFrKqfih_C5LlrV_nqIMm3GbSmUid5RXoS180JglRehgmNWjE_zWACFGehH5wBB5xUYnk4q2p78jM85LXS_iaJ-XpJ5ZHMb1RjD8CScTM7COW_iwXkqafYVKKAVwEwDQvY'
    }
  ]);

  const handleToggleUser = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, active: !u.active } : u));
  };

  const renderInnerContent = () => {
    switch (innerTab) {
      case 'profile':
        return (
          <Card variant="flat" hoverEffect={false}>
            <h3 className="text-lg font-bold text-on-surface mb-6">Profil Saya</h3>
            <div className="space-y-4 max-w-md">
              <InputField label="Nama Lengkap" id="admin-name" defaultValue="Admin Utama" />
              <InputField label="Email" id="admin-email" defaultValue="admin@himatif.org" type="email" />
              <Button onClick={() => alert('Profil disimpan!')}>Simpan Profil</Button>
            </div>
          </Card>
        );
      case 'security':
        return (
          <Card variant="flat" hoverEffect={false}>
            <h3 className="text-lg font-bold text-on-surface mb-6">Keamanan</h3>
            <div className="space-y-4 max-w-md">
              <InputField label="Password Lama" id="old-pass" type="password" />
              <InputField label="Password Baru" id="new-pass" type="password" />
              <Button onClick={() => alert('Password diubah!')}>Update Password</Button>
            </div>
          </Card>
        );
      case 'import':
        return (
          <div className="space-y-6">
            <Card variant="flat" hoverEffect={false}>
              <div className="mb-6">
                <h3 className="text-lg font-bold text-on-surface">Import Data Mahasiswa</h3>
                <p className="text-secondary text-xs mt-1">Unggah file Excel untuk menambahkan banyak mahasiswa sekaligus.</p>
              </div>

              {/* Stepper */}
              <div className="flex items-center justify-between mb-8 px-6 relative max-w-xl mx-auto">
                <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-surface-container-highest -translate-y-1/2 z-0" />
                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow ring-4 ring-white">
                    1
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase">Upload File</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-sm font-bold ring-4 ring-white">
                    2
                  </div>
                  <span className="text-[10px] font-bold text-secondary uppercase">Preview Data</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-sm font-bold ring-4 ring-white">
                    3
                  </div>
                  <span className="text-[10px] font-bold text-secondary uppercase">Selesai</span>
                </div>
              </div>

              {/* Content Upload */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20 h-fit">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2">Persiapan Data</h4>
                  <p className="text-xs text-secondary mb-4 leading-relaxed">Pastikan format kolom sesuai dengan template standar kami agar proses import berjalan lancar.</p>
                  <Button variant="secondary" icon="download" className="w-full justify-center text-xs">
                    Download Template
                  </Button>
                </div>

                <div className="md:col-span-2">
                  <div className="border-2 border-dashed border-outline-variant/30 hover:border-primary bg-surface hover:bg-[#FFF0F0] transition-colors duration-300 rounded-xl flex flex-col items-center justify-center py-12 px-6 text-center cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary-container group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                      <span className="material-symbols-outlined text-2xl">upload_file</span>
                    </div>
                    <h4 className="text-sm font-bold text-on-surface mb-1 group-hover:text-primary">Drag &amp; Drop file Excel di sini</h4>
                    <p className="text-xs text-secondary mb-4">atau klik untuk memilih file dari komputer Anda</p>
                    <p className="text-[10px] font-mono bg-surface-container-high px-2 py-1 rounded">Format: .xlsx, .xls (Max 5MB)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );
      case 'users':
      default:
        return (
          <div className="bg-white rounded-xl border border-surface-variant/30 flex flex-col overflow-hidden shadow-sm">
            {/* Toolbar */}
            <div className="p-6 border-b border-outline-variant/20 bg-surface-container-low/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-on-surface">Data Pengguna</h3>
                <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {users.length} Total
                </span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <InputField
                  id="user-search"
                  icon="search"
                  placeholder="Cari nama..."
                  className="!py-0 w-48 sm:w-64"
                />
                <Button variant="secondary" icon="filter_list">
                  Filter
                </Button>
                <Button icon="add" onClick={() => alert('Tambah pengguna')}>
                  Tambah
                </Button>
              </div>
            </div>

            {/* User Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/30 text-secondary text-xs font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Pengguna</th>
                    <th className="px-6 py-4">Kontak</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-on-surface divide-y divide-outline-variant/20 bg-white">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-surface transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {user.image ? (
                            <img className="w-9 h-9 rounded-full object-cover border border-outline-variant/30" src={user.image} alt={user.name} />
                          ) : (
                            <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-sm text-secondary">
                              {user.name[0]}
                            </div>
                          )}
                          <div>
                            <p className="font-bold text-on-surface group-hover:text-primary transition-colors">{user.name}</p>
                            <p className="text-xs text-secondary mt-0.5">{user.nim}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-secondary">{user.email}</td>
                      <td className="px-6 py-4">
                        <Badge variant={user.role === 'Admin' ? 'primary' : 'neutral'}>
                          {user.role}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        {/* Custom Switch Toggle */}
                        <label className="flex items-center cursor-pointer relative">
                          <input 
                            type="checkbox"
                            checked={user.active}
                            onChange={() => handleToggleUser(user.id)}
                            className="sr-only peer"
                          />
                          <div className="w-10 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container" />
                          <span className={`ml-3 text-xs font-bold uppercase ${user.active ? 'text-primary' : 'text-secondary'}`}>
                            {user.active ? 'Aktif' : 'Nonaktif'}
                          </span>
                        </label>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 text-secondary hover:text-primary hover:bg-surface-container-high rounded-lg transition-colors" title="Edit Pengguna">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-outline-variant/30 flex items-center justify-between bg-surface-container-low/20 text-xs text-secondary">
              <span>Menampilkan 1-3 dari {users.length} pengguna</span>
              <div className="flex gap-1">
                <button className="p-1 rounded border border-outline-variant/30 text-secondary disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="px-2.5 py-1 rounded bg-primary-container text-white font-bold">1</button>
                <button className="p-1 rounded border border-outline-variant/30 text-secondary">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-on-surface">Pengaturan</h1>
        <p className="text-sm text-secondary mt-1">Kelola preferensi sistem, pengguna, dan data master.</p>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Inner Vertical Navigation (Left Column) */}
        <div className="md:col-span-3 bg-white rounded-xl border border-surface-variant/30 overflow-hidden p-2 shadow-sm">
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => setInnerTab('profile')}
              className={`flex items-center w-full text-left px-4 py-3 text-sm rounded-lg transition-colors font-semibold ${
                innerTab === 'profile'
                  ? 'bg-primary/5 text-primary border-l-4 border-primary font-bold'
                  : 'text-secondary hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined mr-3 text-[20px]">person</span>
              Profil Saya
            </button>
            <button
              onClick={() => setInnerTab('security')}
              className={`flex items-center w-full text-left px-4 py-3 text-sm rounded-lg transition-colors font-semibold ${
                innerTab === 'security'
                  ? 'bg-primary/5 text-primary border-l-4 border-primary font-bold'
                  : 'text-secondary hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined mr-3 text-[20px]">shield</span>
              Keamanan
            </button>
            <button
              onClick={() => setInnerTab('users')}
              className={`flex items-center w-full text-left px-4 py-3 text-sm rounded-lg transition-colors font-semibold ${
                innerTab === 'users'
                  ? 'bg-primary/5 text-primary border-l-4 border-primary font-bold'
                  : 'text-secondary hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined mr-3 text-[20px]">manage_accounts</span>
              Kelola Pengguna
            </button>
            <button
              onClick={() => setInnerTab('import')}
              className={`flex items-center w-full text-left px-4 py-3 text-sm rounded-lg transition-colors font-semibold ${
                innerTab === 'import'
                  ? 'bg-primary/5 text-primary border-l-4 border-primary font-bold'
                  : 'text-secondary hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined mr-3 text-[20px]">upload_file</span>
              Import Mahasiswa
            </button>
          </nav>
        </div>

        {/* Content Area (Right Column) */}
        <div className="md:col-span-9">
          {renderInnerContent()}
        </div>
      </div>
    </div>
  );
}
