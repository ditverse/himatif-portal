import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import InputField from '../../components/ui/InputField';

export default function BlogManagement() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Panduan Penggunaan Dashboard Admin 2024',
      author: 'Super Admin',
      category: 'Pengumuman',
      status: 'published',
      modified: 'Oct 24, 2024'
    },
    {
      id: 2,
      title: 'Tips Belajar Struktur Data Secara Efektif',
      author: 'Departemen Akademik',
      category: 'Edukasi',
      status: 'draft',
      modified: 'Oct 22, 2024'
    },
    {
      id: 3,
      title: 'Rekapitulasi Kegiatan Buka Bersama 2024',
      author: 'Divisi Humas',
      category: 'Berita',
      status: 'scheduled',
      modified: 'Oct 20, 2024'
    },
    {
      id: 4,
      title: 'Pentingnya Etika Profesi di Bidang IT',
      author: 'Ketua HIMATIF',
      category: 'Opini',
      status: 'published',
      modified: 'Oct 15, 2024'
    }
  ];

  const statusBadges = {
    published: <Badge variant="primary" dot={true}>Published</Badge>,
    draft: <Badge variant="warning" dot={true}>Draft</Badge>,
    scheduled: <Badge variant="success" dot={true}>Scheduled</Badge>
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === '' || post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-on-background">Blog Management</h2>
          <p className="text-sm text-secondary mt-1">Manage your organization's publications, articles, and news.</p>
        </div>
        <Button 
          icon="add" 
          onClick={() => navigate('/admin/blog/edit')}
          className="w-full sm:w-auto"
        >
          Create New Post
        </Button>
      </div>

      {/* Filter & Search Bar */}
      <Card variant="flat" hoverEffect={false} className="flex flex-wrap gap-4 items-center justify-between !p-4">
        <div className="flex flex-wrap items-center gap-4 flex-1 w-full sm:w-auto">
          <div className="max-w-xs w-full">
            <InputField
              id="search"
              icon="search"
              placeholder="Search articles by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="!py-0"
            />
          </div>
          <div className="h-8 w-px bg-outline-variant hidden md:block" />
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-2.5 pl-4 pr-10 bg-surface-container-low border border-outline-variant/30 rounded-lg text-sm text-on-surface focus:outline-none focus:border-primary-container outline-none appearance-none cursor-pointer"
            >
              <option value="">All Categories</option>
              <option value="berita">Berita</option>
              <option value="edukasi">Edukasi</option>
              <option value="pengumuman">Pengumuman</option>
              <option value="opini">Opini</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">
              arrow_drop_down
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <span className="text-sm font-semibold text-secondary">Sort by:</span>
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant/30 rounded-lg hover:bg-surface-container-low transition-colors text-sm font-semibold">
            Date Modified
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </button>
        </div>
      </Card>

      {/* Data Table */}
      <div className="bg-surface-container-lowest rounded-xl border border-surface-variant/30 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/30">
                <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">Title</th>
                <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">Author</th>
                <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider">Last Modified</th>
                <th className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-on-surface divide-y divide-outline-variant/20">
              {filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-secondary">
                    No articles found.
                  </td>
                </tr>
              ) : (
                filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-surface transition-colors group">
                    <td className="px-6 py-4">
                      <p 
                        onClick={() => navigate('/admin/blog/edit')}
                        className="font-bold text-on-background group-hover:text-primary-container transition-colors cursor-pointer"
                      >
                        {post.title}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-secondary">{post.author}</td>
                    <td className="px-6 py-4">
                      <Badge variant="neutral">{post.category}</Badge>
                    </td>
                    <td className="px-6 py-4">{statusBadges[post.status] || post.status}</td>
                    <td className="px-6 py-4 text-secondary">{post.modified}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => navigate('/admin/blog/edit')}
                          className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-high text-secondary hover:text-on-surface transition-colors" 
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button 
                          onClick={() => navigate(`/blog/${post.id}`)}
                          className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-high text-secondary hover:text-on-surface transition-colors" 
                          title="Preview"
                        >
                          <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                        <button 
                          onClick={() => alert(`Hapus artikel: ${post.title}`)}
                          className="w-8 h-8 flex items-center justify-center rounded hover:bg-error-container text-secondary hover:text-error transition-colors" 
                          title="Delete"
                        >
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-outline-variant/30 bg-surface-container-lowest flex items-center justify-between flex-wrap gap-4">
          <span className="text-xs font-semibold text-secondary">
            Showing {filteredPosts.length} of {blogPosts.length} entries
          </span>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant/30 text-secondary hover:bg-surface-container-low transition-colors disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-primary-container text-white font-bold text-xs">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-transparent text-on-surface hover:bg-surface-container-low transition-colors font-bold text-xs">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant/30 text-secondary hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
