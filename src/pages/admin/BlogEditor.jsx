import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import TextArea from '../../components/ui/TextArea';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

export default function BlogEditor() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: 'Pendahuluan artikel dimulai di sini. Desain sistem ini mengutamakan ruang putih dan kejelasan.',
    excerpt: '',
    status: true, // true = published, false = draft
    dateTime: '2023-10-27T10:00',
    category: 'kegiatan',
    slug: 'judul-artikel-baru'
  });

  const handleChange = (e) => {
    const { id, name, value, type, checked } = e.target;
    const fieldName = id || name;
    setFormData(prev => ({
      ...prev,
      [fieldName]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveDraft = () => {
    alert('Draft berhasil disimpan!');
    navigate('/admin/blog');
  };

  const handlePublish = (e) => {
    e.preventDefault();
    alert('Artikel berhasil dipublikasikan!');
    navigate('/admin/blog');
  };

  return (
    <form onSubmit={handlePublish} className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-outline-variant/30">
        <div>
          <nav className="flex text-xs text-secondary mb-2">
            <span className="hover:text-on-surface cursor-pointer" onClick={() => navigate('/admin/blog')}>Blog</span>
            <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
            <span className="text-on-surface font-semibold">Buat Artikel</span>
          </nav>
          <h2 className="text-2xl font-bold text-on-surface">Buat Artikel Baru</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            type="button" 
            variant="secondary" 
            onClick={handleSaveDraft}
          >
            Simpan Draft
          </Button>
          <Button 
            type="submit" 
            icon="publish"
          >
            Publikasikan
          </Button>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (70%) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Main Editor Card */}
          <Card variant="flat" hoverEffect={false} className="flex flex-col !p-0">
            {/* Title Input */}
            <div className="px-6 py-4 border-b border-outline-variant/20">
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="Masukkan Judul Artikel..."
                className="w-full text-2xl font-bold text-on-surface placeholder:text-secondary-fixed-dim border-none focus:ring-0 p-0 bg-transparent outline-none"
              />
            </div>
            
            {/* Rich Text Toolbar */}
            <div className="bg-surface-container-low px-6 py-2.5 flex flex-wrap items-center gap-2 border-b border-outline-variant/20">
              {['format_bold', 'format_italic', 'format_underlined'].map((icon) => (
                <button key={icon} type="button" className="p-1.5 rounded hover:bg-surface-container-high text-secondary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </button>
              ))}
              <div className="w-px h-6 bg-outline-variant/30 mx-1" />
              <button type="button" className="px-2 py-1 rounded hover:bg-surface-container-high text-secondary font-bold text-xs">H2</button>
              <button type="button" className="px-2 py-1 rounded hover:bg-surface-container-high text-secondary font-bold text-xs">H3</button>
              <div className="w-px h-6 bg-outline-variant/30 mx-1" />
              {['format_list_bulleted', 'format_list_numbered', 'format_quote', 'link', 'image'].map((icon) => (
                <button key={icon} type="button" className="p-1.5 rounded hover:bg-surface-container-high text-secondary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="p-6 min-h-[400px] bg-white rounded-b-xl">
              <textarea
                id="content"
                name="content"
                required
                value={formData.content}
                onChange={handleChange}
                placeholder="Mulai menulis konten artikel di sini..."
                className="w-full h-full min-h-[380px] border-none focus:ring-0 p-0 text-secondary bg-transparent outline-none resize-none leading-relaxed text-base"
              />
            </div>
          </Card>

          {/* Excerpt Card */}
          <Card variant="flat" hoverEffect={false}>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">Kutipan Singkat (Excerpt)</h3>
              <span className="text-xs text-secondary">{formData.excerpt.length} / 160 Karakter</span>
            </div>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Tuliskan ringkasan singkat artikel yang akan muncul di halaman daftar blog..."
              rows={3}
              maxLength={160}
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-3 text-sm focus:outline-none focus:border-primary-container transition-colors resize-none text-on-surface"
            />
          </Card>
        </div>

        {/* Right Column (30%) Stack */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Pengaturan Publikasi */}
          <Card variant="flat" hoverEffect={false}>
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/20">
              Pengaturan Publikasi
            </h3>
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-on-surface">Status</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="status"
                  name="status"
                  checked={formData.status}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-focus:ring-2 peer-focus:ring-primary-container/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container" />
                <span className="ml-3 text-xs font-bold text-secondary uppercase">
                  {formData.status ? 'Published' : 'Draft'}
                </span>
              </label>
            </div>

            <div>
              <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-2">Tanggal &amp; Waktu</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                  calendar_today
                </span>
                <input
                  type="datetime-local"
                  id="dateTime"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-lg text-sm text-secondary focus:outline-none focus:border-primary-container"
                />
              </div>
            </div>
          </Card>

          {/* Kategori */}
          <Card variant="flat" hoverEffect={false}>
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/20">
              Kategori
            </h3>
            <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-2">Pilih Kategori Utama</label>
            <div className="relative">
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-lg text-sm text-on-surface focus:outline-none focus:border-primary-container appearance-none cursor-pointer"
              >
                <option value="">Pilih...</option>
                <option value="berita">Berita</option>
                <option value="pengumuman">Pengumuman</option>
                <option value="kegiatan">Kegiatan</option>
                <option value="prestasi">Prestasi</option>
                <option value="lainnya">Lainnya</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">
                arrow_drop_down
              </span>
            </div>
          </Card>

          {/* Thumbnail */}
          <Card variant="flat" hoverEffect={false}>
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/20">
              Gambar Thumbnail
            </h3>
            <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container-low transition-colors duration-200 bg-surface-container-low/50 group">
              <div className="w-12 h-12 rounded-full bg-[#cc0000]/10 text-primary-container flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                <span className="material-symbols-outlined text-2xl">cloud_upload</span>
              </div>
              <p className="text-xs font-bold text-on-surface mb-1">Klik atau seret gambar ke sini</p>
              <p className="text-[10px] text-secondary">PNG, JPG or WEBP (Max. 2MB)</p>
            </div>
          </Card>

          {/* Slug URL */}
          <Card variant="flat" hoverEffect={false}>
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant/20">
              Slug URL
            </h3>
            <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-2">Alamat Permalink</label>
            <div className="flex items-stretch rounded-lg shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-outline-variant/30 bg-surface-container-low text-secondary text-xs">
                himatif.org/blog/
              </span>
              <div className="relative flex-1">
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="slug-artikel"
                  className="block w-full min-w-0 rounded-none rounded-r-md border border-outline-variant/30 px-3 py-2 text-sm focus:outline-none focus:border-primary-container bg-surface-container-low"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </form>
  );
}
