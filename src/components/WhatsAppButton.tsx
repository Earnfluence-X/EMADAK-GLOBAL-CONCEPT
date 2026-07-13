import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Emadak Global Concept,\n\nI'm interested in your real estate and investment services. Can you help me?"
    );
    window.open(`https://wa.me/2347033726654?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 mb-4 p-4 glass-strong rounded-2xl w-64 shadow-2xl"
          >
            <p className="text-sm text-white/80 mb-3">
              Chat with <span className="text-[#D4AF37] font-bold">The Real Estate Doctor</span> directly!
            </p>
            <button
              onClick={handleWhatsApp}
              className="w-full btn-gold py-2 text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center hover:shadow-[#25D366]/40 transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <MessageCircle className="w-8 h-8 text-white" />
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;