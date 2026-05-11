import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-[var(--text-dark)] text-sm font-sans font-medium px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-[var(--border)] whitespace-nowrap"
          >
            Chat With Clinic
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/918961661721"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-whatsapp-floating"
        aria-label="Chat with Heal & Cure on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="relative w-13 h-13 flex items-center justify-center rounded-full bg-[var(--green-deep)] text-white shadow-[0_6px_24px_rgba(27,67,50,0.35)] border border-[var(--green-mid)]/40"
        style={{ width: 52, height: 52 }}
      >
        <MessageCircle className="w-6 h-6" />
        <motion.span
          className="absolute inset-0 rounded-full border border-[var(--green-deep)]/30"
          animate={{ scale: [1, 1.55], opacity: [0.7, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeOut", repeatDelay: 1 }}
        />
      </motion.a>
    </motion.div>
  );
}
