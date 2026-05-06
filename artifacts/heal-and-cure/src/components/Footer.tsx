import { Link } from "wouter";
import logoImg from "@assets/Logo_Dark_Bg-removebg_1778067731722.png";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F1F18] text-white pt-0 pb-6">
      {/* Map Embed */}
      <div className="w-full h-[300px]">
        <iframe
          src="https://maps.google.com/maps?q=Panpara+Lane+Uttarpara+Kolkata+712232&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Heal & Cure Health Clinic Location — Panpara Lane, Uttarpara, Kolkata"
        />
      </div>

      <div className="container mx-auto px-4 pt-14 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Heal & Cure Health Clinic"
                className="h-16 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-xl text-[var(--gold)] font-semibold leading-none">
                  Heal &amp; Cure
                </span>
                <span className="font-sans text-[10px] text-gray-400 uppercase tracking-[0.18em] mt-1">
                  Health Clinic
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted wellness partner in Kolkata — combining classical homoeopathy with expert clinical nutrition for lasting, personalised care.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/thehchc.drsouvik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--gold)] hover:border-[var(--gold)]/40 transition-colors"
                data-testid="link-facebook"
                aria-label="Heal & Cure on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://share.google/LEq7WsRQdaZfluGZF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans text-gray-400 hover:text-[var(--gold)] transition-colors"
              >
                Google Reviews ★
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-serif text-lg text-[var(--gold)] mb-5">Our Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              {["Homeopathy Consultation", "Chronic Disease Care", "Pediatric Homeopathy", "Clinical Nutrition", "Diabetes Management", "Lifestyle Disease Care"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-[var(--gold)] mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/health-tips" className="hover:text-white transition-colors">Health Tips</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="https://share.google/LEq7WsRQdaZfluGZF" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Google Reviews</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-serif text-lg text-[var(--gold)] mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                <span>Panpara Lane, Uttarpara<br />Kolkata, West Bengal 712232</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--gold)] shrink-0" />
                <a href="tel:+917980219737" className="hover:text-white transition-colors">+91 79802 19737</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5">
                  <a href="mailto:drsouvikdutta@gmail.com" className="hover:text-white transition-colors">drsouvikdutta@gmail.com</a>
                  <a href="mailto:pampita.banerjee11@gmail.com" className="hover:text-white transition-colors">pampita.banerjee11@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Heal &amp; Cure Health Clinic · Serving patients across Kolkata and West Bengal</p>
        </div>
      </div>
    </footer>
  );
}
