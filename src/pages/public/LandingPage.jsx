import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-background text-on-background overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] bg-surface-container-lowest flex items-center relative overflow-hidden min-h-screen">
        {/* Subtle background pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(rgb(0, 0, 0) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            {/* Geometric Accent */}
            <div className="w-20 h-2 bg-primary-container mb-8"></div>
            
            {/* Headline */}
            <h1 className="font-headline-xl text-display-xl text-custom-dark mb-6 leading-tight tracking-tighter">
              Himpunan Mahasiswa Teknik Informatika.
            </h1>
            <p className="font-body-lg text-body-lg text-secondary mb-8 max-w-2xl leading-relaxed">
              Wadah bagi mahasiswa Informatika untuk berkolaborasi, berinovasi, dan mengembangkan potensi diri dalam ekosistem teknologi yang dinamis.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-12">
              <Link 
                to="/cabinet" 
                className="px-8 py-4 bg-primary-container text-white font-label-md text-label-md rounded shadow-lg hover:scale-105 transition-all duration-300"
              >
                &nbsp;Kenali Kabinet
              </Link>
              <Link 
                to="/blog" 
                className="px-8 py-4 border-2 border-custom-dark text-custom-dark font-label-md text-label-md rounded hover:bg-custom-dark hover:text-white transition-all duration-300"
              >
                Baca Artikel
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-32 left-0 w-full px-margin-mobile md:px-margin-desktop">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-wrap border-t border-surface-container-high pt-8 gap-20 md:gap-24">
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-custom-dark">500+</span>
                <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider">Anggota Aktif</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-custom-dark">8</span>
                <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider">Departemen Strategis</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-custom-dark">20+</span>
                <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider">Program Kerja Tahunan</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Scroll</span>
          <span className="material-symbols-outlined text-secondary">expand_more</span>
        </div>
      </section>

      {/* Identity Strip */}
      <section className="bg-surface border-y border-surface-container-high py-16">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-surface-container-highest">
            <div className="pt-8 md:pt-0 md:pr-8">
              <div className="inline-block px-3 py-1 bg-surface-container-high text-primary-container font-label-sm text-label-sm uppercase rounded-full mb-4">Visi</div>
              <h3 className="font-headline-md text-headline-md text-custom-dark mb-3">Menjadi Pusat Unggulan</h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">Menjadikan HIMATIF sebagai organisasi yang progresif dan adaptif dalam pengembangan keilmuan teknologi informasi di era digital.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-8">
              <div className="inline-block px-3 py-1 bg-surface-container-high text-primary-container font-label-sm text-label-sm uppercase rounded-full mb-4">Misi</div>
              <h3 className="font-headline-md text-headline-md text-custom-dark mb-3">Sinergi Berkelanjutan</h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">Membangun budaya kolaborasi antarmahasiswa dan menyediakan platform pengembangan skill hardskill maupun softskill secara konsisten.</p>
            </div>
            <div className="pt-8 md:pt-0 md:pl-8">
              <div className="inline-block px-3 py-1 bg-surface-container-high text-primary-container font-label-sm text-label-sm uppercase rounded-full mb-4">Nilai</div>
              <h3 className="font-headline-md text-headline-md text-custom-dark mb-3">Integritas &amp; Inovasi</h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">Menjunjung tinggi profesionalisme, kejujuran akademik, dan keberanian untuk menghadirkan solusi teknologi yang bermanfaat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Highlight Section */}
      <section className="py-section-lg bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">Kabinet Aktif</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-custom-dark mb-4">Pengurus Inti<br />Periode 2026/2027</h2>
              <p className="font-body-lg text-body-lg text-secondary">Tim dedikatif yang menggerakkan roda organisasi dengan presisi dan visi yang jelas.</p>
            </div>
            <Link to="/cabinet" className="inline-flex items-center space-x-2 text-custom-dark font-label-md text-label-md hover:text-primary-container transition-colors group">
              <span>Lihat Seluruh Struktur</span>
              <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          
          {/* Bento Grid Style for Cabinet */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Chairman Card (Large) */}
            <div className="md:col-span-5 bg-surface-container-lowest border border-surface-container-highest p-8 rounded-lg hover-lift hover:border-t-4 hover:border-t-primary-container relative overflow-hidden group">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="font-headline-md text-headline-md text-custom-dark">Ketua Himpunan</h3>
                  <p className="font-body-md text-body-md text-secondary mt-1">Leading the vision.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">person</span>
                </div>
              </div>
              <div className="w-full h-64 bg-surface-container mb-6 rounded-md overflow-hidden">
                <img 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                  data-alt="Ketua Himpunan" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb5ZcV5LyD4ZVTVaQEWCKmm_weOfledh1cwcNk6EPDmpzaX3TxNvVKbdESsPWzNNQ3R0pIA46p0aqV0LCKvGKDH1yBnfMHXzoSLLbe3laqWnURGb7nNyJfERLYv1llyAOj7wKdo8tpISs51b8D4iqzxWVXKW4GvoDPEOLgqctxBn2bif2SibL5blGdWUs_Kne4H7dVJj6Cjqo2MkSzNykt-75OPE_7EeKqA6glM6TjUD-P2ddQaKJ8HpiDqwepBCP4l6GWQzwhNjQ"
                  alt="Ketua Himpunan"
                />
              </div>
              <div className="font-headline-md text-headline-md text-custom-dark">Saha we ah kepo</div>
              <div className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider mt-2">Informatika '24</div>
            </div>

            {/* Right Column Grid */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
              {/* Vice Chair */}
              <div className="bg-surface-container-lowest border border-surface-container-highest p-6 rounded-lg hover-lift hover:border-t-4 hover:border-t-primary-container flex flex-col justify-between group">
                <div>
                  <h4 className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-4">Wakil Ketua</h4>
                  <div className="w-full h-40 bg-surface-container mb-4 rounded-md overflow-hidden">
                    <img 
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                      data-alt="Wakil Ketua" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp5Vdgcz-Rrl7J-9CrVOideRyDEu5r5Mgcd8neRja0ZHTpv2lQ_5RGVmUh-p8VgwDrw4XujWRCWQO1O5JvbQSItSXLeD21cA9lc6JSSTajRGJi6ifToVh5wS04DvJInMMFZSRBS_kHixbmWX3gLI-GNi3CpycMA5mJ5UqAUouHW9pkwC7nBGqw6UZwXIPKreN6_ke5Xee7Gyp42eziauukIi3e9WjeYhF7bFAap3b12o6g9GHI-6IP8g8vAPk9f9VYIfWiwg91HDw"
                      alt="Wakil Ketua"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md text-custom-dark">Saha we ah kepo</div>
                  <div className="font-label-sm text-label-sm text-secondary mt-1">Informatika '24</div>
                </div>
              </div>

              {/* Secretary */}
              <div className="bg-surface-container-lowest border border-surface-container-highest p-6 rounded-lg hover-lift hover:border-t-4 hover:border-t-primary-container flex flex-col justify-between group">
                <div>
                  <h4 className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-4">Sekretaris UMUM</h4>
                  <div className="w-full h-40 bg-surface-container mb-4 rounded-md overflow-hidden">
                    <img 
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                      data-alt="Sekretaris Umum" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ2CUskXwiWN7sD1sIm7JDBASXOyAbz97jbNFkaYnARLc3y7j0NKDw_xVuvR6HbbWgAkpQfgBLW-52BI_W2iI_MOpgqBzXfBcsbHg8KPSMB6M1JZLoXe3NXLw49Xme5I0iBX7IhVPc5YEIvcBkE8NfSIms0CQowUXgBi4XVFvoepkkxG2lwoCTAhpRbvX_EFG5ACcTqoNFbL6i9HBncO0IAm9ND9WLtCxO2v7-g7iNC4PNtWWH84UBgcKCaFeJXQ5lssblCIZvLNU"
                      alt="Sekretaris Umum"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md text-custom-dark">Saha we ah kepo</div>
                  <div className="font-label-sm text-label-sm text-secondary mt-1"><span style={{ letterSpacing: '0.36px' }} className="">Informatika '24</span></div>
                </div>
              </div>

              {/* Treasurer */}
              <div className="bg-surface-container-lowest border border-surface-container-highest p-6 rounded-lg hover-lift hover:border-t-4 hover:border-t-primary-container flex flex-col justify-between group">
                <div>
                  <h4 className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-4">Bendahara UMUM</h4>
                  <div className="font-headline-md text-headline-md text-custom-dark mb-2">Saha we ah kepo</div>
                  <div className="font-label-sm text-label-sm text-secondary"><span style={{ letterSpacing: '0.36px' }} className="">Informatika '24</span></div>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="material-symbols-outlined text-surface-container-highest" style={{ fontSize: '48px' }}>account_balance_wallet</span>
                </div>
              </div>

              {/* Stats/Promo Card */}
              <div className="bg-surface-container-lowest border border-surface-container-highest p-6 rounded-lg hover-lift hover:border-t-4 hover:border-t-primary-container flex flex-col justify-center items-center text-center">
                <div className="font-headline-xl text-headline-xl text-custom-dark mb-2">7</div>
                <div className="font-label-md text-label-md text-secondary uppercase tracking-wider">Departemen<br />Aktif</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / History Section */}
      <section className="py-section-lg bg-surface-container-lowest border-t border-surface-container-high">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline-xl text-headline-xl text-custom-dark mb-8 leading-tight">Sejarah &amp; Tentang Himatif ULBI</h2>
              <p className="font-body-lg text-body-lg text-secondary mb-6 leading-relaxed">
                Sejak didirikan, HIMATIF telah menjadi kawah candradimuka bagi mahasiswa IT. Kami percaya bahwa keunggulan teknis harus diimbangi dengan kepemimpinan yang tangguh dan empati sosial.
              </p>
              <p className="font-body-md text-body-md text-secondary mb-10 leading-relaxed">
                Setiap generasi membawa inovasi baru, merespons tantangan zaman dengan solusi nyata. Dari kompetisi nasional hingga pengabdian masyarakat, rekam jejak kami adalah bukti nyata dedikasi tiada henti.
              </p>
              <Link to="/timeline" className="inline-flex items-center space-x-2 text-custom-dark font-label-md text-label-md border-b-2 border-custom-dark pb-1 hover:text-primary-container hover:border-primary-container transition-colors">
                <span className="">Pelajari Sejarah Kami</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>history</span>
              </Link>
            </div>
            <div className="relative pl-0 md:pl-12">
              {/* Stylized Year Background */}
              <div className="absolute -top-20 -left-10 font-headline-xl text-[200px] text-surface-container font-extrabold z-0 select-none hidden md:block">
                2004
              </div>
              <div className="relative z-10 p-4 bg-surface-container-lowest border-l-4 border-l-primary-container shadow-hover">
                <div 
                  className="bg-cover bg-center w-full h-[400px]" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD06d6rgWn0BM_SUEyRQKfTnvQ_2mvgDUn4S2HiDL7-vpyCizvyV6kui6nw3mL3TyYqtcnFJe2tQFA3g3xT4jAv_hssY16JtggRQq5CoXj1Q-SA79UFkR92kWkjMIGXtNZUdMgFpAvHhMZBuqOgEMXYucL4QUXEZWmVFJaFRLTyacQASllx7wOyywkXEVVKGPG6tY1m5nYCXlj9rmzFirzQQnzbRJy3_hG_uTojHAllsZAJHWQI1SUHxVnuBc_gchv1XX_ZtkwWsu4')" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-section-lg bg-surface">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-custom-dark mb-4">Kegiatan Terbaru</h2>
              <p className="font-body-lg text-body-lg text-secondary">Artikel, rilis, dan liputan kegiatan terbaru.</p>
            </div>
            <Link 
              to="/blog" 
              className="px-6 py-2 border border-surface-container-highest text-custom-dark font-label-md text-label-md rounded hover:bg-surface-container-low transition-colors bg-surface-container-lowest"
            >
              Lihat Semua Blog
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Article Card 1 */}
            <article className="bg-surface-container-lowest rounded-lg border border-surface-container-highest overflow-hidden hover-lift flex flex-col h-full group">
              <div className="h-48 bg-surface-container relative overflow-hidden">
                <img 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1wTKiwZb-Xm8LaEZDgmp97GeuVRYwXtFCkZggpu9KHQocp44EXRTV3hMSSqG06cIlIBoWe7ulNYjxqWHA9x-169qFvTJAacnuDOT8kQaXcCEP1kWZUG5hfaRCDZAPUA1IsrW_22xO9ohUVcrpdrsR-w9MdIOwH95HG3bBoPcUk9IAvWPoRRPcw25Jmg2tD7IKHIqRYk4IHxp3tM1F3LYmFddp5YLNRPXDMYYGGIDC02OAt1-rcx72khjFnmI_hXll7-bMlb_Bn1s"
                  alt="Hackathon 2024"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary-container/10 text-primary-container font-label-sm text-label-sm uppercase rounded backdrop-blur-sm bg-white/90">
                  Berita
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="font-label-sm text-label-sm text-secondary mb-3">12 Okt 2024 • 5 min read</div>
                <h3 className="font-headline-md text-headline-md text-custom-dark mb-3 group-hover:text-primary-container transition-colors line-clamp-2">
                  Sukses Penyelenggaraan Hackathon Tahunan HIMATIF 2024
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-6 line-clamp-3 flex-grow">
                  Lebih dari 50 tim berkompetisi selama 48 jam untuk menciptakan solusi teknologi inovatif dalam acara puncak tahun ini.
                </p>
                <Link to="/blog/1" className="font-label-md text-label-md text-custom-dark flex items-center space-x-1 group-hover:text-primary-container">
                  <span>Baca Selengkapnya</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                </Link>
              </div>
            </article>

            {/* Article Card 2 */}
            <article className="bg-surface-container-lowest rounded-lg border border-surface-container-highest overflow-hidden hover-lift flex flex-col h-full group">
              <div className="h-48 bg-surface-container relative overflow-hidden">
                <img 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhfp8kMrmeb6TyZyCHwXXi9FezSUtam08LAXvPTCsPDNhxz1wTSoUUjmGCHFLOOBTsV_GLOeSjCNGEA3AStqLYhkH6At2n1Dn9V6vBYPG35Px9jdwPKcu538LCOpH3yA25ZEnpThfrgofqfJfdjLUJiFeJKylEToy10NtFfXwx3SuvvM45yd17RAXsf8cK4X0G8tU0zTNxNmANp8dPet0ieTpqdzvP3rZ-BDxBmF3mjCSUKsgTrZZGUPkyLuRnCHOuLywXFFjdpd4"
                  alt="UI/UX Roadmap"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-surface-container-highest text-custom-dark font-label-sm text-label-sm uppercase rounded backdrop-blur-sm bg-white/90">
                  Edukasi
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="font-label-sm text-label-sm text-secondary mb-3">08 Okt 2024 • 8 min read</div>
                <h3 className="font-headline-md text-headline-md text-custom-dark mb-3 group-hover:text-primary-container transition-colors line-clamp-2">
                  Panduan Memulai Karir sebagai UI/UX Designer untuk Mahasiswa
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-6 line-clamp-3 flex-grow">
                  Departemen Keilmuan membagikan roadmap komprehensif bagi mahasiswa yang ingin fokus pada desain antarmuka dan pengalaman pengguna.
                </p>
                <Link to="/blog/2" className="font-label-md text-label-md text-custom-dark flex items-center space-x-1 group-hover:text-primary-container">
                  <span>Baca Selengkapnya</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                </Link>
              </div>
            </article>

            {/* Article Card 3 */}
            <article className="bg-surface-container-lowest rounded-lg border border-surface-container-highest overflow-hidden hover-lift flex flex-col h-full group">
              <div className="h-48 bg-surface-container relative overflow-hidden">
                <img 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjnB4btHhPqBmmalQuyoq9hyIMKT0HSOl21yUA9ElgJ4r8UXPa0at20pwg8xx0Je2ahT_Ss5Nj1fw5HhW_t2KU5ynBowmurJ0V6TWxZuspHn3yXW8HRbomCaXikUerXDm_uPH0datsGrVKqLlrcBApaUgvdtFg9RHRFBbLlNsn4_SR_w6asfMTtzX_S5i0B5fJdZvuFciOR7cQyQHFHByHPLwcRsgrToAMiSYWv1_99CfNYcANIUwoUVUwN1XjEeTw6zcpZ2_tP9M"
                  alt="Kepanitiaan IT EXPO"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-surface-container-highest text-custom-dark font-label-sm text-label-sm uppercase rounded backdrop-blur-sm bg-white/90">
                  Pengumuman
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="font-label-sm text-label-sm text-secondary mb-3">01 Okt 2024 • 2 min read</div>
                <h3 className="font-headline-md text-headline-md text-custom-dark mb-3 group-hover:text-primary-container transition-colors line-clamp-2">
                  Open Recruitment Kepanitiaan IT EXPO 2025 Resmi Dibuka
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-6 line-clamp-3 flex-grow">
                  Panggilan bagi seluruh anggota aktif HIMATIF untuk berkontribusi dalam acara pameran teknologi terbesar di kampus.
                </p>
                <Link to="/blog/3" className="font-label-md text-label-md text-custom-dark flex items-center space-x-1 group-hover:text-primary-container">
                  <span>Baca Selengkapnya</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-container py-20 relative overflow-hidden">
        {/* Subtle background pattern for texture */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto text-center relative z-10">
          <h2 className="font-headline-xl text-headline-xl text-white mb-6">Jadilah Bagian dari HIMATIF.</h2>
          <p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto mb-10">
            Mari bersama-sama membangun iklim akademik yang positif, mengembangkan potensi diri, dan memberikan kontribusi nyata bagi departemen dan masyarakat.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-container font-label-md text-label-md rounded shadow-lg hover:bg-surface-container-lowest hover:scale-105 transition-all duration-300"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
