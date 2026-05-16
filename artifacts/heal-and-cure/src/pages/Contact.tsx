import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, AlertCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20 bg-[var(--bg-warm)] min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">
              Reach Us
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl text-[var(--green-deep)] mt-3 mb-5">
              Get in Touch
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="font-sans text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
              We are here to answer your questions and guide you on your path to wellness. Visit us, call us, or reach out online.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-10">

            {/* Contact Details Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(27,67,50,0.08)] border border-[var(--border)] p-8 md:p-10 flex flex-col gap-8">

              <div>
                <h3 className="font-serif text-2xl text-[var(--text-dark)] mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--green-deep)]/8 p-3 rounded-xl text-[var(--green-deep)] shrink-0">
                      <MapPin className="w-5 h-5"/>
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-[var(--text-dark)] text-sm mb-0.5">Clinic Address</h4>
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed">Panpara Lane, Uttarpara<br/>Kolkata 712232, West Bengal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--green-deep)]/8 p-3 rounded-xl text-[var(--green-deep)] shrink-0">
                      <Phone className="w-5 h-5"/>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-sans font-semibold text-[var(--text-dark)] text-sm mb-2">Phone Numbers</h4>
                      <div className="space-y-3">
                        <div className="bg-[var(--bg-cream)] rounded-xl p-3">
                          <p className="font-sans text-xs text-[var(--gold)] font-semibold uppercase tracking-wider mb-1">Dr. Souvik Dutta</p>
                          <a href="tel:+918961661727" className="block text-sm text-[var(--green-deep)] font-medium hover:underline">+91 8961661727 <span className="text-xs text-[var(--text-muted)] font-normal">(appointments)</span></a>
                          <a href="tel:+917980219737" className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--green-deep)] transition-colors mt-1">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-500"/>
                            +91 7980219737 <span className="text-xs">(emergency)</span>
                          </a>
                        </div>
                        <div className="bg-[var(--bg-cream)] rounded-xl p-3">
                          <p className="font-sans text-xs text-[var(--gold)] font-semibold uppercase tracking-wider mb-1">Mrs. Pampita Banerjee</p>
                          <a href="tel:+918961661727" className="block text-sm text-[var(--teal)] font-medium hover:underline">+91 8961661727</a>
                        </div>
                        <div className="bg-[var(--bg-cream)] rounded-xl p-3">
                          <p className="font-sans text-xs text-[var(--gold)] font-semibold uppercase tracking-wider mb-1">WhatsApp</p>
                          <a href="https://wa.me/918961661727" target="_blank" rel="noopener noreferrer"
                            className="block text-sm text-[var(--green-deep)] font-medium hover:underline">+91 8961661727</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--green-deep)]/8 p-3 rounded-xl text-[var(--green-deep)] shrink-0">
                      <Mail className="w-5 h-5"/>
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-[var(--text-dark)] text-sm mb-1">Email</h4>
                      <a href="mailto:appointments.healandcure@gmail.com" className="block text-[var(--text-muted)] text-sm hover:text-[var(--green-deep)] transition-colors">appointments.healandcure@gmail.com</a>
                      <a href="mailto:drsouvikdutta@gmail.com" className="block text-[var(--text-muted)] text-sm hover:text-[var(--green-deep)] transition-colors">drsouvikdutta@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[var(--text-dark)] mb-4">Consultation Hours</h3>
                <div className="bg-[var(--bg-cream)] rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5"/>
                    <div className="flex-1 space-y-3">
                      <div>
                        <span className="font-sans font-semibold text-[var(--green-deep)] text-sm">Dr. Souvik Dutta — In-Person &amp; Online</span>
                        <p className="font-sans text-sm text-[var(--text-dark)] mt-0.5">Mon · Wed · Fri &nbsp; 7:00 PM – 9:00 PM</p>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">In-person: Panpara Lane, Uttarpara, Kolkata<br/>Online available on all days — book 24 hours in advance</p>
                      </div>
                      <div className="border-t border-[var(--border)] pt-3">
                        <span className="font-sans font-semibold text-[var(--teal)] text-sm">Mrs. Pampita Banerjee — Online Only</span>
                        <p className="font-sans text-sm text-[var(--text-dark)] mt-0.5">All days · Flexible hours</p>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">Online consultation by appointment — book at least 24 hours in advance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="https://wa.me/918961661727" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 bg-[var(--green-deep)] text-white py-3.5 rounded-full font-medium text-sm hover:bg-[var(--green-mid)] transition-colors">
                  <MessageCircle className="w-4 h-4"/> WhatsApp
                </a>
                <a href="https://www.facebook.com/thehchc.drsouvik" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 bg-[#1877F2] text-white py-3.5 rounded-full font-medium text-sm hover:bg-[#166fe5] transition-colors">
                  <Facebook className="w-4 h-4"/> Facebook
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(27,67,50,0.08)] border border-[var(--border)] min-h-[420px]">
              <iframe
                src="https://maps.google.com/maps?q=Panpara+Lane+Uttarpara+Kolkata+712232&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                allowFullScreen
                loading="lazy"
                title="Heal & Cure Health Clinic Location — Panpara Lane, Uttarpara"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
