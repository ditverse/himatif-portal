import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

export default function BlogArchive() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Berita', 'Edukasi', 'Pengumuman', 'Opini'];

  const featuredArticle = {
    id: 1,
    category: 'Edukasi',
    readTime: '5 Min Read',
    title: 'Membangun Ekosistem Open Source di Lingkungan Kampus',
    excerpt: 'Pentingnya kolaborasi dan transparansi dalam pengembangan perangkat lunak modern. Bagaimana mahasiswa dapat berkontribusi dan mengambil manfaat dari proyek open source global, dimulai dari ruang kuliah.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyAT1pi0eQWkkb4L01TACH3_6hSp8dOXegfOy-qDgLb4ko_g449D7S3JzJwL-7CszXJg0Dbjwh6wXNpBwRoXajg4FULDN5sRguLrL86yZNLa5dBFcQ7qm6kqYthOy4LTjietqM0Jg6ItmXvhwTEnBuwawqQm-AlKA6vNEQMN3TN-O9_XPFWHoSEhZrgkLWnBPYHAnLkbsBTM3j_keGozkF65ifFBp8NjYjYv5GZpXVSMzXehDHfH6lphxzrBX60Qgs9CJ5u4QFHEc',
  };

  const articles = [
    {
      id: 1,
      category: 'Edukasi',
      date: '12 Oktober 2024',
      readTime: '5 Min Read',
      title: 'Membangun Ekosistem Open Source di Lingkungan Kampus',
      excerpt: 'Pentingnya kolaborasi dan transparansi dalam pengembangan perangkat lunak modern.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyAT1pi0eQWkkb4L01TACH3_6hSp8dOXegfOy-qDgLb4ko_g449D7S3JzJwL-7CszXJg0Dbjwh6wXNpBwRoXajg4FULDN5sRguLrL86yZNLa5dBFcQ7qm6kqYthOy4LTjietqM0Jg6ItmXvhwTEnBuwawqQm-AlKA6vNEQMN3TN-O9_XPFWHoSEhZrgkLWnBPYHAnLkbsBTM3j_keGozkF65ifFBp8NjYjYv5GZpXVSMzXehDHfH6lphxzrBX60Qgs9CJ5u4QFHEc'
    },
    {
      id: 2,
      category: 'Berita',
      date: '12 Oktober 2024',
      readTime: '4 Min Read',
      title: 'Menghadapi Era AI: Adaptasi Kurikulum Teknik Informatika',
      excerpt: 'Tinjauan mendalam mengenai penyesuaian materi perkuliahan untuk mengintegrasikan kecerdasan buatan dalam praktik pengembangan software.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLW93wlF0N1PGC19BdNDZeG64MY55rn2Mo5ITw7avNmC3FoG9Rsa9y4T81-mSin3MEtW0Ar0MDaPYAVfjDaePPMcBX-2hAzAAVopFDO_JHY9GLJUB8ACDcxIU0vAVDF9M2Wsbezg4ZeIZZ-3Eis1aVSfbfznx4vApkRtvWAlP6ryB7MEPmqoCmXnlCFQNNjDK-jTM1q1WXfhGlxg5rmaVYovHtClHD8onOdejhOZNhFmaY0YE0hL0492m4SUbe2a5Wzx3fsFxv-DQ'
    },
    {
      id: 3,
      category: 'Opini',
      date: '08 Oktober 2024',
      readTime: '6 Min Read',
      title: 'Mengapa Etika Data Semakin Krusial Bagi Developer',
      excerpt: 'Diskusi mengenai tanggung jawab moral pengembang dalam mengelola data privasi pengguna di tengah pesatnya teknologi pengumpulan data.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjWO7fdkt7z9XATZFS7IuC1FcTnxkXMBA4bFmYs_P52qXsrK5W-CuwmnBcKatlRrNSv46ZG6waKQLLSTuPBR2vaB5Et7gSf6p34iEEkJ0DML5MgszCcx8lmHEdvEbeX7hXyuWjwIrr8ZjdRqLA9PinZYC0l66Pohsrw1Q26jrimhJUN0TlikvOm_f98JYYBYG42MBPnMwW0gnwM9FiUcLxKtAGx9zPDAddz35VElGxRwnVAYP1Tt6YK6fjlF4L6pu4RQ8edX2VzdQ'
    },
    {
      id: 4,
      category: 'Pengumuman',
      date: '01 Oktober 2024',
      readTime: '2 Min Read',
      title: 'Pendaftaran Hackathon HIMATIF 2024 Resmi Dibuka',
      excerpt: 'Kesempatan bagi seluruh mahasiswa untuk menunjukkan inovasi terbaiknya dalam kompetisi coding tahunan terbesar di fakultas.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbW9M2ZyxaksttpdqOq2xMBnqCsrSoY0MhfK95flDp21fqXsEibCMCISo2U_i7bTmmiqr1adMYxnpUP8QHfoDjdIdR7m0oSs9lM6GcfYndbLrI1KBd7DunZBV9Y-iA5LE3rfeA9XuL5KWwq9Snyf-XFgMG_jpQ3kg9G8Bk0tdfwon97bFMMLNKEB_tamC70AsmLCoFTgU8tBYHv1gBUlCXk18QsmzSMUbKz_DQftqJnfKEFPebZK0EPUTJmOH-7s4MFuprrJJTlWA'
    }
  ];

  const filteredArticles = selectedCategory === 'Semua'
    ? articles
    : articles.filter(art => art.category === selectedCategory);

  return (
    <div className="bg-white text-on-surface min-h-screen pt-12 pb-24">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-16 pt-12 pb-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A0A0A] mb-4 font-display-xl">Wawasan Terkini</h1>
          <div className="w-16 h-1 bg-primary mb-6"></div>
          <p className="text-lg text-secondary leading-relaxed">
            Menjelajahi ide, berbagi pengetahuan, dan mengungkap wawasan teknologi terbaru dari komunitas Informatika.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-16 py-8 border-b border-surface-variant mb-12">
        <div className="flex overflow-x-auto space-x-8 pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-semibold text-sm whitespace-nowrap pb-2 border-b-2 transition-all duration-200 ${
                selectedCategory === cat
                  ? 'text-primary border-primary font-bold'
                  : 'text-on-surface-variant border-transparent hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article (Render only when 'Semua' or matching category is active) */}
      {selectedCategory === 'Semua' && (
        <section className="w-full max-w-7xl mx-auto px-6 md:px-16 mb-12">
          <article 
            onClick={() => navigate(`/blog/${featuredArticle.id}`)}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 bg-surface-container-lowest rounded-lg overflow-hidden border border-surface-variant/30 hover:shadow-[0_8px_24px_rgba(17,24,39,0.08)] transition-shadow duration-300"
          >
            <div className="lg:col-span-8 overflow-hidden aspect-[21/9] lg:aspect-auto h-full min-h-[300px]">
              <img 
                className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-in-out" 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
              />
            </div>
            <div className="lg:col-span-4 p-8 flex flex-col justify-center bg-surface border-t lg:border-t-0 lg:border-l border-surface-variant/30">
              <div className="flex items-center space-x-3 mb-4">
                <Badge variant="primary">
                  {featuredArticle.category}
                </Badge>
                <span className="text-secondary text-xs">{featuredArticle.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#0A0A0A] mb-4 group-hover:text-primary transition-colors leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-sm text-secondary mb-6 line-clamp-3 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center text-primary font-semibold text-sm mt-auto group-hover:translate-x-1 transition-transform">
                <span>Baca Selengkapnya</span>
                <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Article Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-16 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <article 
              key={art.id}
              onClick={() => navigate(`/blog/${art.id}`)}
              className="flex flex-col bg-surface-container-lowest rounded-lg border border-surface-variant overflow-hidden group hover:shadow-[0_8px_24px_rgba(17,24,39,0.08)] transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  src={art.image} 
                  alt={art.title}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                  <Badge variant="primary">{art.category}</Badge>
                </div>
                <h3 className="text-base font-bold text-[#0A0A0A] mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-sm text-secondary mb-4 line-clamp-2 flex-grow leading-relaxed">
                  {art.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-variant/30 text-xs text-secondary">
                  <span>{art.date}</span>
                  <span>{art.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-16 flex justify-center">
        <Button variant="secondary" iconRight="expand_more" className="group">
          Muat Lebih Banyak
        </Button>
      </section>
    </div>
  );
}
