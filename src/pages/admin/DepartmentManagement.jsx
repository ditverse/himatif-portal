import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import TextArea from '../../components/ui/TextArea';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

export default function DepartmentManagement() {
  const [selectedDept, setSelectedDept] = useState('Kaderisasi');
  const [activeTab, setActiveTab] = useState('info');
  const [tupoksiList, setTupoksiList] = useState([
    'Menyusun kurikulum kaderisasi tingkat dasar dan lanjut.',
    'Menyelenggarakan Masa Penerimaan Anggota Baru (MPAB).',
    'Melakukan monitoring dan evaluasi terhadap keaktifan anggota.'
  ]);
  const [newTupoksi, setNewTupoksi] = useState('');

  const departments = [
    {
      group: 'Pengembangan Sumber Daya Mahasiswa',
      items: [
        { name: 'Kaderisasi', prokerCount: 7 },
        { name: 'Keilmuan', prokerCount: 4 }
      ]
    },
    {
      group: 'Komunikasi dan Informasi',
      items: [
        { name: 'Media Kreatif', prokerCount: 5 },
        { name: 'Hubungan Masyarakat', prokerCount: 3 }
      ]
    }
  ];

  const handleAddTupoksi = () => {
    if (!newTupoksi.trim()) return;
    setTupoksiList(prev => [...prev, newTupoksi.trim()]);
    setNewTupoksi('');
  };

  const handleDeleteTupoksi = (idx) => {
    setTupoksiList(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Perubahan untuk departemen ${selectedDept} berhasil disimpan!`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">Departemen</h2>
          <p className="text-sm text-secondary mt-1">Kelola struktur departemen dan program kerja.</p>
        </div>
        <Button icon="add" onClick={() => alert('Fitur tambah departemen')}>
          Tambah Departemen
        </Button>
      </div>

      {/* Split Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Panel: Department List (35%) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-surface-variant/30 overflow-hidden flex flex-col shadow-sm">
          {/* Panel Search */}
          <div className="p-4 border-b border-outline-variant/20 bg-surface-container-low/40">
            <InputField
              id="dept-search"
              icon="search"
              placeholder="Cari departemen..."
              className="!py-0"
            />
          </div>
          
          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-2 space-y-4">
            {departments.map((group, gIdx) => (
              <div key={gIdx} className="space-y-1">
                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.05em] px-4 py-2">
                  {group.group}
                </h3>
                <div className="flex flex-col">
                  {group.items.map((item, iIdx) => {
                    const isActive = selectedDept === item.name;
                    return (
                      <button
                        key={iIdx}
                        onClick={() => setSelectedDept(item.name)}
                        className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-lg border-l-4 transition-colors ${
                          isActive
                            ? 'bg-primary-container/10 border-primary'
                            : 'border-transparent hover:bg-surface-container-low'
                        }`}
                      >
                        <div>
                          <div className={`text-sm font-bold ${isActive ? 'text-primary' : 'text-on-surface'}`}>
                            {item.name}
                          </div>
                          <div className="text-xs text-secondary mt-1">
                            {item.prokerCount} Program Kerja
                          </div>
                        </div>
                        <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-primary' : 'text-secondary'}`}>
                          chevron_right
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Department Details (65%) */}
        <form onSubmit={handleSave} className="lg:col-span-8 bg-white rounded-xl border border-surface-variant/30 overflow-hidden flex flex-col shadow-sm">
          {/* Tabs Header */}
          <div className="flex items-center px-6 pt-4 border-b border-outline-variant/20 gap-6">
            <button
              type="button"
              onClick={() => setActiveTab('info')}
              className={`text-sm font-bold pb-3 border-b-2 transition-colors ${
                activeTab === 'info'
                  ? 'text-primary border-primary'
                  : 'text-secondary border-transparent hover:text-on-surface'
              }`}
            >
              Informasi
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('proker')}
              className={`text-sm font-bold pb-3 border-b-2 transition-colors ${
                activeTab === 'proker'
                  ? 'text-primary border-primary'
                  : 'text-secondary border-transparent hover:text-on-surface'
              }`}
            >
              Program Kerja
            </button>
          </div>

          {/* Tab Content: Informasi */}
          {activeTab === 'info' && (
            <div className="p-6 space-y-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Nama Departemen"
                  id="dept-name"
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  required
                />
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-label-sm font-bold text-on-surface uppercase tracking-wider">
                    Bidang / Rumpun
                  </label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary-container"
                      defaultValue="PSDM"
                    >
                      <option value="PSDM">Pengembangan Sumber Daya Mahasiswa</option>
                      <option value="KOMINFO">Komunikasi dan Informasi</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>

              <TextArea
                label="Deskripsi"
                id="dept-desc"
                rows={3}
                defaultValue="Bertanggung jawab atas regenerasi, pembinaan, dan pengembangan karakter mahasiswa agar sesuai dengan nilai-nilai dasar organisasi."
              />

              <hr className="border-outline-variant/20" />

              {/* Tupoksi Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">Tugas Pokok &amp; Fungsi (Tupoksi)</h4>
                    <p className="text-xs text-secondary mt-0.5">Daftar tanggung jawab utama departemen.</p>
                  </div>
                </div>

                {/* Add Tupoksi Bar */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Tambah tupoksi baru..."
                    value={newTupoksi}
                    onChange={(e) => setNewTupoksi(e.target.value)}
                    className="flex-1 bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary-container"
                  />
                  <Button type="button" icon="add" onClick={handleAddTupoksi}>
                    Tambah
                  </Button>
                </div>

                {/* Tupoksi List */}
                <div className="flex flex-col gap-1 border border-outline-variant/20 rounded-lg bg-surface/10 overflow-hidden">
                  {tupoksiList.map((tup, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white border-b border-outline-variant/20 last:border-b-0 group">
                      <span className="material-symbols-outlined text-secondary cursor-grab hover:text-on-surface">
                        drag_indicator
                      </span>
                      <span className="flex-1 text-sm text-on-surface">{tup}</span>
                      <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          type="button"
                          onClick={() => handleDeleteTupoksi(idx)}
                          className="p-1 text-secondary hover:text-error rounded hover:bg-error-container/30 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'proker' && (
            <div className="p-6 text-center py-12 text-secondary flex-1">
              <span className="material-symbols-outlined text-4xl text-surface-variant mb-2">list_alt</span>
              <p className="text-sm">Program Kerja sedang dikonfigurasi.</p>
            </div>
          )}

          {/* Sticky Footer */}
          <div className="p-4 border-t border-outline-variant/20 bg-surface-container-low/40 flex justify-end gap-3">
            <Button type="button" variant="secondary">
              Batal
            </Button>
            <Button type="submit">
              Simpan Perubahan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
