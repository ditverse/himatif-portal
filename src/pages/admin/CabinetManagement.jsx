import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import TextArea from '../../components/ui/TextArea';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

export default function CabinetManagement() {
  const [activeTab, setActiveTab] = useState('info');
  const [cabinetInfo, setCabinetInfo] = useState({
    name: 'Adhigana Karya',
    periode: '2023/2024',
    tagline: 'Sinergi Bergerak, Harmoni Berdampak',
    vision: 'Membangun kolaborasi tanpa batas, mengukir prestasi dengan dedikasi. Sinergi bukan sekadar nama, melainkan ruh pergerakan kita bersama.'
  });

  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Budi Santoso',
      nim: '140810200001',
      role: 'Ketua Himpunan',
      dept: 'Pengurus Inti',
      order: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBshD_RcJqXDLv8UVZI9BZjuM-OMYRDf-SSKNcqmBq7E9OIhx8s9zdTQE105af7q0bQkGTVFHXc0pie0Lxq0b0AMON20sEW3GVc_bqo9rH-47TeZX8_wQae1Ynvb8xMsgN7emHzZJ6LSEWCXVOtYBHgzvtq62nwC0XEmsDmcsTUG3jUrF4u3mMI_HflnzSPEPwu9puxdI_0o0vDX3CaBFClgQYN-bxylAepM2j8GHAozEATRDjIVtmgElM1UOSGBOBQbb3Pj-hsrFE'
    },
    {
      id: 2,
      name: 'Siti Aminah',
      nim: '140810200023',
      role: 'Kepala Departemen',
      dept: 'Kaderisasi',
      order: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo8_iHSuMVMGjnfbBFXmULd85pV1h1-St7U1XtK7-w5neXFdFptqe2uEnebx5TSFjfW4YeLN56Nc0Fr_acIUxOnKQFk7Xf1_QsT5llw7pAu1N2nE88QUNnXRoLyQ7zaM81dNiyh42nRtUca4CA3Y4HLRulfhuJzhCoVXl9WM_0oVx9-UpkbI7ZB4V2FdAYsAsg1zcj4kNuJFtgpc6v4en5kEpOyMiineLxls43ZtILpvEXn4Xee6p25k14UiiRbLu4SFu6IqAdVw8'
    }
  ]);

  const handleInfoChange = (e) => {
    const { id, value } = e.target;
    setCabinetInfo(prev => ({ ...prev, [id]: value }));
  };

  const handleSaveInfo = (e) => {
    e.preventDefault();
    alert('Informasi Kabinet berhasil diperbarui!');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-on-surface tracking-tight">Kabinet</h2>
        <p className="text-sm text-secondary mt-1">Kelola identitas utama, filosofi, dan daftar seluruh anggota pengurus kabinet periode berjalan.</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-surface-container-highest overflow-x-auto">
        <button
          onClick={() => setActiveTab('info')}
          className={`whitespace-nowrap px-8 py-4 text-sm font-bold border-b-2 transition-colors ${
            activeTab === 'info'
              ? 'text-primary border-primary'
              : 'text-secondary border-transparent hover:text-on-surface'
          }`}
        >
          Informasi Kabinet
        </button>
        <button
          onClick={() => setActiveTab('anggota')}
          className={`whitespace-nowrap px-8 py-4 text-sm font-bold border-b-2 transition-colors ${
            activeTab === 'anggota'
              ? 'text-primary border-primary'
              : 'text-secondary border-transparent hover:text-on-surface'
          }`}
        >
          Anggota Kabinet
        </button>
      </div>

      {/* TAB 1: INFORMASI KABINET */}
      {activeTab === 'info' && (
        <Card variant="flat" hoverEffect={false} className="p-8 md:p-10 flex flex-col md:flex-row gap-8">
          {/* Logo Upload Section (Left Col) */}
          <div className="flex flex-col items-center md:items-start md:w-1/3 shrink-0">
            <label className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">Logo Kabinet</label>
            <div className="w-48 h-48 rounded-full border-2 border-dashed border-outline-variant/30 bg-surface-container-low flex items-center justify-center mb-6 relative overflow-hidden group hover:border-primary-container transition-colors cursor-pointer">
              <div 
                className="w-full h-full bg-cover bg-center absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqv-MrKLvJqtLrcGhvgjQcv77n5MpABuJB2skrJ4h-Hw3QeFCXgOdlqNP7_6FOkQLb0zQpGowXD23yVFVBZiUPNmHxScDY2s6y-Sjq5UL5SZ3_h28DXyDsjPehzBO-K-rSoVefHB7xwA_9h9Xg89I6UqmnQxUtdupNRkCkC4lGmYlG2AU5Xgu94bOF8KWYfE_d2ZCQFhOeABewbLjxCdoTPswBIWsxam_zmy_jQgBAf-DGY1BJSGapix4qtcHUYgvUYJwfQlZ_vi4')" }}
              />
              <div className="absolute inset-0 bg-inverse-surface/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white text-3xl">upload</span>
              </div>
            </div>
            <p className="text-xs text-secondary text-center md:text-left mb-6 leading-relaxed">
              Disarankan menggunakan format PNG transparan dengan resolusi minimal 512x512px.
            </p>
            <Button variant="secondary" icon="image" className="w-full justify-center">
              Ganti Logo
            </Button>
          </div>

          {/* Form Details (Right Col) */}
          <form onSubmit={handleSaveInfo} className="flex-1 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField
                label="Nama Kabinet"
                id="name"
                value={cabinetInfo.name}
                onChange={handleInfoChange}
                required
              />
              <InputField
                label="Periode"
                id="periode"
                value={cabinetInfo.periode}
                onChange={handleInfoChange}
                required
              />
            </div>
            <InputField
              label="Tagline"
              id="tagline"
              value={cabinetInfo.tagline}
              onChange={handleInfoChange}
              required
            />
            <TextArea
              label="Filosofi / Visi"
              id="vision"
              value={cabinetInfo.vision}
              onChange={handleInfoChange}
              rows={5}
              required
            />
            <div className="pt-6 border-t border-outline-variant/20 flex justify-end">
              <Button type="submit" icon="save">
                Simpan Perubahan
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* TAB 2: ANGGOTA KABINET */}
      {activeTab === 'anggota' && (
        <div className="space-y-6">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <div className="flex items-center gap-3 flex-1">
              <div className="relative w-full sm:w-64">
                <InputField
                  id="member-search"
                  icon="search"
                  placeholder="Cari nama atau NIM..."
                  className="!py-0"
                />
              </div>
              <Button variant="secondary" icon="filter_list">
                Filter
              </Button>
            </div>
            <Button icon="person_add" onClick={() => alert('Fitur tambah anggota kabinet')}>
              Tambah Anggota
            </Button>
          </div>

          {/* Member Table */}
          <div className="bg-white rounded-xl border border-surface-variant/30 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/30">
                    <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-widest w-16">Foto</th>
                    <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-widest">Nama &amp; NIM</th>
                    <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-widest">Jabatan</th>
                    <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-widest">Departemen</th>
                    <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-widest text-center w-24">Order</th>
                    <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-widest text-right w-24">Aksi</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-on-surface divide-y divide-outline-variant/20">
                  {members.map((m) => (
                    <tr key={m.id} className="hover:bg-surface transition-colors group">
                      <td className="px-6 py-4">
                        <img className="w-10 h-10 rounded-full object-cover border border-surface-container-highest" src={m.image} alt={m.name} />
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-bold text-on-surface mb-0.5">{m.name}</p>
                        <p className="text-xs text-secondary font-normal">{m.nim}</p>
                      </td>
                      <td className="px-6 py-4 text-secondary">{m.role}</td>
                      <td className="px-6 py-4">
                        <Badge variant={m.dept === 'Pengurus Inti' ? 'primary' : 'neutral'}>
                          {m.dept}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-center text-secondary font-semibold">{m.order}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-secondary hover:text-on-surface p-1.5 rounded-md hover:bg-surface-container-low transition-colors">
                            <span className="material-symbols-outlined text-sm">edit</span>
                          </button>
                          <button className="text-secondary hover:text-error p-1.5 rounded-md hover:bg-error-container transition-colors">
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer */}
            <div className="bg-surface-container-low border-t border-outline-variant/30 px-6 py-4 flex items-center justify-between text-xs text-secondary">
              <p>Menampilkan 1-2 dari {members.length} anggota</p>
              <div className="flex gap-1">
                <button className="p-1 rounded hover:bg-surface-container-high disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="p-1 rounded hover:bg-surface-container-high">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
