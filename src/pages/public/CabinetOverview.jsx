import React from 'react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

export default function CabinetOverview() {
  const bph = [
    {
      name: 'Saha we ah kepo',
      role: 'Ketua Himpunan',
      badge: 'primary',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNVBo_108tuICJl3clYCjM56V3QwoRiq60qlSkPZKKjLtNwDoayI7HfpqnFlebG_fVhGS7ExuzKwNbpvD4EjKbVN3SDBvH8pP-thnK8VcMPRREbedr7ZnN_FTvTzu90rlU9DgtkhbL3NKRltUDq1CXdgSiK6hndeefE2q1boxpWIIOPRM4_7IAXtgIpVx0WUEwVaPrdfOVIn-cr1S95W9MJ93yJG1jF9WcBYWFilS_MUYEXcFPB_ghWeS0zdhiPapHltbwKVE1BJg'
    },
    {
      name: 'Saha we ah kepo',
      role: 'Wakil Ketua Himpunan',
      badge: 'warning',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGn9I1kUg5nK7BzJwHKSnBHWqVxx8e94hyvxeAM4OT1ssHPNN8LiC2gt79lUG8wUa7BDh_AqXRKoIHnGPk53e6TtDtOTFkM04vL9w69w4jKvi2iuDxzAF134NZeK6_49PWiVrSL2VNAsGgFLKeOd25UruF248zrpGMbJM-S8k8o3f2SMrgOOzYV6Xj02wxVWrgEbzNXsVnDV8w4HV4F8xbAqMljNmgMrwWJLF_whb4ugX5U-O1flxoR0ORzHlgK7RWkB8DGf7I-dA'
    },
    {
      name: 'Saha we ah kepo',
      role: 'Sekretaris Umum',
      badge: 'warning',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpUgoVKncWIlQdt-a_VCHyyxwCoXDDENzYmYKZO28apd2T7WhT8lyslCBW0V8-TVSERKqT9toJt0C2Z52tSaVrgAxjRVM6O_E1OhS4LDRyShfoFNXgN51tCbjGOBfsxPfJv4a8S8Q4uXTcdaxojVCUeIbuzjMl_y-pHq1TqX_oRIkhW8P6B5Ly4HmGCF09xgvBWfABrWcMPW7cphoykB3m398A6PkLiPloyQeVCzikKrECLyDuFKGO89aTPygt6QUNWohCbEHx9DU'
    },
    {
      name: 'Saha we ah kepo',
      role: 'Bendahara Umum',
      badge: 'warning',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsaZqDBUqI350GYe4fIQk2U1KPCua6u2Ay7i8S7Ypz8OESjUdNRfoTcavmpVI05sHG-D5hYC50ydrrGeqkzA8cqZ97JNDN4fVu4hH4A3XxVlxvjR86QfAKckiaLTNXqFqBn9bMLU1W-lkc4PUcLoQQnQz5qYhgrGGUz7JBYVhEiV9vS54NevxR5gSGQI6n6Nu-sgaPcCbp3KRukFkYpHHUA2hTArSjLJgTtQA9cQSdwom__2Kd3u4m_NCagH6gfbBxQophBSq0Hn8'
    }
  ];

  const departments = [
    {
      title: 'PSDM',
      icon: 'groups',
      members: [
        { name: 'Saha we ah kepo', role: 'Kepala Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9FN-2mENzIrB2JCAcBIEGfq47Y3I8I1s8oxdJT_NT-AztB6zjpAnsDSi_3HaOPsRfnSD608Gg55jUghZ9dkEddsDGjDW5tMKStnd2Byny_Fted2BsEG3K8CMhLCpMUNJHCXkmT_ZtYAuP19C9VR4IfRz7G_av-XZMITaC0z1-O5p9HrcqZxAJ3gK19NdpnuEXtJJk0ZHiUUx8vwr9DWlS7cc3oYaoI3nRkyRTU8cNSYZocFxDgaBYQrMHDdBhItj3HSJDGrJMWdE' },
        { name: 'Saha we ah kepo', role: 'Staff Ahli', initial: 'N' }
      ]
    },
    {
      title: 'KOMINFO',
      icon: 'campaign',
      members: [
        { name: 'Saha we ah kepo', role: 'Kepala Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO9BwysmN3lg0H8D5qOTorpdTVZqiUHy39tvmfKYh2kCJcTcIoTuKypPVqwiYtApui1344a5WeTqYwDAqb7V3WZo9N5OGs8wAgzUCmO0xMP4LknkBT9lbFPxkPyMH0a2KNISEwJ0VnXHJxgw6CEbJBUs6okRRtq846lLF8rF2Gqgra6c-dlbZ3dM-90h2qyt01NOAYayLpMWfHUz27sATquDQKxd6bth433H78mH_hB-1WJD1w66MUb11N8aITwrq4qnrmd6GHYLU' },
        { name: 'Saha we ah kepo', role: 'Staff Ahli', initial: 'F' }
      ]
    },
    {
      title: 'RISTEK',
      icon: 'science',
      members: [
        { name: 'Saha we ah kepo', role: 'Kepala Departemen', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1khvorQH0Z237iPGvTnHcGvgbc8WsTrLs5sA4Z63U7WWYkLSDGbKPSYR8yEGbCgUiV5dnbtmmxP_X3m-3kT6uZ3JUrltgQwM8fiOWwaJBJ0PUImwP0lwPN-lCIWHKn3s7NDBO8-MZl_DgLDjg9nawyqBV_xnZegEea1Trjf8FB4Gi9LczX6uO51M7QgwgTkbROTErHCPhYbjgs0qm9vzQpG9SluhYe9lg369EaFLCCLBbHLV0meaqSzR8VPy3uqsS8GtyIK-WqrA' },
        { name: 'Saha we ah kepo', role: 'Staff Ahli', initial: 'D' }
      ]
    }
  ];

  return (
    <div className="bg-[#F9FAFB] text-[#0A0A0A] min-h-screen pt-12 pb-24">
      <div className="px-6 md:px-16 max-w-7xl mx-auto w-full flex flex-col gap-12">
        {/* Header & Philosophy */}
        <header className="flex flex-col gap-6 py-6 border-b border-outline-variant">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold text-primary tracking-widest uppercase">Periode 2026/2027</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-custom-dark font-display-xl">
              Kabinet Sang Pelopor
            </h1>
          </div>
          <div className="pl-4 border-l-4 border-primary max-w-3xl">
            <blockquote className="text-xl md:text-2xl text-on-surface-variant italic leading-snug">
              "Membangun kolaborasi tanpa batas, mengukir prestasi dengan dedikasi. Sinergi bukan sekadar nama, melainkan ruh pergerakan kita bersama."
            </blockquote>
          </div>
        </header>

        {/* Core Leadership */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">stars</span>
            Badan Pengurus Harian
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bph.map((member, idx) => (
              <Card key={idx} variant="flat" className="flex flex-col items-center text-center gap-4">
                <img 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mb-2" 
                  src={member.image} 
                  alt={member.name}
                />
                <h3 className="text-lg font-bold text-on-surface leading-tight">{member.name}</h3>
                <Badge variant={member.badge} className="px-4 py-1">
                  {member.role}
                </Badge>
              </Card>
            ))}
          </div>
        </section>

        {/* Bidang Columns */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {departments.map((dep, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b-2 border-primary pb-3">
                <span className="material-symbols-outlined text-primary">{dep.icon}</span>
                <h2 className="text-xl font-bold text-on-surface">{dep.title}</h2>
              </div>
              <div className="flex flex-col gap-4">
                {dep.members.map((member, mIdx) => (
                  <Card key={mIdx} variant="flat" className="flex items-center gap-4 !p-4">
                    {member.image ? (
                      <img className="w-16 h-16 rounded-full object-cover" src={member.image} alt={member.name} />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold text-xl">
                        {member.initial}
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-on-surface">{member.name}</h4>
                      <p className="text-xs text-secondary mt-1">{member.role}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
