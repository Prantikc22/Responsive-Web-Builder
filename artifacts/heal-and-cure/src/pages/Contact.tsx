import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20 bg-[var(--bg-warm)] min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl text-[var(--green-deep)] mb-6">Get in Touch</h1>
            <p className="font-sans text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              We are here to answer your questions and guide you on your path to wellness. Visit us or reach out online.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg overflow-hidden border border-[var(--border)]">
            
            {/* Left: Contact Details */}
            <div className="p-8 md:p-12 flex flex-col gap-10">
              <div>
                <h3 className="font-serif text-3xl text-[var(--text-dark)] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--green-deep)]/10 p-3 rounded-full text-[var(--green-deep)] shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-dark)] mb-1">Clinic Address</h4>
                      <p className="text-[var(--text-muted)]">Panpara Lane, Uttarpara<br />Kolkata 712232, West Bengal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--green-deep)]/10 p-3 rounded-full text-[var(--green-deep)] shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-dark)] mb-1">Phone / WhatsApp</h4>
                      <p className="text-[var(--text-muted)]">+91 79802 19737</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--green-deep)]/10 p-3 rounded-full text-[var(--green-deep)] shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-dark)] mb-1">Email</h4>
                      <p className="text-[var(--text-muted)]">drsouvikdutta@gmail.com<br/>pampita.banerjee11@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[var(--text-dark)] mb-6">Clinic Hours</h3>
                <div className="bg-[var(--bg-cream)] p-6 rounded-2xl space-y-3 text-[var(--text-dark)]">
                  <div className="flex justify-between items-center border-b border-[var(--border)] pb-3">
                    <span className="font-medium">Monday - Saturday</span>
                    <span className="text-[var(--text-muted)]">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="font-medium text-[var(--gold)]">Sunday</span>
                    <span className="text-[var(--text-muted)]">By Appointment Only</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a 
                  href="https://wa.me/917980219737" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 bg-[#25D366] text-white py-4 rounded-full font-medium hover:bg-[#20b858] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a 
                  href="https://www.facebook.com/thehchc.drsouvik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 bg-[#1877F2] text-white py-4 rounded-full font-medium hover:bg-[#166fe5] transition-colors"
                >
                  <Facebook className="w-5 h-5" /> Facebook
                </a>
              </div>
            </div>

            {/* Right: Map */}
            <div className="h-[400px] lg:h-auto min-h-[500px] bg-gray-100">
              <iframe 
                src="https://maps.google.com/maps?q=Panpara+Lane+Uttarpara+Kolkata+712232&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Clinic Location"
                className="w-full h-full"
              />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
