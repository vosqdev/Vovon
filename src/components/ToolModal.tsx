import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface ToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function ToolModal({ isOpen, onClose, url }: ToolModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[95vw] h-[90vh] z-10 overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 bg-slate-900 border-b border-slate-700 text-white shrink-0">
            <div className="flex items-center space-x-3">
              <h3 className="font-semibold tracking-wide">VOVON Netbewust Scantool</h3>
              <a 
                href={url} 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                title="Open in nieuw tabblad"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Iframe Body */}
          <div className="w-full flex-1 bg-slate-100 relative">
            {/* Loading indicator that shows while the iframe loads */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-8 h-8 border-4 border-vovon-200 border-t-vovon-600 rounded-full animate-spin"></div>
            </div>
            
            <iframe 
              src={url} 
              className="w-full h-full border-0 relative z-10"
              title="VOVON Tool"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
