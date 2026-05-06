import { useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917980219737"
      target="_blank"
      rel="noopener noreferrer"
      data-testid="link-whatsapp-floating"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", bounce: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <MessageCircle className="w-6 h-6" />
      <motion.div 
        className="absolute inset-0 rounded-full border-2 border-[#25D366]"
        animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeOut" }}
      />
    </motion.a>
  );
}
