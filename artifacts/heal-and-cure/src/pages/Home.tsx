import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import {
  Award, Users, Leaf, Stethoscope, Heart, Baby, Apple,
  Activity, Zap, MessageCircle, ChevronLeft, ChevronRight,
  FlaskConical, Target, Sparkles, BookOpen, Shield, Search, Phone
} from "lucide-react";
import drSouvikImg from "@assets/Doc_Men_1778067737072.jpeg";
import pampitaImg from "@assets/Doc_Women_1778067734674.jpeg";

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  useEffect(() => { if (isInView) motionValue.set(value); }, [isInView, motionValue, value]);
  useEffect(() => springValue.on("change", (latest) => {
    if (ref.current) ref.current.textContent = Math.floor(latest).toString();
  }), [springValue]);
  return <span ref={ref}>0</span>;
}

const testimonials = [
  { id: 1, text: "After years of struggling with chronic sinusitis, Dr. Souvik's treatment gave me lasting relief. No more recurring infections. The personalised approach is unlike anything I've experienced before.", name: "Ananya Roy", location: "Kolkata" },
  { id: 2, text: "Pampita di completely transformed my diet for diabetes. My HbA1c dropped from 9.2 to 6.8 in just four months. Remarkable results that no medication alone could achieve.", name: "Suresh Ghosh", location: "Serampore" },
  { id: 3, text: "My daughter had frequent ear infections and conventional medicine wasn't helping. After homeopathic treatment with Dr. Souvik, she's been infection-free for over a year.", name: "Priya Sharma", location: "Kolkata" },
  { id: 4, text: "The personalised diet plan from Pampita helped me lose 12 kg while managing my thyroid condition. I feel completely new. Every consultation feels thoughtful and caring.", name: "Rupa Chatterjee", location: "Hooghly" },
  { id: 5, text: "Dr. Souvik is incredibly knowledgeable and patient. He listened to every symptom and the constitutional treatment worked wonders for my chronic migraines. Two years free now.", name: "Amit Bose", location: "Howrah" },
  { id: 6, text: "I came with PCOD and irregular cycles. Within three months of treatment, everything normalised. Truly grateful for this clinic and the care they showed throughout.", name: "Suchitra Das", location: "Dunlop" },
  { id: 7, text: "Pampita's nutrition guidance for my elderly mother's kidney disease has been life-changing. Her creatinine levels have stabilised and she feels so much better.", name: "Rajesh Mukherjee", location: "Barrackpore" },
  { id: 8, text: "Brought my son here for eczema that no cream could control. Homeopathy healed it from within — completely clear skin now. Heal & Cure is a blessing for our family.", name: "Nilufar Begum", location: "Shyamnagar" },
];

const blogPosts = [
  { category: "HOMEOPATHY", color: "bg-[var(--green-deep)]", title: "Can Homeopathy Help Manage Diabetes?", excerpt: "Explore how constitutional treatment addresses blood sugar imbalance at the root cause level.", slug: "/health-tips/homeopathy-for-diabetes" },
  { category: "NUTRITION", color: "bg-[var(--teal)]", title: "5 Diet Mistakes Diabetics Make Daily", excerpt: "Common pitfalls in diabetic diet planning that silently worsen blood sugar control over time.", slug: "/health-tips/diet-mistakes-for-diabetics" },
  { category: "LIFESTYLE", color: "bg-[var(--green-mid)]", title: "What Is Constitutional Homeopathic Treatment?", excerpt: "Understanding individualized medicine — the cornerstone of classical homoeopathy practice.", slug: "/health-tips/constitutional-homeopathic-treatment" },
];

