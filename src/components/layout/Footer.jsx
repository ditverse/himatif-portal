import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant py-xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col items-start">
          <div className="text-headline-md font-headline-md font-bold text-on-surface mb-4">
            HIMATIF<span className="text-primary-container">.</span>
          </div>
          <p className="font-body-md text-body-md text-secondary mb-6 max-w-xs">
            Himpunan Mahasiswa Teknik Informatika. Ormawa Teknik Informatika pengembangan akademik dan non-akademik.
          </p>
          <div className="font-label-sm text-label-sm text-secondary">
            © 2026 HIMATIF. All rights reserved.
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="col-span-1 flex flex-col space-y-4">
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">Organisasi</h4>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary-container hover:underline decoration-primary-container transition-all duration-300" to="/about">Visi &amp; Misi</Link>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary-container hover:underline decoration-primary-container transition-all duration-300" to="/departments">Departemen</Link>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary-container hover:underline decoration-primary-container transition-all duration-300" to="/cabinet">Struktur Kabinet</Link>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary-container hover:underline decoration-primary-container transition-all duration-300" to="/about">Sejarah</Link>
        </div>

        {/* Links Column 2 */}
        <div className="col-span-1 flex flex-col space-y-4">
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">Informasi</h4>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary-container hover:underline decoration-primary-container transition-all duration-300" to="/contact">Kontak</Link>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary-container hover:underline decoration-primary-container transition-all duration-300" to="/privacy">Kebijakan Privasi</Link>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary-container hover:underline decoration-primary-container transition-all duration-300" to="/terms">Syarat &amp; Ketentuan</Link>
          <Link className="font-body-md text-body-md text-secondary hover:text-primary-container hover:underline decoration-primary-container transition-all duration-300" to="/faq">FAQ</Link>
        </div>

        {/* Contact Column */}
        <div className="col-span-1 flex flex-col space-y-4">
          <h4 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">Hubungi Kami</h4>
          <div className="flex items-start space-x-3 text-secondary">
            <span className="material-symbols-outlined mt-1" style={{ fontSize: '20px' }}>location_on</span>
            <span className="font-body-md text-body-md">Sekretariat Himatif, Universitas Logistik Bisnis Internasional</span>
          </div>
          <div className="flex items-center space-x-3 text-secondary mt-2">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>
            <span className="font-body-md text-body-md">himatif@ulbi.ac.id</span>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-custom-dark hover:bg-primary-container hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-custom-dark hover:bg-primary-container hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined">smart_display</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-custom-dark hover:bg-primary-container hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
