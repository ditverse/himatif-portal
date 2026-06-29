import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

export default function DepartmentsList() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('Semua');

  const filters = [
    'Semua',
    'BPH',
    'Komunikasi & Informasi',
    'PSDM',
    'Riset & Teknologi',
  ];

  const departments = [
    {
      id: 'psdm',
      name: 'Pengembangan Sumber Daya Mahasiswa',
      subtitle: 'Fokus pada peningkatan kapasitas, soft skill, dan solidaritas internal pengurus serta anggota HIMATIF.',
      category: 'PSDM',
      type: 'Internal',
      icon: 'psychology',
    },
    {
      id: 'kominfo',
      name: 'Komunikasi & Informasi',
      subtitle: 'Mengelola citra organisasi, publikasi informasi, dan menjalin relasi dengan pihak eksternal kampus.',
      category: 'Komunikasi & Informasi',
      type: 'Eksternal',
      icon: 'campaign',
    },
    {
      id: 'ristek',
      name: 'Riset & Teknologi',
      subtitle: 'Mewadahi minat dan bakat mahasiswa di bidang teknologi informasi, keilmuan, dan pengembangan produk.',
      category: 'Riset & Teknologi',
      type: 'Akademik',
      icon: 'terminal',
    },
    {
      id: 'kesma',
      name: 'Kesejahteraan Mahasiswa',
      subtitle: 'Menjembatani aspirasi mahasiswa dengan pihak jurusan dan fakultas, serta mengawal isu-isu kesejahteraan.',
      category: 'BPH',
      type: 'Advokasi',
      icon: 'volunteer_activism',
    },
    {
      id: 'kewirausahaan',
      name: 'Kewirausahaan',
      subtitle: 'Mengembangkan jiwa wirausaha mahasiswa melalui program pelatihan, pendanaan, dan pengelolaan unit usaha himpunan.',
      category: 'BPH',
      type: 'Kewirausahaan',
      icon: 'storefront',
    },
  ];

  const filteredDeps = selectedFilter === 'Semua'
    ? departments
    : departments.filter(dep => dep.category === selectedFilter);

  return (
    <div className="bg-[#F9FAFB] text-[#0A0A0A] min-h-screen pt-12 pb-24">
      <div className="px-6 md:px-16 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-custom-dark mb-4 font-display-xl">
            Departemen
          </h1>
          <p className="text-lg text-secondary max-w-2xl leading-relaxed">
            Jelajahi struktur departemen yang menggerakkan HIMATIF. Setiap departemen memiliki fokus unik untuk mendukung visi dan misi himpunan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold text-xs whitespace-nowrap transition-colors ${
                selectedFilter === filter
                  ? 'bg-primary-container text-white'
                  : 'bg-surface-container-low text-secondary hover:bg-surface-variant'
              }`}
            >
              {filter === 'Semua' ? 'Semua Departemen' : filter}
            </button>
          ))}
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeps.map((dep) => (
            <Card
              key={dep.id}
              variant="flat"
              onClick={() => navigate(`/departemen/${dep.id}`)}
              className="group flex flex-col h-full cursor-pointer relative overflow-hidden"
            >
              {/* Highlight strip on left */}
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-container transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[24px]">
                    {dep.icon}
                  </span>
                </div>
                <Badge variant="primary">
                  {dep.type}
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-on-background mb-2 group-hover:text-primary transition-colors">
                {dep.name}
              </h3>
              <p className="text-sm text-secondary mb-6 flex-grow">{dep.subtitle}</p>
              
              <div className="flex items-center text-primary font-semibold text-xs group-hover:translate-x-1 transition-transform">
                <span>Lihat Program Kerja</span>
                <span className="material-symbols-outlined text-[16px] ml-1">
                  arrow_forward
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
