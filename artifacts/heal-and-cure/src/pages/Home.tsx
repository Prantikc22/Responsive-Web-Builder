import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import {
  Award, Building2, Users, Leaf, Stethoscope, Heart, Baby, Apple,
  Activity, Zap, MessageCircle, ChevronLeft, ChevronRight,
  FlaskConical, Target, Sparkles, Search, BookOpen, Shield
} from "lucide-react";
import logoImg from "@assets/Logo_Dark_Bg-removebg_1778067731722.png";
import drSouvikImg from "@assets/Doc_Men_1778067737072.jpeg";
import pampitaImg from "@assets/Doc_Women_1778067734674.jpeg";

/* ─── Animated counter ─── */
function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() =>
    springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest).toString();
    }), [springValue]);

  return <span ref={ref}>0</span>;
}

/* ─── Testimonials data ─── */
const testimonials = [
  { id: 1, text: "After years of struggling with chronic sinusitis, Dr. Souvik's treatment gave me lasting relief. No more recurring infections. The personalised approach is unlike anything I've experienced before.", name: "Ananya Roy", location: "Uttarpara" },
  { id: 2, text: "Pampita di completely transformed my diet for diabetes. My HbA1c dropped from 9.2 to 6.8 in just four months. Remarkable results that no medication alone could achieve.", name: "Suresh Ghosh", location: "Serampore" },
  { id: 3, text: "My daughter had frequent ear infections and conventional medicine wasn't helping. After homeopathic treatment with Dr. Souvik, she's been infection-free for over a year.", name: "Priya Sharma", location: "Kolkata" },
  { id: 4, text: "The personalised diet plan from Pampita helped me lose 12 kg while managing my thyroid condition. I feel completely new. Every consultation feels thoughtful and caring.", name: "Rupa Chatterjee", location: "Hooghly" },
  { id: 5, text: "Dr. Souvik is incredibly knowledgeable and patient. He listened to every symptom and the constitutional treatment worked wonders for my chronic migraines. Two years free now.", name: "Amit Bose", location: "Howrah" },
  { id: 6, text: "I came with PCOD and irregular cycles. Within three months of treatment, everything normalised. Truly grateful for this clinic and the care they showed throughout.", name: "Suchitra Das", location: "Dunlop" },
  { id: 7, text: "Pampita's nutrition guidance for my elderly mother's kidney disease has been life-changing. She now eats right, her creatinine levels have stabilised, and she feels so much better.", name: "Rajesh Mukherjee", location: "Barrackpore" },
  { id: 8, text: "Brought my son here for eczema that no cream could control. Homeopathy healed it from within — completely clear skin now. Heal & Cure is a blessing for our family.", name: "Nilufar Begum", location: "Shyamnagar" },
];

/* ─── Blog preview data ─── */
const blogPosts = [
  { category: "HOMEOPATHY", color: "bg-[var(--green-deep)]", title: "Can Homeopathy Help Manage Diabetes?", excerpt: "Explore how constitutional treatment addresses blood sugar imbalance at the root cause level.", slug: "/health-tips" },
  { category: "NUTRITION", color: "bg-[var(--teal)]", title: "5 Diet Mistakes Diabetics Make Daily", excerpt: "Common pitfalls in diabetic diet planning that silently worsen blood sugar control over time.", slug: "/health-tips" },
  { category: "LIFESTYLE", color: "bg-[var(--green-mid)]", title: "What Is Constitutional Homeopathic Treatment?", excerpt: "Understanding individualized medicine — the cornerstone of classical homoeopathy practice.", slug: "/health-tips" },
];

