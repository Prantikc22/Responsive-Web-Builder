import { Link } from "wouter";
import logoImg from "@assets/Logo_Dark_Bg-removebg_1778067731722.png";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F1F18] text-white pt-0 pb-6 mt-12">
      {/* Map Embed */}
      <div className="w-full h-[300px] mb-12">
        <iframe 
          src="https://maps.google.com/maps?q=Panpara+Lane+Uttarpara+Kolkata+712232&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Clinic Location"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-[var(--green-deep)] rounded-full p-2 w-12 h-12 flex items-center justify-center border border-[var(--gold)]/30">
                <img src={logoImg} alt="Heal & Cure" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-serif text-xl text-[var(--gold)]">Heal & Cure</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted wellness partner in Kolkata. Combining classical homeopathy with expert clinical nutrition.
            </p>
            <a 
              href="https://www.facebook.com/thehchc.drsouvik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--gold)] transition-colors inline-flex mt-2"
              data-testid="link-facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-serif text-lg text-[var(--gold)] mb-4">Our Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Homeopathy Consultation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Chronic Disease Care</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Pediatric Homeopathy</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Clinical Nutrition</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Diabetes Management</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Lifestyle Disease Care</Link></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-[var(--gold)] mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/health-tips" className="hover:text-white transition-colors">Health Tips</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-serif text-lg text-[var(--gold)] mb-4">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <span>Panpara Lane, Uttarpara<br />Kolkata 712232</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--gold)] shrink-0" />
                <span>+91 79802 19737</span>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--gold)] shrink-0" />
                  <a href="mailto:drsouvikdutta@gmail.com" className="hover:text-white transition-colors">drsouvikdutta@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  <a href="mailto:pampita.banerjee11@gmail.com" className="hover:text-white transition-colors">pampita.banerjee11@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Heal & Cure Health Clinic · Serving patients across Kolkata and West Bengal</p>
        </div>
      </div>
    </footer>
  );
}
