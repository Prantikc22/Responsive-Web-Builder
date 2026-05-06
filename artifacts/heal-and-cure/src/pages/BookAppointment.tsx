import { motion } from "framer-motion";
import { MessageCircle, Clock, Video } from "lucide-react";
import drSouvikImg from "@assets/Doc_Men_1778067737072.jpeg";
import pampitaImg from "@assets/Doc_Women_1778067734674.jpeg";

export default function BookAppointment() {
  return (
    <div className="pt-20 bg-[var(--bg-cream)] min-h-screen">
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--green-deep)] mb-6">Book Your Visit</h1>
          <p className="font-sans text-lg text-[var(--text-muted)] leading-relaxed mb-12">
            Select the specialist below to schedule your consultation. Both online and in-clinic appointments are available.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-16 text-left">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-[var(--border)] flex-1">
              <Clock className="w-6 h-6 text-[var(--gold)] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-[var(--text-dark)] mb-1">First Consultation</h4>
                <p className="text-sm text-[var(--text-muted)]">Expect 45-60 minutes for a detailed case taking.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-[var(--border)] flex-1">
              <Video className="w-6 h-6 text-[var(--gold)] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-[var(--text-dark)] mb-1">Online Options</h4>
                <p className="text-sm text-[var(--text-muted)]">Secure video or phone consultations available.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border)] hover:shadow-lg transition-shadow"
              >
                <img src={drSouvikImg} alt="Dr. Souvik" className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-[var(--bg-cream)] shadow-md" />
                <h3 className="font-serif text-3xl text-[var(--green-deep)] mb-2">Dr. Souvik Dutta</h3>
                <p className="text-[var(--gold)] text-sm font-medium mb-6">BHMS, MD(Hom.), MBA</p>
                <div className="bg-[var(--bg-cream)] rounded-xl p-4 mb-8 text-[var(--text-muted)]">
                  Classical Homeopathy Consultation
                </div>
                <button 
                  onClick={() => window.Calendly?.initPopupWidget({ url: 'SOUVIK_CALENDLY_URL' })}
                  className="w-full bg-[var(--green-deep)] text-white py-4 rounded-full font-medium hover:bg-[var(--green-mid)] transition-colors"
                >
                  Book with Dr. Souvik
                </button>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--border)] hover:shadow-lg transition-shadow relative"
              >
                <div className="absolute top-6 right-6 bg-[var(--gold)] text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                  Phone Consult
                </div>
                <img src={pampitaImg} alt="Pampita" className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-[var(--bg-cream)] shadow-md" />
                <h3 className="font-serif text-3xl text-[var(--teal)] mb-2">Pampita Banerjee</h3>
                <p className="text-[var(--gold)] text-sm font-medium mb-6">MSc Food & Nutrition</p>
                <div className="bg-[var(--bg-cream)] rounded-xl p-4 mb-8 text-[var(--text-muted)]">
                  Diet & Nutrition Consultation
                </div>
                <button 
                  onClick={() => window.Calendly?.initPopupWidget({ url: 'PAMPITA_CALENDLY_URL' })}
                  className="w-full bg-[var(--teal)] text-white py-4 rounded-full font-medium hover:bg-[var(--teal)]/90 transition-colors"
                >
                  Book with Pampita
                </button>
              </motion.div>
            </div>

            <div className="mt-16 flex flex-col items-center justify-center gap-4 bg-[var(--green-deep)] text-white p-8 rounded-2xl">
              <h3 className="font-serif text-2xl">Need Help Booking?</h3>
              <p className="text-white/80">Reach out directly via WhatsApp to schedule manually.</p>
              <a 
                href="https://wa.me/917980219737" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#20b858] transition-colors mt-2"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </div>
        </div>
      </section>
    </div>
  );
}