/* ─── Philosophy pillars ─── */
const philosophyPillars = [
  { icon: Search, title: "Research-Driven Approach", body: "Every prescription is grounded in classical homoeopathic literature and backed by government-affiliated clinical research at CCRH, ensuring evidence-based care." },
  { icon: Target, title: "Patient-Centric Healing", body: "We listen deeply before we prescribe. Your unique constitution, lifestyle, and history guide every personalised treatment plan we craft for you." },
  { icon: Sparkles, title: "Integrated Wellness", body: "By combining homoeopathy with expert clinical nutrition, we address not just symptoms but the complete bio-individual — mind, body, and metabolism." },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  /* Auto-advance testimonials */
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isPaused]);

  const prev = () => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveTestimonial((p) => (p + 1) % testimonials.length);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-[var(--bg-warm)] relative overflow-hidden">
        {/* Subtle botanical pattern */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaves" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M20 40 Q30 10 40 40 Q30 70 20 40Z" fill="none" stroke="#1B4332" strokeWidth="1"/>
              <path d="M50 20 Q60 40 50 60 Q40 40 50 20Z" fill="none" stroke="#C9A84C" strokeWidth="0.8"/>
              <circle cx="65" cy="65" r="2" fill="#0D4F4F" opacity="0.4"/>
              <circle cx="15" cy="15" r="1.5" fill="#C9A84C" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaves)"/>
        </svg>
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_60%_40%,rgba(245,240,232,0.6),transparent)] pointer-events-none"/>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[var(--gold)] font-sans font-semibold tracking-[0.25em] text-xs uppercase border border-[var(--gold)]/30 px-4 py-1.5 rounded-full bg-[var(--gold)]/5"
              >
                Boutique Medical Clinic · Kolkata
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="font-serif text-5xl md:text-6xl lg:text-[66px] leading-[1.1] text-[var(--text-dark)]"
              >
                Where Clinical Rigour Meets{" "}
                <em className="italic text-[var(--green-deep)] not-italic" style={{ fontStyle: "italic" }}>
                  Holistic Healing
                </em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="font-sans text-lg text-[var(--text-muted)] max-w-xl leading-relaxed"
              >
                Trusted by patients across Kolkata — combining government-backed Homoeopathy with expert Clinical Nutrition for deep, lasting results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  data-testid="button-hero-book"
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-[var(--green-deep)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--green-mid)] transition-all hover:scale-105 shadow-lg"
                >
                  Book Appointment
                </button>
                <a
                  data-testid="link-hero-whatsapp"
                  href="https://wa.me/917980219737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border border-[var(--border)] text-[var(--green-deep)] px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all hover:scale-105 shadow-sm"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Social proof strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-6 pt-2"
              >
                <div className="flex -space-x-2">
                  <img src={drSouvikImg} className="w-9 h-9 rounded-full object-cover ring-2 ring-white" alt="Dr. Souvik"/>
                  <img src={pampitaImg} className="w-9 h-9 rounded-full object-cover ring-2 ring-white" alt="Pampita"/>
                </div>
                <p className="text-sm text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--text-dark)]">500+</span> patients healed across Kolkata &amp; West Bengal
                </p>
              </motion.div>
            </div>

            {/* Right — elegant illustrated visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-5 relative h-[420px] lg:h-[520px] flex items-center justify-center"
            >
              {/* Outer ring */}
              <div className="absolute w-[360px] h-[360px] rounded-full border border-[var(--gold)]/20"/>
              <div className="absolute w-[300px] h-[300px] rounded-full border border-[var(--gold)]/35 animate-[spin_30s_linear_infinite]" style={{ borderStyle: "dashed" }}/>
              {/* Centre circle */}
              <div className="w-[220px] h-[220px] rounded-full bg-gradient-to-br from-[var(--bg-cream)] to-white shadow-xl border border-[var(--gold)]/25 flex flex-col items-center justify-center gap-2">
                <img src={logoImg} alt="Heal & Cure" className="w-28 h-28 object-contain opacity-90"/>
                <span className="font-serif text-[var(--green-deep)] text-xs tracking-widest uppercase">Heal &amp; Cure</span>
              </div>
              {/* Floating badges */}
              <div className="absolute top-[60px] right-[30px] bg-white rounded-2xl shadow-lg px-4 py-3 border border-[var(--border)] flex flex-col items-center gap-1">
                <Stethoscope className="w-6 h-6 text-[var(--gold)]"/>
                <span className="font-sans text-[10px] text-[var(--text-muted)] tracking-wider uppercase">Homoeopathy</span>
              </div>
              <div className="absolute bottom-[80px] left-[10px] bg-[var(--green-deep)] rounded-2xl shadow-lg px-4 py-3 border border-white/10 flex flex-col items-center gap-1">
                <Apple className="w-6 h-6 text-[var(--gold-light)]"/>
                <span className="font-sans text-[10px] text-white/80 tracking-wider uppercase">Nutrition</span>
              </div>
              <div className="absolute top-[180px] right-[-10px] bg-[var(--teal)] rounded-2xl shadow-lg px-3 py-3 flex flex-col items-center gap-1">
                <FlaskConical className="w-6 h-6 text-white"/>
                <span className="font-sans text-[10px] text-white/80 tracking-wider uppercase">CCRH</span>
              </div>
              <div className="absolute bottom-[40px] right-[60px] bg-white rounded-full shadow-md px-3 py-2 border border-[var(--border)] flex items-center gap-2">
                <span className="text-[var(--gold)] text-sm">★★★★★</span>
                <span className="font-sans text-[10px] text-[var(--text-muted)]">Google</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════════ */}
      <section className="bg-[var(--bg-cream)] py-14 border-y border-[var(--border)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Award, value: "10+", label: "Years of Experience", isNum: false },
              { icon: Building2, value: "Affiliated", label: "Govt. of India", isNum: false, highlight: true },
              { icon: Users, value: "500+", label: "Patients Treated", isNum: false },
              { icon: Leaf, value: "Holistic", label: "Dual Approach", isNum: false },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col items-center text-center gap-3 py-6 px-4 rounded-2xl transition-all ${item.highlight ? "border-2 border-[var(--gold)] bg-white shadow-md" : "border border-transparent hover:border-[var(--border)] hover:bg-white"}`}
              >
                <item.icon className={`w-9 h-9 ${item.highlight ? "text-[var(--gold)]" : "text-[var(--green-mid)]"}`}/>
                <div className="font-serif text-3xl md:text-4xl font-bold text-[var(--green-deep)]">{item.value}</div>
                <div className="font-sans text-sm text-[var(--text-muted)] font-medium leading-snug">{item.label}</div>
                {item.highlight && (
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[var(--gold)] font-semibold">Ministry of Ayush</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GOVT TRUST BANNER
      ═══════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[var(--green-deep)] text-white py-16 overflow-hidden relative"
      >
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "28px 28px" }}/>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8 flex flex-col gap-4">
              <span className="text-[var(--gold-light)] font-sans font-semibold tracking-[0.2em] text-[11px] uppercase">Research &amp; Credibility</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-snug">Backed by Government of India Research</h2>
              <p className="font-sans text-white/75 text-lg max-w-2xl leading-relaxed">
                Dr. Souvik Dutta serves as Senior Research Fellow at the Dr. Anjali Chatterji Regional Research Institute for Homoeopathy, Kolkata — operating under CCRH, Ministry of Ayush, Government of India.
              </p>
              <a href="/about" className="inline-flex items-center gap-2 text-[var(--gold-light)] font-medium text-sm hover:underline mt-1">Learn about our credentials →</a>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative w-44 h-44">
                <div className="absolute inset-0 rounded-full border-2 border-[var(--gold)]/40 animate-[spin_15s_linear_infinite]" style={{ borderStyle: "dashed" }}/>
                <div className="absolute inset-3 rounded-full border border-[var(--gold)]/60"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-1 p-4">
                  <Shield className="w-6 h-6 text-[var(--gold)] mb-1"/>
                  <span className="font-serif text-[var(--gold-light)] font-bold text-xl leading-none">CCRH</span>
                  <div className="w-8 h-px bg-[var(--gold)]/50 my-1"/>
                  <span className="font-sans text-[var(--gold)] text-[9px] tracking-widest uppercase leading-snug">Govt. of India</span>
                  <span className="font-sans text-[var(--gold)] text-[8px] tracking-widest uppercase leading-snug">Ministry of Ayush</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════
          MEET OUR EXPERTS
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Our Clinical Directorship</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mt-3 mb-4">Meet Our Experts</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-lg text-[var(--text-muted)]">Dual expertise, one destination</motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 max-w-5xl mx-auto">
            {/* Dr. Souvik */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-3xl shadow-[0_8px_40px_rgba(27,67,50,0.10)] hover:shadow-[0_20px_60px_rgba(27,67,50,0.18)] transition-all duration-400 hover:-translate-y-2 border border-[var(--border)] overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={drSouvikImg} alt="Dr. Souvik Dutta" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"/>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[var(--green-deep)] text-white text-[10px] font-sans font-semibold tracking-widest uppercase px-3 py-1 rounded-full">Homoeopathy</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-3xl text-[var(--green-deep)] mb-1">Dr. Souvik Dutta</h3>
                <p className="text-[var(--gold)] font-sans text-sm font-medium mb-3">BHMS, MD(Hom.), MBA (Healthcare)</p>
                <p className="font-sans text-[var(--text-muted)] text-sm mb-5 leading-relaxed flex-1">
                  Senior Research Fellow at CCRH, Ministry of Ayush. 10+ years of clinical experience in homoeopathic medicine with expertise in chronic and lifestyle diseases.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["BHMS", "MD(Hom.)", "CCRH Fellow", "10+ Yrs Exp"].map((b) => (
                    <span key={b} className="text-xs bg-[var(--bg-cream)] text-[var(--green-deep)] border border-[var(--border)] px-3 py-1 rounded-full">{b}</span>
                  ))}
                </div>
                <button
                  data-testid="button-book-souvik"
                  onClick={() => window.Calendly?.initPopupWidget({ url: "SOUVIK_CALENDLY_URL" })}
                  className="w-full bg-[var(--green-deep)] text-white py-3.5 rounded-full font-medium hover:bg-[var(--green-mid)] transition-all hover:scale-[1.02] mt-auto"
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
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group bg-white rounded-3xl shadow-[0_8px_40px_rgba(27,67,50,0.10)] hover:shadow-[0_20px_60px_rgba(27,67,50,0.18)] transition-all duration-400 hover:-translate-y-2 border border-[var(--border)] overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={pampitaImg} alt="Pampita Banerjee" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"/>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[var(--teal)] text-white text-[10px] font-sans font-semibold tracking-widest uppercase px-3 py-1 rounded-full">Nutrition</span>
                </div>
                <div className="absolute top-4 right-4 bg-[var(--gold)] text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  Phone Consult
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-3xl text-[var(--green-deep)] mb-1">Pampita Banerjee</h3>
                <p className="text-[var(--gold)] font-sans text-sm font-medium mb-3">MSc Food &amp; Nutrition | Therapeutic Dietitian</p>
                <p className="font-sans text-[var(--text-muted)] text-sm mb-5 leading-relaxed flex-1">
                  Expert therapeutic dietitian and certified Diabetic Educator specialising in clinical nutrition for chronic conditions including diabetes, PCOD, and kidney disease.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["MSc Nutrition", "Diabetic Educator", "Phone Consult"].map((b) => (
                    <span key={b} className="text-xs bg-[var(--bg-cream)] text-[var(--teal)] border border-[var(--border)] px-3 py-1 rounded-full">{b}</span>
                  ))}
                </div>
                <button
                  data-testid="button-book-pampita"
                  onClick={() => window.Calendly?.initPopupWidget({ url: "PAMPITA_CALENDLY_URL" })}
                  className="w-full bg-[var(--teal)] text-white py-3.5 rounded-full font-medium hover:bg-[var(--teal)]/80 transition-all hover:scale-[1.02] mt-auto"
                >
                  Book with Pampita
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-[var(--bg-cream)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">What We Treat</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mt-3 mb-4">Specialised Care</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-lg text-[var(--text-muted)]">Comprehensive holistic treatments tailored for your needs</motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              { icon: Stethoscope, title: "Classical Homeopathy", sub: "Constitutional prescribing for deep-seated healing", cat: "green" },
              { icon: Heart, title: "Therapeutic Nutrition", sub: "Evidence-based meal plans for chronic conditions", cat: "teal" },
              { icon: Baby, title: "Children's Wellness", sub: "Gentle, safe remedies for paediatric ailments", cat: "green" },
              { icon: Activity, title: "Diabetes Management", sub: "Integrated diet and homeopathic care for stable glucose", cat: "teal" },
              { icon: Zap, title: "Lifestyle Disease Care", sub: "Root-cause treatment for modern health conditions", cat: "green" },
              { icon: BookOpen, title: "Preventive Health Plans", sub: "Seasonal immunity and family wellness programmes", cat: "teal" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white p-7 rounded-2xl border border-transparent hover:border-l-4 hover:border-l-[var(--gold)] hover:shadow-md transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center transition-colors ${s.cat === "green" ? "bg-[var(--green-deep)]/8 text-[var(--green-deep)] group-hover:bg-[var(--gold)]/10 group-hover:text-[var(--gold)]" : "bg-[var(--teal)]/8 text-[var(--teal)] group-hover:bg-[var(--gold)]/10 group-hover:text-[var(--gold)]"}`}>
                  <s.icon className="w-6 h-6"/>
                </div>
                <h3 className="font-serif text-xl text-[var(--text-dark)] mb-2">{s.title}</h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">{s.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" data-testid="link-all-services" className="inline-flex items-center gap-2 text-[var(--green-deep)] font-medium font-sans hover:text-[var(--gold)] transition-colors">
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PHILOSOPHY OF GENTLE HEALING
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
            {/* Left — logo visual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 flex flex-col items-center gap-6"
            >
              <div className="relative w-56 h-56 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--bg-cream)] to-white border border-[var(--gold)]/20 shadow-xl"/>
                <div className="absolute inset-0 rounded-full border border-[var(--gold)]/30 animate-[spin_20s_linear_infinite]" style={{ borderStyle: "dashed" }}/>
                <img src={logoImg} alt="Heal & Cure" className="relative z-10 w-40 h-40 object-contain drop-shadow-sm"/>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl text-[var(--green-deep)] italic">Heal &amp; Cure</p>
                <p className="font-sans text-xs text-[var(--text-muted)] tracking-widest uppercase mt-1">Health Clinic</p>
              </div>
            </motion.div>

            {/* Right — pillars */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Our Approach</motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mb-4"
              >
                The Philosophy of{" "}
                <em className="text-[var(--green-deep)]">Gentle Healing</em>
              </motion.h2>

              <div className="flex flex-col gap-6">
                {philosophyPillars.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex gap-5 p-5 rounded-2xl border border-[var(--border)] hover:border-[var(--gold)]/40 hover:bg-[var(--bg-cream)]/40 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--green-deep)]/8 text-[var(--green-deep)] group-hover:bg-[var(--gold)]/10 group-hover:text-[var(--gold)] flex items-center justify-center flex-shrink-0 transition-colors">
                      <p.icon className="w-5 h-5"/>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-[var(--text-dark)] mb-1">{p.title}</h4>
                      <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">{p.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-[var(--bg-cream)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[var(--gold)]/4 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"/>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--green-deep)]/4 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"/>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Patient Stories</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mt-3 mb-3">Patient Experiences</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-lg text-[var(--text-muted)]">Stories from patients who found their path to wellness</motion.p>
          </div>

          <div
            ref={testimonialRef}
            className="max-w-3xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative bg-white rounded-3xl shadow-[0_12px_50px_rgba(27,67,50,0.10)] p-10 md:p-14 overflow-hidden">
              <div className="absolute top-6 left-8 font-serif text-[var(--gold)] opacity-30 leading-none" style={{ fontSize: "120px", lineHeight: 1 }}>&ldquo;</div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(5)].map((_, si) => (
                      <span key={si} className="text-[var(--gold)] text-2xl">★</span>
                    ))}
                  </div>
                  <p className="font-serif text-xl md:text-2xl text-[var(--text-dark)] italic leading-relaxed text-center mb-8">
                    &ldquo;{testimonials[activeTestimonial].text}&rdquo;
                  </p>
                  <div className="text-center">
                    <p className="font-sans font-semibold text-[var(--green-deep)]">{testimonials[activeTestimonial].name}</p>
                    <p className="font-sans text-sm text-[var(--text-muted)]">{testimonials[activeTestimonial].location}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Arrows */}
              <button
                data-testid="button-testimonial-prev"
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-[var(--border)] flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
              >
                <ChevronLeft className="w-5 h-5"/>
              </button>
              <button
                data-testid="button-testimonial-next"
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-[var(--border)] flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
              >
                <ChevronRight className="w-5 h-5"/>
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  data-testid={`button-testimonial-dot-${i}`}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-8 bg-[var(--gold)]" : "w-2 bg-[var(--border)]"}`}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                data-testid="link-google-reviews"
                href="https://share.google/LEq7WsRQdaZfluGZF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--green-deep)] font-medium font-sans hover:text-[var(--gold)] transition-colors"
              >
                Read All Reviews on Google →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HEALTH JOURNAL PREVIEW
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">From Our Desk</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mt-2">Health Journal</motion.h2>
            </div>
            <Link href="/health-tips" data-testid="link-all-tips" className="font-sans text-[var(--green-deep)] font-medium hover:text-[var(--gold)] transition-colors text-sm">
              Read All Tips →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`${post.color} px-6 py-8 relative overflow-hidden`}>
                  <div className="absolute right-4 top-3 opacity-10">
                    <BookOpen className="w-16 h-16 text-white"/>
                  </div>
                  <span className="inline-block bg-white/20 text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[var(--text-dark)] mb-3 leading-snug group-hover:text-[var(--green-deep)] transition-colors">{post.title}</h3>
                  <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed mb-5">{post.excerpt}</p>
                  <Link href={post.slug} className="font-sans text-sm text-[var(--gold)] font-medium hover:underline">
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          APPOINTMENT SECTION
      ═══════════════════════════════════════ */}
      <section id="booking" className="py-24 bg-[var(--bg-cream)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Schedule a Visit</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mt-3 mb-4">Book Your Appointment</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-lg text-[var(--text-muted)]">Choose your specialist and select a date that works for you</motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Dr. Souvik Dutta", cred: "BHMS, MD(Hom.), MBA (Healthcare)", type: "Homeopathy Consultation", img: drSouvikImg, bg: "var(--green-deep)", url: "SOUVIK_CALENDLY_URL", label: "Book with Dr. Souvik", badge: null },
              { name: "Pampita Banerjee", cred: "MSc Food & Nutrition | Diabetic Educator", type: "Dietitian Consultation", img: pampitaImg, bg: "var(--teal)", url: "PAMPITA_CALENDLY_URL", label: "Book with Pampita", badge: "Phone Consultation Available" },
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl p-8 text-center border border-[var(--border)] shadow-sm hover:shadow-lg transition-all"
              >
                {d.badge && (
                  <span className="inline-block bg-[var(--gold)]/15 text-[var(--gold)] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5 border border-[var(--gold)]/30">
                    {d.badge}
                  </span>
                )}
                {!d.badge && <div className="h-7 mb-5"/>}
                <img src={d.img} alt={d.name} className="w-28 h-28 rounded-full object-cover object-top mx-auto mb-5 border-4 border-white shadow-md ring-2 ring-[var(--border)]"/>
                <h3 className="font-serif text-2xl text-[var(--green-deep)] mb-1">{d.name}</h3>
                <p className="text-[var(--gold)] text-xs font-sans mb-5">{d.cred}</p>
                <div className="bg-[var(--bg-cream)] rounded-xl p-3 mb-6 text-sm text-[var(--text-muted)] font-sans">{d.type}</div>
                <button
                  data-testid={`button-book-${i}`}
                  onClick={() => window.Calendly?.initPopupWidget({ url: d.url })}
                  style={{ background: `var(${d.bg.replace("var(", "").replace(")", "")})` }}
                  className="w-full text-white py-3.5 rounded-full font-medium hover:opacity-90 transition-all hover:scale-[1.02]"
                >
                  {d.label}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[var(--text-muted)] font-sans mb-3">Prefer WhatsApp?</p>
            <a
              data-testid="link-whatsapp-booking"
              href="https://wa.me/917980219737"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 px-6 py-3 rounded-full font-medium text-lg hover:bg-[#25D366]/15 transition-colors"
            >
              <MessageCircle className="w-6 h-6"/>
              +91 79802 19737
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════ */}
      <section className="bg-[var(--green-deep)] py-24 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-leaves" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M15 30 Q22 5 30 30 Q22 55 15 30Z" fill="none" stroke="white" strokeWidth="1"/>
              <path d="M40 10 Q47 30 40 50 Q33 30 40 10Z" fill="none" stroke="white" strokeWidth="0.7"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-leaves)"/>
        </svg>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-snug"
          >
            Ready to Begin Your<br/>Healing Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-white/75 text-lg mb-12 max-w-xl mx-auto"
          >
            Book a consultation with our specialists today and take the first step towards personalised, holistic wellness.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              data-testid="button-cta-book"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[var(--gold)] text-[var(--text-dark)] px-10 py-4 rounded-full font-medium hover:bg-[var(--gold-light)] transition-all hover:scale-105 shadow-lg"
            >
              Book Now
            </button>
            <Link
              href="/contact"
              data-testid="link-cta-contact"
              className="bg-transparent border-2 border-white/60 text-white px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
