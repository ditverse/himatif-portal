import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import TextArea from '../../components/ui/TextArea';
import Button from '../../components/ui/Button';

export default function AspirasiSubmission() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    message: '',
    anonymous: false
  });

  const handleChange = (e) => {
    const { id, name, value, type, checked } = e.target;
    const fieldName = id || name;
    setFormData(prev => ({
      ...prev,
      [fieldName]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category) {
      alert('Silakan pilih kategori aspirasi terlebih dahulu.');
      return;
    }
    alert('Aspirasi Anda berhasil dikirim! Terima kasih atas kontribusi Anda.');
    setFormData({ title: '', category: '', message: '', anonymous: false });
  };

  return (
    <div className="bg-[#F9FAFB] text-[#0A0A0A] min-h-screen pt-12 pb-24 flex items-center justify-center">
      <div className="w-full max-w-3xl px-6 md:px-16 mt-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-custom-dark mb-4 font-display-xl">Suarakan Anda</h1>
          <p className="text-lg text-secondary leading-relaxed">
            Kami mendengarkan. Sampaikan aspirasi, kritik, atau saran Anda untuk HIMATIF yang lebih baik.
          </p>
        </div>

        {/* Form Card */}
        <Card variant="flat" hoverEffect={false} className="p-8 md:p-10 relative overflow-hidden">
          {/* Decorative Top Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary-container" />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <InputField
              label="Judul Aspirasi"
              id="title"
              placeholder="Ringkasan singkat aspirasi Anda"
              required
              value={formData.title}
              onChange={handleChange}
            />

            {/* Category Dropdown */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="category" className="text-label-sm font-bold text-on-surface uppercase tracking-wider">
                Kategori
              </label>
              <div className="relative">
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full appearance-none bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary-container transition-colors"
                >
                  <option value="" disabled>Pilih Kategori...</option>
                  <option value="akademik">Akademik</option>
                  <option value="fasilitas">Fasilitas</option>
                  <option value="kegiatan">Kegiatan Mahasiswa</option>
                  <option value="layanan">Layanan Administratif</option>
                  <option value="lainnya">Lainnya</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">
                  arrow_drop_down
                </span>
              </div>
            </div>

            {/* Message Details */}
            <TextArea
              label="Detail Aspirasi"
              id="message"
              placeholder="Jelaskan aspirasi Anda secara detail..."
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
            />

            {/* Anonymous Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="anonymous"
                name="anonymous"
                checked={formData.anonymous}
                onChange={handleChange}
                className="w-5 h-5 text-primary-container bg-surface-container-low border-outline-variant/30 rounded focus:ring-primary-container/20 focus:ring-2 cursor-pointer"
              />
              <label htmlFor="anonymous" className="ml-3 text-sm text-on-surface cursor-pointer select-none font-semibold">
                Kirim secara anonim
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button type="submit" iconRight="send" className="w-full justify-center">
                Kirim Aspirasi
              </Button>
            </div>
          </form>
        </Card>

        {/* Info Text */}
        <p className="text-center mt-6 text-xs text-secondary tracking-wide">
          Informasi yang Anda berikan akan dikelola dengan aman sesuai dengan kebijakan privasi kami.
        </p>
      </div>
    </div>
  );
}
