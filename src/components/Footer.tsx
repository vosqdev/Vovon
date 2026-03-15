import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Language, translations } from '../translations';
import { Logo } from './Logo';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import DisclaimerModal from './DisclaimerModal';
import TermsModal from './TermsModal';

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isDisclaimerModalOpen, setIsDisclaimerModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const t = translations[language].footer;
  const navT = translations[language].nav;

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="mb-4 block">
              <Logo className="h-8 w-auto text-white" />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{t.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-vovon-400 transition-colors">{navT.home}</a></li>
              <li><a href="#about" className="hover:text-vovon-400 transition-colors">{navT.about}</a></li>
              <li><a href="#services" className="hover:text-vovon-400 transition-colors">{navT.services}</a></li>
              <li><a href="#projects" className="hover:text-vovon-400 transition-colors">{navT.references}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{t.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setIsPrivacyModalOpen(true)} className="hover:text-vovon-400 transition-colors">{t.privacy}</button></li>
              <li><button onClick={() => setIsDisclaimerModalOpen(true)} className="hover:text-vovon-400 transition-colors">{t.terms}</button></li>
              <li><button onClick={() => setIsPrivacyModalOpen(true)} className="hover:text-vovon-400 transition-colors">{t.cookies}</button></li>
              <li><button onClick={() => setIsTermsModalOpen(true)} className="hover:text-vovon-400 transition-colors">{t.generalTerms}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{t.connect}</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/patrick-vos-49527726/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} VOVON. {t.rights}</p>
          <p className="mt-2 md:mt-0">{t.design}</p>
        </div>
      </div>
      
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      
      <DisclaimerModal 
        isOpen={isDisclaimerModalOpen} 
        onClose={() => setIsDisclaimerModalOpen(false)} 
      />
      
      <TermsModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
