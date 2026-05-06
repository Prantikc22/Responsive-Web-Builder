import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { Award, Building2, Users, Leaf, Stethoscope, Heart, Baby, Apple, Activity, Zap, MessageCircle } from "lucide-react";
import drSouvikImg from "@assets/Doc_Men_1778067737072.jpeg";
import pampitaImg from "@assets/Doc_Women_1778067734674.jpeg";

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.onChange((latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const testimonials = [
  { id: 1, text: "After years of struggling with chronic sinusitis, Dr. Souvik's treatment gave me lasting relief. No more recurring infections!", author: "Ananya Roy, Uttarpara" },
  { id: 2, text: "Pampita di completely transformed my diet for diabetes. My HbA1c dropped from 9.2 to 6.8 in 4 months. Remarkable!", author: "Suresh Ghosh, Serampore" },
  { id: 3, text: "My daughter had frequent ear infections and conventional medicine wasn't helping. After homeopathic treatment, she's been infection-free for a year.", author: "Priya Sharma, Kolkata" },
  { id: 4, text: "The personalized diet plan from Pampita helped me lose 12kg while managing my thyroid. I feel completely new!", author: "Rupa Chatterjee, Hooghly" },
  { id: 5, text: "Dr. Souvik is incredibly knowledgeable and patient. He listened to every symptom and the constitutional treatment worked wonders for my migraines.", author: "Amit Bose, Howrah" },
  { id: 6, text: "I came with PCOD and irregular cycles. Within 3 months of treatment, everything normalized. Truly grateful!", author: "Suchitra Das, Dunlop" },
  { id: 7, text: "Pampita's nutrition guidance for my elderly mother's kidney disease has been life-changing. She now eats right and feels so much better.", author: "Rajesh Mukherjee, Barrackpore" },
  { id: 8, text: "Brought my son here for eczema that no cream could control. Homeopathy healed it from within. This clinic is a blessing.", author: "Nilufar Begum, Shyamnagar" }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[var(--bg-warm)] relative overflow-hidden">
        {/* Subtle botanical SVG pattern overlay */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--bg-cream) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-[var(--gold)] font-sans font-semibold tracking-widest text-sm uppercase"
              >
                BOUTIQUE MEDICAL CLINIC
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-5xl md:text-6xl lg:text-[64px] leading-tight text-[var(--text-dark)]"
              >
                Premium Holistic Care for Kolkata Families
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-sans text-lg md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed"
              >
                Combining Homeopathy with expert Nutrition science — personalized, research-backed healing in the heart of Kolkata
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-4"
              >
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[var(--green-deep)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--green-mid)] transition-transform hover:scale-105"
                >
                  Book Appointment
                </button>
                <a 
                  href="https://wa.me/917980219737" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border border-[var(--border)] text-[var(--green-deep)] px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-5 relative h-[400px] lg:h-[500px] w-full flex items-center justify-center"
            >
              {/* Elegant abstract visual */}
              <div className="relative w-full h-full max-w-[400px] mx-auto">
                <div className="absolute inset-0 rounded-full border border-[var(--gold)]/20 shadow-[var(--shadow-xl)] flex items-center justify-center bg-white/50 backdrop-blur-sm">
                  <div className="w-[80%] h-[80%] rounded-full bg-[var(--green-deep)]/5 border border-[var(--gold)] flex items-center justify-center">
                    <div className="w-[60%] h-[60%] rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--teal)]">
                      <Leaf className="w-16 h-16 opacity-80" />
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 top-1/4 bg-white p-4 rounded-2xl shadow-lg rotate-12">
                  <Stethoscope className="w-8 h-8 text-[var(--gold)]" />
                </div>
                <div className="absolute -left-4 bottom-1/4 bg-[var(--green-deep)] p-4 rounded-2xl shadow-lg -rotate-12 text-white">
                  <Apple className="w-8 h-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TRUST BAR */}
      <section className="bg-[var(--bg-cream)] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-3">
              <Award className="w-10 h-10 text-[var(--gold)]" />
              <div className="font-serif text-4xl md:text-5xl font-bold text-[var(--green-deep)]">
                <Counter value={10} />+
              </div>
              <div className="font-sans text-sm md:text-base text-[var(--text-muted)] font-medium">Years of Experience</div>
            </div>
            
            <div className="flex flex-col items-center text-center gap-3 relative group">
              <Building2 className="w-10 h-10 text-[var(--gold)]" />
              <div className="font-serif text-3xl md:text-4xl font-bold text-[var(--green-deep)]">Govt. of India</div>
              <div className="font-sans text-sm md:text-base text-[var(--text-muted)] font-medium">Affiliated Clinic</div>
              <div className="absolute -inset-4 border border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <Users className="w-10 h-10 text-[var(--gold)]" />
              <div className="font-serif text-4xl md:text-5xl font-bold text-[var(--green-deep)]">
                <Counter value={500} />+
              </div>
              <div className="font-sans text-sm md:text-base text-[var(--text-muted)] font-medium">Patients Treated</div>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <Leaf className="w-10 h-10 text-[var(--gold)]" />
              <div className="font-serif text-3xl md:text-4xl font-bold text-[var(--green-deep)]">Homeopathy</div>
              <div className="font-sans text-sm md:text-base text-[var(--text-muted)] font-medium">+ Nutrition</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GOVT TRUST CALLOUT BANNER */}
      <section className="bg-[var(--green-deep)] text-white py-16 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 flex flex-col gap-4">
              <span className="text-[var(--gold-light)] font-sans font-semibold tracking-widest text-xs uppercase">RESEARCH & CREDIBILITY</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold">Backed by Government of India Research</h2>
              <p className="font-sans text-white/80 text-lg max-w-3xl leading-relaxed">
                Dr. Souvik Dutta serves as Senior Research Fellow at the Dr. Anjali Chatterji Regional Research Institute for Homoeopathy, Kolkata — operating under CCRH, Ministry of Ayush, Government of India.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="w-48 h-48 rounded-full border-2 border-[var(--gold)]/30 flex items-center justify-center p-2 relative">
                <div className="absolute inset-0 rounded-full border border-[var(--gold)]/60 animate-[spin_10s_linear_infinite] border-dashed"></div>
                <div className="w-full h-full rounded-full bg-[var(--gold)]/10 flex flex-col items-center justify-center text-center p-4">
                  <span className="font-serif text-[var(--gold-light)] font-bold text-2xl">CCRH</span>
                  <div className="w-8 h-[1px] bg-[var(--gold)]/50 my-1"></div>
                  <span className="font-sans text-[var(--gold)] text-[10px] tracking-wider uppercase">Govt. of India</span>
                  <span className="font-sans text-[var(--gold)] text-[9px] tracking-wider uppercase mt-1">Ministry of Ayush</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET OUR EXPERTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mb-4">Meet Our Experts</h2>
            <p className="font-sans text-lg text-[var(--text-muted)]">Dual expertise, one destination</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Dr. Souvik */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-2xl shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] transition-all duration-300 hover:-translate-y-2 border border-[var(--border)] overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={drSouvikImg} alt="Dr. Souvik Dutta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-3xl text-[var(--green-deep)] mb-1">Dr. Souvik Dutta</h3>
                <p className="text-[var(--gold)] font-sans text-sm font-medium mb-4">BHMS, MD(Hom.), MBA (Healthcare)</p>
                <div className="inline-block bg-[var(--bg-cream)] text-[var(--green-deep)] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 w-max">Homeopathy</div>
                <p className="font-sans text-[var(--text-muted)] text-sm mb-6 leading-relaxed flex-1">
                  Senior Research Fellow at CCRH, Ministry of Ayush. 10+ years of clinical experience in homoeopathic medicine.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">BHMS</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">MD(Hom.)</span>
                  <span className="text-xs bg-[var(--green-deep)]/10 text-[var(--green-deep)] px-2 py-1 rounded-full">CCRH Fellow</span>
                </div>
                <button 
                  onClick={() => window.Calendly?.initPopupWidget({ url: 'SOUVIK_CALENDLY_URL' })}
                  className="w-full bg-[var(--green-deep)] text-white py-3 rounded-full font-medium hover:bg-[var(--green-mid)] transition-colors mt-auto"
                >
                  Book with Dr. Souvik
                </button>
              </div>
            </motion.div>

            {/* Pampita */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-2xl shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] transition-all duration-300 hover:-translate-y-2 border border-[var(--border)] overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={pampitaImg} alt="Pampita Banerjee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-3xl text-[var(--green-deep)] mb-1">Pampita Banerjee</h3>
                <p className="text-[var(--gold)] font-sans text-sm font-medium mb-4">MSc Food & Nutrition | Therapeutic Dietitian</p>
                <div className="inline-block bg-[var(--teal)]/10 text-[var(--teal)] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 w-max">Nutrition & Dietetics</div>
                <p className="font-sans text-[var(--text-muted)] text-sm mb-6 leading-relaxed flex-1">
                  Expert therapeutic dietitian and certified diabetes educator, specializing in clinical nutrition for chronic conditions.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">MSc Nutrition</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Diabetic Educator</span>
                  <span className="text-xs bg-[var(--gold)]/10 text-[var(--gold)] px-2 py-1 rounded-full">Phone Consult</span>
                </div>
                <button 
                  onClick={() => window.Calendly?.initPopupWidget({ url: 'PAMPITA_CALENDLY_URL' })}
                  className="w-full bg-[var(--teal)] text-white py-3 rounded-full font-medium hover:bg-[var(--teal)]/90 transition-colors mt-auto"
                >
                  Book with Pampita
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section className="py-24 bg-[var(--bg-cream)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mb-4">Our Core Services</h2>
            <p className="font-sans text-lg text-[var(--text-muted)]">Comprehensive holistic treatments tailored for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Stethoscope, title: "Homeopathic Consultation", desc: "Classical constitutional prescribing for deep-seated healing.", color: "green" },
              { icon: Heart, title: "Chronic Disease Care", desc: "Long-term management strategies for persistent health issues.", color: "green" },
              { icon: Baby, title: "Pediatric Homeopathy", desc: "Gentle, safe, and effective remedies for children's ailments.", color: "green" },
              { icon: Apple, title: "Clinical Nutrition & Diet Planning", desc: "Therapeutic meal plans customized for your health conditions.", color: "teal" },
              { icon: Activity, title: "Diabetes Management & Education", desc: "Expert guidance to stabilize blood sugar through diet and lifestyle.", color: "teal" },
              { icon: Zap, title: "Lifestyle Disease Management", desc: "Addressing root causes of modern sedentary health problems.", color: "teal" }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-transparent hover:border-[var(--gold)] group"
              >
                <div className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center transition-colors ${service.color === 'green' ? 'bg-[var(--green-deep)]/10 text-[var(--green-deep)] group-hover:bg-[var(--gold)]/10 group-hover:text-[var(--gold)]' : 'bg-[var(--teal)]/10 text-[var(--teal)] group-hover:bg-[var(--gold)]/10 group-hover:text-[var(--gold)]'}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-[var(--text-dark)] mb-3">{service.title}</h3>
                <p className="font-sans text-[var(--text-muted)] text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-[var(--green-deep)] font-medium hover:text-[var(--gold)] transition-colors">
              Explore All Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. APPOINTMENT SECTION */}
      <section id="booking" className="py-24 bg-white">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mb-4">Book Your Appointment</h2>
            <p className="font-sans text-lg text-[var(--text-muted)] mb-12">Choose your specialist and select a date that works for you</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-[var(--bg-cream)] rounded-2xl p-6 text-center border border-[var(--border)]">
                <img src={drSouvikImg} alt="Dr. Souvik" className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-white shadow-sm" />
                <h3 className="font-serif text-2xl text-[var(--green-deep)] mb-1">Dr. Souvik Dutta</h3>
                <p className="text-[var(--gold)] text-xs mb-4">BHMS, MD(Hom.)</p>
                <div className="bg-white rounded-lg p-3 mb-6 shadow-sm text-sm text-[var(--text-muted)]">
                  Homeopathy Consultation
                </div>
                <button 
                  onClick={() => window.Calendly?.initPopupWidget({ url: 'SOUVIK_CALENDLY_URL' })}
                  className="w-full bg-[var(--green-deep)] text-white py-3 rounded-full hover:bg-[var(--green-mid)] transition-colors"
                >
                  Book with Dr. Souvik
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-[var(--bg-cream)] rounded-2xl p-6 text-center border border-[var(--border)] relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[var(--gold)] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Phone Consult
                </div>
                <img src={pampitaImg} alt="Pampita" className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-white shadow-sm" />
                <h3 className="font-serif text-2xl text-[var(--green-deep)] mb-1">Pampita Banerjee</h3>
                <p className="text-[var(--gold)] text-xs mb-4">MSc Food & Nutrition</p>
                <div className="bg-white rounded-lg p-3 mb-6 shadow-sm text-sm text-[var(--text-muted)]">
                  Dietitian Consultation
                </div>
                <button 
                  onClick={() => window.Calendly?.initPopupWidget({ url: 'PAMPITA_CALENDLY_URL' })}
                  className="w-full bg-[var(--teal)] text-white py-3 rounded-full hover:bg-[var(--teal)]/90 transition-colors"
                >
                  Book with Pampita
                </button>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4">
              <p className="text-[var(--text-muted)]">Prefer WhatsApp?</p>
              <a 
                href="https://wa.me/917980219737" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] font-medium text-lg hover:underline"
              >
                <MessageCircle className="w-6 h-6" />
                +91 79802 19737
              </a>
            </div>
         </div>
      </section>

      {/* 11. CTA BANNER */}
      <section className="bg-[var(--green-deep)] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Ready to Begin Your Healing Journey?</h2>
          <p className="font-sans text-white/80 text-lg mb-10 max-w-2xl mx-auto">Book a consultation with our specialists today and take the first step towards personalized, holistic wellness.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[var(--gold)] text-[var(--text-dark)] px-8 py-4 rounded-full font-medium hover:bg-[var(--gold-light)] transition-transform hover:scale-105"
            >
              Book Now
            </button>
            <Link 
              href="/contact" 
              className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
