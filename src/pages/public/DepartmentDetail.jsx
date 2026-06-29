import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

export default function DepartmentDetail() {
  const { id } = useParams();

  const departmentsData = {
    psdm: {
      name: 'Pengembangan Sumber Daya Mahasiswa',
      abbreviation: 'PSDM',
      type: 'Internal',
      description: 'Departemen PSDM memiliki fokus utama dalam meningkatkan kapasitas, karakter, soft skill, dan membangun solidaritas internal di kalangan pengurus serta seluruh anggota HIMATIF.',
      tupoksi: [
        'Merancang dan melaksanakan program kaderisasi mahasiswa baru Teknik Informatika.',
        'Mengadakan pelatihan kepemimpinan, komunikasi, dan soft skill secara berkala.',
        'Melakukan monitoring dan evaluasi kinerja pengurus organisasi.',
        'Membangun iklim kekeluargaan yang harmonis dan erat melalui kegiatan bonding internal.',
      ],
      leads: [
        { name: 'Saha we ah kepo', role: 'Kepala Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEN02FS8akwmXj0Dr7035KMSE56XA8SrIvUsm0gQpH5KfDCmorBvhmLcwHG25JCMyt3tyIyEwN_X02jEOpjG1PJmvhhz_LmFVdQXBCDHbJj2-BHJYlPPR_DzKdMX8o2o5ulviWF0KEYPDQIVp-U8pTrse_Qx6dxfcNuoocoMTaZzPoMUH3AWr9T18ncn0Lb61ZT5kzISff3gysuz--Tpq3Az7fS3aLjPKO9Mp9QqqtX6lZy6-W7Q6ptTzm_6m7y_AvAkvvQyJGf5o' },
        { name: 'Saha we ah kepo', role: 'Sekretaris Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM1-412g5-fQlWKqzTGwaq0xBjz1cK6WNalAu_4FJLRVV00mHCdw9ds1Qgqfex2zUSDk4BK6EAHt7IYMQXs4aO1twU05nDWXMKJzos9wAKgTL6DevkFqRTOZf2BADrSSvkIS4A4eWjziuKAzx1PZ1mBsopEA5NeXk0FG_o1wk1a9ovvSalrHKqU3yblP2lUmOuARUlMdIVYYEAD_v1b8vuZJhq4tnPWPqvXZYlCUmO70E-vV-LbkvrKZvMvEHNECJ2T6jpscLS01k' }
      ],
      proker: [
        { title: 'Latihan Kepemimpinan Mahasiswa', status: 'upcoming', desc: 'Pelatihan dasar kepemimpinan dan manajemen organisasi bagi mahasiswa tingkat awal.', date: 'Nov 2024', icon: 'groups' },
        { title: 'HIMATIF Gathering', status: 'completed', desc: 'Acara kumpul akrab dan rekreasi internal untuk memperkuat kekeluargaan.', date: 'Mei 2024', icon: 'celebration' }
      ]
    },
    kominfo: {
      name: 'Komunikasi & Informasi',
      abbreviation: 'KOMINFO',
      type: 'Inti',
      description: 'Departemen Komunikasi dan Informasi bertanggung jawab dalam mengelola citra digital, penyebaran informasi, dan membangun branding HIMATIF yang profesional dan inovatif.',
      tupoksi: [
        'Mengelola seluruh platform media sosial dan kanal komunikasi resmi HIMATIF.',
        'Memproduksi konten kreatif berkualitas tinggi mulai dari desain grafis hingga multimedia.',
        'Menyebarkan informasi terkini seputar kegiatan organisasi dan berita teknologi kepada anggota.',
        'Membangun dan menjaga identitas visual serta branding HIMATIF agar tetap konsisten.',
      ],
      leads: [
        { name: 'Saha we ah kepo', role: 'Kepala Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEN02FS8akwmXj0Dr7035KMSE56XA8SrIvUsm0gQpH5KfDCmorBvhmLcwHG25JCMyt3tyIyEwN_X02jEOpjG1PJmvhhz_LmFVdQXBCDHbJj2-BHJYlPPR_DzKdMX8o2o5ulviWF0KEYPDQIVp-U8pTrse_Qx6dxfcNuoocoMTaZzPoMUH3AWr9T18ncn0Lb61ZT5kzISff3gysuz--Tpq3Az7fS3aLjPKO9Mp9QqqtX6lZy6-W7Q6ptTzm_6m7y_AvAkvvQyJGf5o' },
        { name: 'Saha we ah kepo', role: 'Sekretaris Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM1-412g5-fQlWKqzTGwaq0xBjz1cK6WNalAu_4FJLRVV00mHCdw9ds1Qgqfex2zUSDk4BK6EAHt7IYMQXs4aO1twU05nDWXMKJzos9wAKgTL6DevkFqRTOZf2BADrSSvkIS4A4eWjziuKAzx1PZ1mBsopEA5NeXk0FG_o1wk1a9ovvSalrHKqU3yblP2lUmOuARUlMdIVYYEAD_v1b8vuZJhq4tnPWPqvXZYlCUmO70E-vV-LbkvrKZvMvEHNECJ2T6jpscLS01k' }
      ],
      proker: [
        { title: 'HIMATIF Media Hub', status: 'active', desc: 'Pusat produksi konten harian untuk Instagram, TikTok, dan Website.', date: 'Rutin Mingguan', icon: 'campaign' },
        { title: 'Creative Workshop', status: 'upcoming', desc: 'Pelatihan desain grafis dan editing video bagi anggota departemen dan umum.', date: 'Okt 2024', icon: 'draw' },
        { title: 'Podcast HIMATIF', status: 'completed', desc: 'Obrolan santai seputar dunia IT dan kehidupan kampus bersama narasumber inspiratif.', date: 'Mar 2024', icon: 'mic' }
      ]
    },
    ristek: {
      name: 'Riset & Teknologi',
      abbreviation: 'RISTEK',
      type: 'Akademik',
      description: 'Departemen RISTEK bertugas untuk mewadahi minat dan bakat mahasiswa di bidang teknologi informasi, keilmuan, riset, serta pengembangan produk-produk digital.',
      tupoksi: [
        'Mengembangkan website resmi dan aplikasi internal HIMATIF.',
        'Mengadakan bootcamp coding, workshop teknologi, dan sharing session akademik.',
        'Memfasilitasi mahasiswa dalam persiapan kompetisi IT tingkat regional maupun nasional.',
        'Melakukan riset teknologi terbaru dan menyajikan materi edukasi bagi mahasiswa.',
      ],
      leads: [
        { name: 'Saha we ah kepo', role: 'Kepala Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEN02FS8akwmXj0Dr7035KMSE56XA8SrIvUsm0gQpH5KfDCmorBvhmLcwHG25JCMyt3tyIyEwN_X02jEOpjG1PJmvhhz_LmFVdQXBCDHbJj2-BHJYlPPR_DzKdMX8o2o5ulviWF0KEYPDQIVp-U8pTrse_Qx6dxfcNuoocoMTaZzPoMUH3AWr9T18ncn0Lb61ZT5kzISff3gysuz--Tpq3Az7fS3aLjPKO9Mp9QqqtX6lZy6-W7Q6ptTzm_6m7y_AvAkvvQyJGf5o' },
        { name: 'Saha we ah kepo', role: 'Sekretaris Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM1-412g5-fQlWKqzTGwaq0xBjz1cK6WNalAu_4FJLRVV00mHCdw9ds1Qgqfex2zUSDk4BK6EAHt7IYMQXs4aO1twU05nDWXMKJzos9wAKgTL6DevkFqRTOZf2BADrSSvkIS4A4eWjziuKAzx1PZ1mBsopEA5NeXk0FG_o1wk1a9ovvSalrHKqU3yblP2lUmOuARUlMdIVYYEAD_v1b8vuZJhq4tnPWPqvXZYlCUmO70E-vV-LbkvrKZvMvEHNECJ2T6jpscLS01k' }
      ],
      proker: [
        { title: 'Informatics Study Club', status: 'active', desc: 'Kelas belajar mingguan membahas algoritma, web dev, dan database.', date: 'Rutin Mingguan', icon: 'terminal' },
        { title: 'IT Expo & Hackathon', status: 'upcoming', desc: 'Pameran karya mahasiswa dan lomba pemrograman intensif 24 jam.', date: 'Jan 2025', icon: 'code' },
        { title: 'Slicing Project', status: 'completed', desc: 'Proyek kolaboratif untuk slicing desain ke kode program nyata.', date: 'Jun 2024', icon: 'integration_instructions' }
      ]
    },
    kesma: {
      name: 'Kesejahteraan Mahasiswa',
      abbreviation: 'KESMA',
      type: 'Advokasi',
      description: 'Departemen KESMA bertanggung jawab sebagai jembatan advokasi aspirasi mahasiswa dengan pihak birokrasi kampus serta mengawal kesejahteraan mahasiswa.',
      tupoksi: [
        'Menampung dan menyalurkan aspirasi serta keluhan mahasiswa Teknik Informatika.',
        'Mengadakan forum dengar pendapat (hearing) antara mahasiswa dengan pihak program studi.',
        'Membantu penyebaran informasi beasiswa dan bantuan akademik lainnya.',
        'Mengawal isu-isu pembiayaan kuliah dan fasilitas akademik.',
      ],
      leads: [
        { name: 'Saha we ah kepo', role: 'Kepala Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEN02FS8akwmXj0Dr7035KMSE56XA8SrIvUsm0gQpH5KfDCmorBvhmLcwHG25JCMyt3tyIyEwN_X02jEOpjG1PJmvhhz_LmFVdQXBCDHbJj2-BHJYlPPR_DzKdMX8o2o5ulviWF0KEYPDQIVp-U8pTrse_Qx6dxfcNuoocoMTaZzPoMUH3AWr9T18ncn0Lb61ZT5kzISff3gysuz--Tpq3Az7fS3aLjPKO9Mp9QqqtX6lZy6-W7Q6ptTzm_6m7y_AvAkvvQyJGf5o' },
        { name: 'Saha we ah kepo', role: 'Sekretaris Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM1-412g5-fQlWKqzTGwaq0xBjz1cK6WNalAu_4FJLRVV00mHCdw9ds1Qgqfex2zUSDk4BK6EAHt7IYMQXs4aO1twU05nDWXMKJzos9wAKgTL6DevkFqRTOZf2BADrSSvkIS4A4eWjziuKAzx1PZ1mBsopEA5NeXk0FG_o1wk1a9ovvSalrHKqU3yblP2lUmOuARUlMdIVYYEAD_v1b8vuZJhq4tnPWPqvXZYlCUmO70E-vV-LbkvrKZvMvEHNECJ2T6jpscLS01k' }
      ],
      proker: [
        { title: 'Kotak Aspirasi Online', status: 'active', desc: 'Platform pengaduan dan saran bagi mahasiswa untuk prodi.', date: 'Setiap Hari', icon: 'campaign' },
        { title: 'Sarasehan Prodi', status: 'upcoming', desc: 'Rapat dengar pendapat terbuka antara mahasiswa dengan dosen dan ketua prodi.', date: 'Des 2024', icon: 'question_answer' }
      ]
    },
    kewirausahaan: {
      name: 'Kewirausahaan',
      abbreviation: 'KWU',
      type: 'Kewirausahaan',
      description: 'Departemen Kewirausahaan bertugas menumbuhkan jiwa wirausaha di kalangan mahasiswa Teknik Informatika dan mengelola unit bisnis mandiri untuk pendanaan himpunan.',
      tupoksi: [
        'Mengelola toko merchandise resmi HIMATIF Store.',
        'Mengadakan pelatihan bisnis digital, e-commerce, dan seminar kewirausahaan.',
        'Mencari sumber pendanaan kreatif di luar iuran anggota.',
        'Membangun kemitraan bisnis dengan pihak sponsor eksternal.',
      ],
      leads: [
        { name: 'Saha we ah kepo', role: 'Kepala Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEN02FS8akwmXj0Dr7035KMSE56XA8SrIvUsm0gQpH5KfDCmorBvhmLcwHG25JCMyt3tyIyEwN_X02jEOpjG1PJmvhhz_LmFVdQXBCDHbJj2-BHJYlPPR_DzKdMX8o2o5ulviWF0KEYPDQIVp-U8pTrse_Qx6dxfcNuoocoMTaZzPoMUH3AWr9T18ncn0Lb61ZT5kzISff3gysuz--Tpq3Az7fS3aLjPKO9Mp9QqqtX6lZy6-W7Q6ptTzm_6m7y_AvAkvvQyJGf5o' },
        { name: 'Saha we ah kepo', role: 'Sekretaris Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM1-412g5-fQlWKqzTGwaq0xBjz1cK6WNalAu_4FJLRVV00mHCdw9ds1Qgqfex2zUSDk4BK6EAHt7IYMQXs4aO1twU05nDWXMKJzos9wAKgTL6DevkFqRTOZf2BADrSSvkIS4A4eWjziuKAzx1PZ1mBsopEA5NeXk0FG_o1wk1a9ovvSalrHKqU3yblP2lUmOuARUlMdIVYYEAD_v1b8vuZJhq4tnPWPqvXZYlCUmO70E-vV-LbkvrKZvMvEHNECJ2T6jpscLS01k' }
      ],
      proker: [
        { title: 'HIMATIF Store', status: 'active', desc: 'Penjualan kemeja, kaos kaki, sticker, dan atribut resmi mahasiswa IT.', date: 'Setiap Hari', icon: 'storefront' },
        { title: 'KWU Talks', status: 'completed', desc: 'Webinar strategi memulai startup digital untuk mahasiswa.', date: 'Apr 2024', icon: 'lightbulb' }
      ]
    }
  };

  const currentDep = departmentsData[id] || departmentsData.kominfo;

  return (
    <div className="bg-[#F9FAFB] text-[#0A0A0A] min-h-screen pt-12 pb-24">
      <div className="px-6 md:px-16 max-w-7xl mx-auto w-full">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 mb-8 text-secondary text-sm">
          <Link className="hover:text-primary transition-colors" to="/">Beranda</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <Link className="hover:text-primary transition-colors" to="/departemen">Departemen</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-background font-semibold">{currentDep.abbreviation}</span>
        </nav>

        {/* Department Header */}
        <header className="mb-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-4xl md:text-5xl font-extrabold text-custom-dark font-display-xl">
                {currentDep.abbreviation}
              </h1>
              <Badge variant="primary">
                {currentDep.type}
              </Badge>
            </div>
            <h2 className="text-xl font-semibold text-secondary mb-4">{currentDep.name}</h2>
            <p className="text-base text-secondary max-w-3xl leading-relaxed">
              {currentDep.description}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Tupoksi & Staff */}
          <div className="lg:col-span-1 space-y-8">
            {/* Tupoksi Card */}
            <Card variant="flat" hoverEffect={false}>
              <h2 className="text-lg font-bold text-on-background flex items-center gap-2 border-b border-surface-variant pb-4 mb-4">
                <span className="material-symbols-outlined text-primary">task_alt</span>
                Tugas Pokok &amp; Fungsi
              </h2>
              <ul className="space-y-4">
                {currentDep.tupoksi.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary mt-1 text-[18px]">check_circle</span>
                    <span className="text-sm text-on-surface leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Key Personnel Card */}
            <Card variant="flat" hoverEffect={false}>
              <h2 className="text-lg font-bold text-on-background flex items-center gap-2 border-b border-surface-variant pb-4 mb-4">
                <span className="material-symbols-outlined text-primary">groups</span>
                Pengurus Inti
              </h2>
              <div className="space-y-4">
                {currentDep.leads.map((lead, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-2 hover:bg-surface-container-low rounded-lg transition-colors">
                    <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden">
                      <img className="w-full h-full object-cover" src={lead.image} alt={lead.name} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-on-surface">{lead.name}</h4>
                      <p className="text-xs text-secondary mt-0.5">{lead.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Program Kerja */}
          <div className="lg:col-span-2">
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-on-background flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">event_note</span>
                  Program Kerja
                </h2>
              </div>

              {/* Proker Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentDep.proker.map((pro, idx) => (
                  <Card
                    key={idx}
                    variant="flat"
                    className={`flex flex-col ${pro.status === 'completed' && currentDep.proker.length > 2 ? 'md:col-span-2' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      {pro.status === 'active' && (
                        <Badge variant="primary" dot={true}>
                          Berjalan
                        </Badge>
                      )}
                      {pro.status === 'upcoming' && (
                        <Badge variant="warning">
                          Akan Datang
                        </Badge>
                      )}
                      {pro.status === 'completed' && (
                        <Badge variant="success">
                          Selesai
                        </Badge>
                      )}
                      <span className="material-symbols-outlined text-outline-variant hover:text-primary transition-colors cursor-pointer">
                        arrow_outward
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-on-background mb-2 group-hover:text-primary transition-colors">
                      {pro.title}
                    </h3>
                    <p className="text-sm text-secondary mb-6 flex-grow">{pro.desc}</p>
                    
                    <div className="flex items-center gap-2 text-secondary text-xs border-t border-surface-variant pt-4">
                      <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                      <span>{pro.date}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