const philosophyPillars = [
  { icon: Search, title: "Research-Driven Approach", body: "Every prescription is grounded in classical homoeopathic literature and informed by evidence-based clinical research, ensuring treatments that go beyond symptom management." },
  { icon: Target, title: "Patient-Centric Healing", body: "We listen deeply before we prescribe. Your unique constitution, lifestyle, emotional history, and health goals guide every individualised treatment plan." },
  { icon: Sparkles, title: "Integrated Wellness", body: "By combining homoeopathy with expert clinical nutrition, we address the complete bio-individual — mind, body, metabolism, and long-term vitality." },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, [isPaused]);

  const prev = () => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveTestimonial((p) => (p + 1) % testimonials.length);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="pt-20 bg-[var(--bg-warm)] relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-warm)] via-[var(--bg-warm)]/95 to-transparent z-10 pointer-events-none lg:w-[62%] w-full"/>

        {/* Hero photo — right side, full height */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/hero-image.png"
            alt="Heal & Cure — Personalised Homoeopathy and Nutrition Care"
            className="absolute right-0 top-0 h-full w-[55%] object-cover object-center hidden lg:block"
          />
          <div className="absolute right-0 top-0 h-full w-[55%] bg-gradient-to-l from-transparent via-transparent to-[var(--bg-warm)] hidden lg:block"/>
        </div>

        <div className="container mx-auto px-4 relative z-20 py-20">
          <div className="max-w-xl lg:max-w-[52%]">
            {/* Heading */}
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-[38px] md:text-[44px] lg:text-[48px] font-bold leading-[1.2] text-[var(--text-dark)] mb-4">
              <span className="whitespace-nowrap">Personalised Nutrition &amp;</span>{" "}
              <span className="whitespace-nowrap">Homeopathic Healthcare</span>
            </motion.h1>

            {/* Gold rule */}
            <motion.div initial={{ width: 0 }} animate={{ width: 56 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="h-0.5 bg-[var(--gold)] mb-5"/>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
              className="font-sans text-base text-[var(--text-muted)] leading-relaxed mb-8 max-w-md">
              Integrated care that combines the science of nutrition with the healing power of homeopathy for lasting wellness.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3">
              <button data-testid="button-hero-book"
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 bg-[var(--green-deep)] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[var(--green-mid)] transition-all text-sm shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Book Appointment
              </button>
              <a data-testid="link-hero-whatsapp" href="https://wa.me/918961661721" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-[var(--border)] text-[var(--green-deep)] px-7 py-3.5 rounded-full font-medium hover:bg-[var(--bg-cream)] transition-all text-sm shadow-sm">
                <MessageCircle className="w-4 h-4"/>
                Chat With Clinic
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ TRUST BAR ═════════════════════════════════════════ */}
      <section className="bg-[var(--bg-cream)] py-8 border-y border-[var(--border)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {[
              { icon: Award, value: "10+", label: "Years Clinical Experience" },
              { icon: FlaskConical, value: "AYUSH", label: "Ministry Research Affiliation" },
              { icon: Users, value: "500+", label: "Patients Supported" },
              { icon: Heart, value: "Integrated", label: "Nutrition + Homeopathy Care" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--border)] bg-white">
                <div className="w-9 h-9 rounded-lg bg-[var(--green-deep)]/8 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-[var(--green-deep)]"/>
                </div>
                <div className="min-w-0">
                  <div className="font-serif text-base font-bold text-[var(--green-deep)] leading-tight">{item.value}</div>
                  <div className="font-sans text-[11px] text-[var(--text-muted)] leading-tight mt-0.5">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RESEARCH EXCELLENCE BANNER ═══════════════════════ */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="bg-[var(--green-deep)] text-white py-16 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "28px 28px" }}/>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8 flex flex-col gap-4">
              <span className="text-[var(--gold-light)] font-sans font-semibold tracking-[0.2em] text-[11px] uppercase">Research Excellence</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-snug">
                Rooted in Government-Recognised Clinical Research
              </h2>
              <p className="font-sans text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
                Dr. Souvik Dutta currently serves as <strong className="text-white font-semibold">Senior Research Fellow</strong> at the Dr. Anjali Chatterji Regional Research Institute for Homoeopathy, Kolkata — under CCRH, Ministry of Ayush, Government of India. He also served as Ex House Physician (Surgery &amp; ENT) at Mahesh Bhattacharyya Homoeopathic Medical College, and was formerly attached to M.R. Bangur Hospital, Kolkata. This depth of institutional training informs every clinical decision at Heal &amp; Cure.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative w-44 h-44">
                <div className="absolute inset-0 rounded-full border-2 border-[var(--gold)]/40 animate-[spin_18s_linear_infinite]" style={{ borderStyle: "dashed" }}/>
                <div className="absolute inset-3 rounded-full border border-[var(--gold)]/60"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-0.5 p-4">
                  <Shield className="w-6 h-6 text-[var(--gold)] mb-1"/>
                  <span className="font-serif text-[var(--gold-light)] font-bold text-xl leading-none">CCRH</span>
                  <div className="w-8 h-px bg-[var(--gold)]/50 my-1.5"/>
                  <span className="font-sans text-[var(--gold)] text-[9px] tracking-widest uppercase leading-tight">Ministry of Ayush</span>
                  <span className="font-sans text-[var(--gold)] text-[8px] tracking-widest uppercase leading-tight mt-0.5">Govt. of India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ══ MEET OUR EXPERTS ══════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Our Clinical Directorship</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mt-3 mb-3">Meet Our Experts</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-lg text-[var(--text-muted)]">Dual expertise, one destination</motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 max-w-5xl mx-auto">
            {/* Dr. Souvik */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="group bg-white rounded-3xl shadow-[0_8px_40px_rgba(27,67,50,0.10)] hover:shadow-[0_20px_60px_rgba(27,67,50,0.18)] transition-all duration-500 hover:-translate-y-2 border border-[var(--border)] overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={drSouvikImg} alt="Dr. Souvik Dutta — Homoeopathy Specialist, Kolkata" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"/>
                <div className="absolute top-4 right-4 bg-[var(--gold)] text-white text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-lg border border-white/20">
                  Phone Consult
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-8">
                  <span className="inline-block bg-[var(--green-deep)] text-white text-xs font-sans font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
                    Homoeopathy
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-3xl text-[var(--green-deep)] mb-1">Dr. Souvik Dutta</h3>
                <p className="text-[var(--gold)] font-sans text-sm font-medium mb-4">BHMS, MD(Hom.), MBA (Healthcare)</p>
                <p className="font-sans text-[var(--text-muted)] text-sm mb-5 leading-relaxed flex-1">
                  Senior Research Fellow at CCRH, Ministry of Ayush. 10+ years of clinical experience with expertise in chronic, lifestyle, and paediatric conditions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["BHMS", "MD(Hom.)", "CCRH Fellow", "10+ Yrs", "Phone Consult"].map((b) => (
                    <span key={b} className="text-xs bg-[var(--bg-cream)] text-[var(--green-deep)] border border-[var(--border)] px-3 py-1 rounded-full font-medium">{b}</span>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <a href="tel:+917980219737" className="flex items-center justify-center gap-2 text-sm text-[var(--green-deep)] font-medium font-sans hover:underline">
                    <Phone className="w-4 h-4"/> +91 7980219737
                  </a>
                  <Link href="/book" data-testid="button-book-souvik"
                    className="w-full bg-[var(--green-deep)] text-white py-3.5 rounded-full font-medium hover:bg-[var(--green-mid)] transition-all hover:scale-[1.02] text-center block">
                    Book with Dr. Souvik
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Pampita */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="group bg-white rounded-3xl shadow-[0_8px_40px_rgba(27,67,50,0.10)] hover:shadow-[0_20px_60px_rgba(27,67,50,0.18)] transition-all duration-500 hover:-translate-y-2 border border-[var(--border)] overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={pampitaImg} alt="Pampita Banerjee — Clinical Nutritionist & Diabetic Educator, Kolkata" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"/>
                {/* Phone consult badge — visible top right */}
                <div className="absolute top-4 right-4 bg-[var(--gold)] text-white text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-lg border border-white/20">
                  Phone Consult
                </div>
                {/* Label on image — high visibility */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-8">
                  <span className="inline-block bg-[var(--teal)] text-white text-xs font-sans font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
                    Nutrition &amp; Dietetics
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-3xl text-[var(--green-deep)] mb-1">Pampita Banerjee</h3>
                <p className="text-[var(--gold)] font-sans text-sm font-medium mb-4">MSc Food &amp; Nutrition | Therapeutic Dietitian</p>
                <p className="font-sans text-[var(--text-muted)] text-sm mb-5 leading-relaxed flex-1">
                  Expert therapeutic dietitian and certified Diabetic Educator specialising in clinical nutrition for diabetes, PCOD, kidney disease, and metabolic conditions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["MSc Nutrition", "Diabetic Educator", "Phone Consult"].map((b) => (
                    <span key={b} className="text-xs bg-[var(--bg-cream)] text-[var(--teal)] border border-[var(--border)] px-3 py-1 rounded-full font-medium">{b}</span>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <a href="tel:+918961661721" className="flex items-center justify-center gap-2 text-sm text-[var(--teal)] font-medium font-sans hover:underline">
                    <Phone className="w-4 h-4"/> +91 8961661721
                  </a>
                  <Link href="/book" data-testid="button-book-pampita"
                    className="w-full bg-[var(--teal)] text-white py-3.5 rounded-full font-medium hover:opacity-85 transition-all hover:scale-[1.02] text-center block">
                    Book with Pampita
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ═════════════════════════════════════════ */}
      <section className="py-24 bg-[var(--bg-cream)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">What We Treat</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mt-3 mb-3">Specialised Care</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-lg text-[var(--text-muted)]">Comprehensive holistic treatments tailored for your needs</motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              { icon: Stethoscope, title: "Classical Homeopathy", sub: "Constitutional prescribing for deep, lasting healing of chronic conditions.", cat: "green" },
              { icon: Heart, title: "Therapeutic Nutrition", sub: "Evidence-based, personalised meal plans designed for your specific diagnosis.", cat: "teal" },
              { icon: Baby, title: "Children's Wellness", sub: "Gentle, safe homoeopathic remedies for paediatric ailments and immunity.", cat: "green" },
              { icon: Activity, title: "Diabetes Management", sub: "Integrated diet and homoeopathic care for stable, sustainable blood glucose.", cat: "teal" },
              { icon: Zap, title: "Lifestyle Disease Care", sub: "Root-cause treatment for hypertension, PCOD, thyroid and metabolic disorders.", cat: "green" },
              { icon: BookOpen, title: "Preventive Health Plans", sub: "Seasonal immunity, family wellness programmes and nutrition education.", cat: "teal" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white p-7 rounded-2xl border-l-4 border-transparent hover:border-l-[var(--gold)] hover:shadow-md transition-all duration-300 group cursor-default">
                <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center transition-colors duration-300 ${s.cat === "green" ? "bg-[var(--green-deep)]/8 text-[var(--green-deep)] group-hover:bg-[var(--gold)]/10 group-hover:text-[var(--gold)]" : "bg-[var(--teal)]/8 text-[var(--teal)] group-hover:bg-[var(--gold)]/10 group-hover:text-[var(--gold)]"}`}>
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

      {/* ══ PHILOSOPHY OF GENTLE HEALING ═════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
            {/* Left — clinic image */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-4 flex items-center justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(27,67,50,0.15)]">
                <img src="/philosophy-image.png" alt="Holistic healing — homeopathy remedies and herbs" className="w-full h-auto object-cover"/>
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-[var(--gold)]/15 pointer-events-none"/>
              </div>
            </motion.div>

            {/* Right — text */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Our Approach</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mb-2">
                The Philosophy of <span className="text-[var(--green-deep)]">Gentle Healing</span>
              </motion.h2>
              <div className="flex flex-col gap-5 mt-2">
                {philosophyPillars.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex gap-5 p-5 rounded-2xl border border-[var(--border)] hover:border-[var(--gold)]/40 hover:bg-[var(--bg-cream)]/40 transition-all group">
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

      {/* ══ GOOGLE REVIEWS STRIP ══════════════════════════════ */}
      <section className="py-10 bg-white border-y border-[var(--border)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-4">
              <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <p className="font-serif text-2xl text-[var(--text-dark)] font-semibold leading-none">5.0</p>
                <p className="font-sans text-xs text-[var(--text-muted)] mt-0.5">Google Rating</p>
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#F9AB00"><path d="M10 1l2.39 6.26H19l-5.31 3.86 2.02 6.26L10 13.27l-5.71 4.11 2.02-6.26L1 7.26h6.61z"/></svg>
                ))}
              </div>
              <p className="font-sans text-sm text-[var(--text-muted)]">Rated 5 stars by our patients</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[var(--border)]"/>
            <a href="https://share.google/LEq7WsRQdaZfluGZF" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium font-sans text-[var(--green-deep)] hover:text-[var(--gold)] transition-colors border border-[var(--border)] px-5 py-2.5 rounded-full hover:border-[var(--gold)]/40 hover:bg-[var(--bg-cream)] transition-all">
              Read our Google Reviews →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═════════════════════════════════════ */}
      <section className="py-24 bg-[var(--bg-cream)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[var(--gold)]/4 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"/>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--green-deep)]/4 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"/>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Patient Stories</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mt-3 mb-3">Patient Experiences</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-sans text-lg text-[var(--text-muted)]">Stories from patients who found their path to wellness</motion.p>
          </div>

          <div className="max-w-4xl mx-auto" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div className="relative bg-white rounded-3xl shadow-[0_12px_50px_rgba(27,67,50,0.10)] p-10 md:p-14 overflow-hidden">
              <div className="absolute top-4 left-8 font-serif text-[var(--gold)] opacity-20 select-none" style={{ fontSize: "130px", lineHeight: 1 }}>&ldquo;</div>
              <AnimatePresence mode="wait">
                <motion.div key={activeTestimonial} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.45 }} className="relative z-10">
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(5)].map((_, si) => <span key={si} className="text-[var(--gold)] text-2xl">★</span>)}
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
              <button data-testid="button-testimonial-prev" onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-[var(--border)] flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors z-20">
                <ChevronLeft className="w-5 h-5"/>
              </button>
              <button data-testid="button-testimonial-next" onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-[var(--border)] flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors z-20">
                <ChevronRight className="w-5 h-5"/>
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} data-testid={`button-testimonial-dot-${i}`} onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-8 bg-[var(--gold)]" : "w-2 bg-[var(--border)]"}`}/>
              ))}
            </div>
            <div className="text-center mt-8">
              <a data-testid="link-google-reviews" href="https://share.google/LEq7WsRQdaZfluGZF" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--green-deep)] font-medium font-sans hover:text-[var(--gold)] transition-colors">
                Read All Reviews on Google →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HEALTH JOURNAL PREVIEW ═══════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">From Our Desk</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mt-2">Health &amp; Wellness Tips</motion.h2>
            </div>
            <Link href="/health-tips" data-testid="link-all-tips" className="font-sans text-[var(--green-deep)] font-medium hover:text-[var(--gold)] transition-colors text-sm">Read All Tips →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`${post.color} px-6 py-8 relative overflow-hidden`}>
                  <div className="absolute right-4 top-3 opacity-10"><BookOpen className="w-16 h-16 text-white"/></div>
                  <span className="inline-block bg-white/20 text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[var(--text-dark)] mb-3 leading-snug group-hover:text-[var(--green-deep)] transition-colors">{post.title}</h3>
                  <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed mb-5">{post.excerpt}</p>
                  <Link href={post.slug} className="font-sans text-sm text-[var(--gold)] font-medium hover:underline">Read More →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOOKING CTA CARD ══════════════════════════════════ */}
      <section id="booking" className="py-20 bg-[var(--bg-cream)]">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-[var(--border)] shadow-[0_8px_40px_rgba(27,67,50,0.10)] p-10 md:p-14 text-center">
            <span className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Schedule a Visit</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-dark)] mt-3 mb-4 leading-snug">
              Ready to Book a Consultation?
            </h2>
            <p className="font-sans text-base text-[var(--text-muted)] leading-relaxed mb-8 max-w-md mx-auto">
              Our clinic team will help you schedule the right consultation based on your health concerns and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Link href="/book" data-testid="button-booking-cta"
                className="flex items-center justify-center gap-2 bg-[var(--green-deep)] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[var(--green-mid)] transition-all text-sm shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Book Appointment
              </Link>
              <a data-testid="link-whatsapp-booking" href="https://wa.me/918961661721" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white border border-[var(--border)] text-[var(--green-deep)] px-8 py-3.5 rounded-full font-medium hover:bg-[var(--bg-cream)] transition-all text-sm shadow-sm">
                <MessageCircle className="w-4 h-4"/>
                Chat With Clinic
              </a>
            </div>
            <p className="font-sans text-xs text-[var(--text-muted)] flex items-center justify-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[var(--gold)]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Appointment requests are confirmed personally by our clinic team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA BANNER ══════════════════════════════════════ */}
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
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-snug">
            Ready to Begin Your<br/>Healing Journey?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-sans text-white/75 text-lg mb-12 max-w-xl mx-auto">
            Book a consultation with our specialists today and take the first step towards personalised, holistic wellness.
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <button data-testid="button-cta-book"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[var(--gold)] text-[var(--text-dark)] px-10 py-4 rounded-full font-medium hover:bg-[var(--gold-light)] transition-all hover:scale-105 shadow-lg">
              Book Now
            </button>
            <Link href="/contact" data-testid="link-cta-contact"
              className="bg-transparent border-2 border-white/60 text-white px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
