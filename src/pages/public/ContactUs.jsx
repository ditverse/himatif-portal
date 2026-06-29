import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import InputField from '../../components/ui/InputField';
import TextArea from '../../components/ui/TextArea';
import Button from '../../components/ui/Button';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan dari ${formData.name} berhasil terkirim!`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#F9FAFB] text-[#0A0A0A] min-h-screen pt-12 pb-24">
      <div className="px-6 md:px-16 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 text-center md:text-left mt-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-custom-dark mb-4 font-display-xl">Get in Touch</h1>
          <p className="text-lg text-secondary max-w-2xl leading-relaxed">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Contact Info */}
          <div className="flex flex-col space-y-6">
            <Card variant="flat" hoverEffect={false}>
              <div className="flex items-start space-x-4">
                <div className="bg-surface-container-low p-3 rounded-full text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">Address</h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    Sekretariat Himatif<br />
                    Universitas Logistik dan Bisnis Internasional<br />
                    Kota Bandung, Jawa Barat
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="flat" hoverEffect={false}>
              <div className="flex items-start space-x-4">
                <div className="bg-surface-container-low p-3 rounded-full text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">Email</h3>
                  <p className="text-sm text-secondary leading-relaxed">himatif@ulbi.ac.id</p>
                </div>
              </div>
            </Card>

            <Card variant="flat" hoverEffect={false}>
              <div className="flex items-start space-x-4">
                <div className="bg-surface-container-low p-3 rounded-full text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">share</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">Socials</h3>
                  <div className="flex space-x-4 mt-2">
                    <a className="text-secondary hover:text-primary transition-colors" href="#">
                      <span className="material-symbols-outlined">public</span>
                    </a>
                    <a className="text-secondary hover:text-primary transition-colors" href="#">
                      <span className="material-symbols-outlined">group</span>
                    </a>
                    <a className="text-secondary hover:text-primary transition-colors" href="#">
                      <span className="material-symbols-outlined">chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Contact Form */}
          <Card variant="flat" hoverEffect={false} className="p-8 md:p-10 relative overflow-hidden">
            {/* Decorative Top Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary-container" />
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField 
                label="Name" 
                id="name" 
                placeholder="Your full name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
              <InputField 
                label="Email" 
                id="email" 
                type="email"
                placeholder="you@example.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
              <InputField 
                label="Subject" 
                id="subject" 
                placeholder="How can we help?" 
                required 
                value={formData.subject}
                onChange={handleChange}
              />
              <TextArea 
                label="Message" 
                id="message" 
                placeholder="Write your message here..." 
                rows={5}
                required 
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" iconRight="send" className="w-full justify-center">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
