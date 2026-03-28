import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Language, translations } from '../translations';

interface ContactProps {
  language: Language;
}

const Contact = ({ language }: ContactProps) => {
  const t = translations[language].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Nieuw bericht via website van ${formData.name}`);
    const body = encodeURIComponent(`Naam: ${formData.name}\nEmail: ${formData.email}\nTelefoon: ${formData.phone}\n\nBericht:\n${formData.message}`);
    
    window.location.href = `mailto:pvos@vovon.nl?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.title}</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {t.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-vovon-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-vovon-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{t.info.email}</h3>
                  <a href="mailto:pvos@vovon.nl" className="text-slate-600 hover:text-vovon-600 transition-colors">
                    pvos@vovon.nl
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-vovon-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-vovon-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{t.info.phone}</h3>
                  <a href="tel:+31611692001" className="text-slate-600 hover:text-vovon-600 transition-colors">
                    +31 6 116 92 001
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-vovon-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-vovon-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{t.info.office}</h3>
                  <p className="text-slate-600">
                    Leeuwerik 4<br />
                    8081 ZJ ELBURG<br />
                    The Netherlands
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-vovon-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-vovon-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.form.successTitle}</h3>
                <p className="text-slate-600">{t.form.successMessage}</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-vovon-600 font-medium hover:underline"
                >
                  {t.form.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-vovon-500 focus:border-vovon-500 transition-colors outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-vovon-500 focus:border-vovon-500 transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-vovon-500 focus:border-vovon-500 transition-colors outline-none"
                    placeholder="+31 6 12345678"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-vovon-500 focus:border-vovon-500 transition-colors outline-none resize-none"
                    placeholder={t.form.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-vovon-600 hover:bg-vovon-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vovon-500 transition-all ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? t.form.sending : t.form.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
