import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

export default function BlogDetail() {
  const { id } = useParams();

  const related = [
    {
      category: 'Infrastruktur',
      title: 'Mengenal Arsitektur Serverless',
      desc: 'Bagaimana memangkas biaya operasional dengan pendekatan serverless.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhUoj8JOa4nRaryK36ipNxyOYxRc5AgrenslJ9Y6RfflQB_Oy4_J8ZWFbKN-hfiNXQgLX3e_vaDxXRUirqe-Egj6d0SpoWwr8IImp2-MMfB_nlhe5gB-cuKA60YSZa33qw9uUEjIn-pcNygb-1U7BFs8B3e0vlauO4x_Jj6y4642voM5Ni9VwBSp3OTGTE18lGb983UxQDvzDtvEZkTLQCsgkLHUiEaTMn00JxOm96PCP9NDSC2jwQD_CxBttRCuF49Bf9aIwO0_o'
    },
    {
      category: 'Keamanan',
      title: 'Pentingnya Audit Keamanan Web',
      desc: 'Langkah-langkah esensial untuk mengamankan aplikasi dari serangan umum.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj9MASa_QJYgk-EnEA10YJ_UyUAb85_Iu7fSuxBt3E_DAM9Mc1WS_8U5xsLwDgAqxXVslT570y99ywCkibGSYyYXOToM97Zx45yB_UX0ndN1nh52vOaRvN3ljeQqsODN4PxNWLrT2H0u2anvp-W7irwotdwounXj8l1SUVNmTveFTDb3NSawB9B1VkcHoGe-3o0Hwk2lWIRyvZlK1P783zZB67rfnkXafXIygBQV1rOK3QWtUybv4gmNazjix8izFKUCWbCyLLZyY'
    },
    {
      category: 'UI/UX',
      title: 'Prinsip Aksesibilitas Modern',
      desc: 'Membangun antarmuka yang ramah untuk semua pengguna tanpa mengorbankan estetika.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZv0xshzQnKtzP6w5KQyaMni9m7UGU3egL0_I8UUESn49LWj-b0LCtM7HFDJY1cN0wlD8Rd6PqQ-P7rOx0699S2V1R8MWCytyT13HCsIAxatd5SasuYPoA7HJF9IJHVm2CRJG1fL3NX4BDWAvw6Q2OgRBE5n6uCQ40ZPkrqhcGByik17kyYmpeONhCH2hEJULiZp03kajf00nsgSl78PuyPmxh-Iw67fgSfwNE7FQgZeKawwDOEV-XqFvqMTBnEnCQHzzILcHMtoQ'
    }
  ];

  return (
    <div className="bg-[#F9FAFB] text-[#0A0A0A] min-h-screen pt-12">
      <main className="pb-16 px-6 md:px-16 max-w-7xl mx-auto w-full">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 mb-8 text-secondary text-sm">
          <Link className="hover:text-primary transition-colors" to="/">Beranda</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <Link className="hover:text-primary transition-colors" to="/blog">Blog</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-background font-semibold">Artikel Detail</span>
        </nav>

        {/* Article Header & Hero */}
        <article className="max-w-3xl mx-auto">
          <header className="text-center mb-8">
            <Badge variant="primary" className="mb-4">
              Software Engineering
            </Badge>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A0A0A] mb-6 leading-tight tracking-tight">
              Review: Teknologi Frontend Populer
            </h1>
            <div className="flex items-center justify-center gap-4 text-secondary text-sm">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg">person</span>
                <span>Ahmad Farhan</span>
              </div>
              <span className="w-1.5 h-1.5 bg-surface-variant rounded-full" />
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                <span>Oct 24, 2024</span>
              </div>
              <span className="w-1.5 h-1.5 bg-surface-variant rounded-full" />
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg">schedule</span>
                <span>5 min read</span>
              </div>
            </div>
          </header>

          <div className="w-full h-64 md:h-[450px] bg-surface-container mb-8 rounded-lg overflow-hidden border border-surface-variant/30">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbxPMAFv_NnTffIZrl9xBzqEa6le9tUugWQ4XXYunT9mB-suUk-tdZW3x2vT1XE6gpd1V3C3KJVv4SlaS9qQgtmEoMh-QG8UTnvSMww232x4xOqvJNrBYX-mGqzVgaQ_hkY8X_Sqhdrg4YtVGfCYTaXsptLociIJudFrMyiKLddryv6NkkjKtFjpmro9VtkGX3ocyJ7Hqb6PvjCDCv303nlo4DnsB0X08m4wwNi8SPLVgXQWNb0n8SeqMJpUJvkkyCPntiGqP9eUg" 
              alt="Cover"
            />
          </div>

          {/* Content Area */}
          <div className="prose text-secondary leading-relaxed space-y-6 text-base md:text-lg">
            <p className="text-xl text-on-surface font-semibold leading-snug">
              Perkembangan teknologi frontend berjalan sangat pesat. Dalam artikel ini, kita akan membedah beberapa framework populer yang mendominasi industri saat ini.
            </p>
            <h2 className="text-2xl font-bold text-custom-dark pt-4">Dominasi React.js</h2>
            <p>
              React tetap menjadi primadona di kalangan developer. Ekosistemnya yang matang, dukungan komunitas yang masif, dan paradigma komponen-berbasis membuatnya ideal untuk aplikasi berskala besar.
            </p>
            <blockquote className="border-l-4 border-l-primary-container pl-4 italic text-on-surface bg-surface-container-low/40 py-2 my-4 rounded-r-md">
              "Keunggulan utama React bukan hanya pada performanya, tetapi pada komunitas yang tak henti-hentinya menciptakan solusi inovatif untuk setiap masalah." - Tech Lead HIMATIF
            </blockquote>
            <p>
              Namun, kompleksitas pengelolaan state seringkali menjadi tantangan bagi pemula. Solusi seperti Redux atau Zustand menjadi esensial dalam arsitektur modern.
            </p>
            
            <div className="border border-surface-variant/30 p-4 bg-white rounded-lg my-8">
              <img 
                className="w-full h-auto rounded" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXsbI1R13SlJynCORM6UdOt5zN9c0ZEYXhyQMUPUtoyz9x3xMK3ja9_dtBrthkD7QJSB6MS5_aqJd8aFQLNBlh3LEc8w1F0nxahpxAMXYsI0rx0l9Y9C6iuxcqml6eexJCXsMNL1bOgPV4O-N0id25n8pnUBHG4dVnvzhUmCJf-OQhbiBpKk6dFgINzDxqoUGLbyuXUA6QxiPUhw9xg9abV9CHvIJIAhdnsVW8Nt8JX3iiCXzWeW2TolCoboe44flZW9Eyi6SCPOA" 
                alt="Illustration"
              />
              <p className="text-xs text-secondary text-center mt-3 uppercase tracking-wider font-semibold">
                Ilustrasi Arsitektur Komponen React
              </p>
            </div>

            <h2 className="text-2xl font-bold text-custom-dark pt-4">Kebangkitan Vue &amp; Svelte</h2>
            <p>
              Di sisi lain, Vue 3 dengan Composition API menawarkan fleksibilitas yang luar biasa dengan kurva pembelajaran yang lebih landai. Svelte memberikan pendekatan berbeda dengan memindahkan beban kerja dari browser ke fase kompilasi, menghasilkan bundle size yang sangat kecil dan performa instan.
            </p>
            <p>
              Pemilihan teknologi ini sangat bergantung pada kebutuhan proyek. Untuk purwarupa cepat, Vue sangat menjanjikan. Untuk aplikasi yang menuntut performa tinggi dengan interaksi kompleks, Svelte bisa menjadi senjata rahasia.
            </p>
          </div>

          {/* Author Card */}
          <div className="mt-16 pt-8 border-t border-outline-variant/30 flex items-start gap-6">
            <div className="w-16 h-16 bg-surface-variant flex-shrink-0 rounded-full overflow-hidden border border-outline-variant">
              <img 
                className="w-full h-full object-cover grayscale opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3SQdTacwn27Mbwn97naqWJ3tRtti2qczhdSQBx0tBb0XuW5WDUx0CAIAk_JNOhros62YJ4ECWu3fsYBzn88lGmexqgxKAGtAsZsarEmMbd0ma-ozmjkJNS7o49J4U37xHTsquzNzDahmOzNYyxOt1pXLObSa8bj34qsE6FeE7INpwcxhB1M-QqnBUK_5u_VSB9_Iilzq_0q5veDttN3WiU0l5CASpLo-4upXib2CyW--sJaYGHp1fq3QXLet1BBrLv8fhKuwLUw4" 
                alt="Author"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-on-surface mb-1">Ahmad Farhan</h3>
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Kadep R&amp;D HIMATIF</p>
              <p className="text-sm text-secondary leading-relaxed">
                Penggemar web performance dan arsitektur frontend. Sering mengeksplorasi edge-computing dan framework modern.
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* Related Articles */}
      <section className="bg-white border-t border-outline-variant/30 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-xl font-bold text-on-surface mb-8">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((art, idx) => (
              <Link 
                key={idx}
                to={`/blog/${idx + 2}`}
                className="group block bg-white border border-outline-variant/30 hover:border-primary transition-all duration-300 rounded-lg overflow-hidden"
              >
                <div className="h-48 bg-surface-variant relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    src={art.image} 
                    alt={art.title}
                  />
                </div>
                <div className="p-6">
                  <Badge variant="primary" className="mb-2">
                    {art.category}
                  </Badge>
                  <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors mb-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-sm text-secondary line-clamp-2 leading-relaxed">{art.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
