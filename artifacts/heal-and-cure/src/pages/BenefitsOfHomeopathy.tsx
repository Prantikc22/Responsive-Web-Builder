import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Leaf, Search, Baby, Target, Activity, FlaskConical,
  Heart, ShieldCheck, Smile, Coins, Brain, Sun
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "No Harsh Side Effects",
    body: "Homoeopathic medicines are ultra-diluted, gentle and non-toxic — safe for long-term use without dependency, organ damage, or adverse reactions common in conventional medicines.",
  },
  {
    icon: Search,
    title: "Treats the Root Cause",
    body: "Unlike symptom suppression, homoeopathy identifies and addresses the underlying imbalance causing illness at its very source — leading to longer-lasting recovery.",
  },
  {
    icon: Baby,
    title: "Safe for All Ages",
    body: "From newborns to the elderly, homoeopathic treatment is gentle and suitable for every life stage, including during pregnancy, infancy, and for those with multiple health conditions.",
  },
  {
    icon: Target,
    title: "Highly Individualised",
    body: "Each prescription is unique to you — your constitution, temperament, lifestyle and personal health history guide every remedy selection. No two patients receive the same treatment.",
  },
  {
    icon: Activity,
    title: "Effective for Chronic Conditions",
    body: "Thyroid disorders, skin diseases, PCOD, migraines, allergies and autoimmune conditions respond exceptionally well to deep-acting constitutional homoeopathy.",
  },
  {
    icon: FlaskConical,
    title: "Research-Backed Approach",
    body: "Published randomised controlled trials support homoeopathy's efficacy in conditions like prehypertension, hypothyroidism, skin infections and infertility.",
  },
  {
    icon: ShieldCheck,
    title: "Strengthens Immunity",
    body: "Constitutional homoeopathic treatment works by stimulating your own healing mechanisms — building resilience and reducing susceptibility to recurrent illnesses over time.",
  },
  {
    icon: Heart,
    title: "Addresses Mind & Body",
    body: "Homoeopathy uniquely integrates the emotional and mental state into the prescription. Anxiety, grief, stress, and burnout are addressed alongside physical symptoms.",
  },
  {
    icon: Brain,
    title: "Supports Mental Wellbeing",
    body: "Homoeopathic treatment has shown positive outcomes in managing anxiety, depression, insomnia and emotional disturbances — without the side effects of psychotropic medications.",
  },
  {
    icon: Smile,
    title: "Gentle Paediatric Care",
    body: "Children respond particularly well to homoeopathy. It treats recurrent infections, behavioural challenges, eczema, and developmental concerns safely and without suppression.",
  },
  {
    icon: Sun,
    title: "Complements Other Treatments",
    body: "Homoeopathic care can run alongside conventional medical treatment, helping reduce dosage dependency over time and supporting recovery from the inside out.",
  },
  {
    icon: Coins,
    title: "Cost-Effective Long-Term",
    body: "Homoeopathic medicines are affordable and accessible. As health improves, the frequency of treatment reduces — making it one of the most cost-effective systems of long-term care.",
  },
];

const quotes = [
  {
    text: "Homoeopathy doesn't just treat the disease — it treats the person. Every remedy is chosen not for a label, but for the individual carrying that condition. That is its greatest strength.",
    author: "Dr. Souvik Dutta, MD (Hom.)",
    role: "Senior Research Fellow, CCRH, Ministry of AYUSH",
  },
  {
    text: "The beauty of constitutional homoeopathy lies in its depth. We observe, we listen, we understand — and then we prescribe. The result is healing that goes far beyond the surface.",
    author: "Dr. Souvik Dutta, MD (Hom.)",
    role: "Consultant Homoeopathic Physician, Heal & Cure Health Clinic",
  },
];

export default function BenefitsOfHomeopathy() {
  return (
    <div className="pt-20 bg-[var(--bg-warm)] min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-[var(--green-deep)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "36px 36px" }}/>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[var(--gold-light)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Why Homoeopathy</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-6xl text-white mt-3 mb-4">
            Benefits of <span className="text-[var(--gold-light)]">Homoeopathy</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-sans text-lg text-white/70 leading-relaxed">
            A time-tested system of medicine that heals gently, deeply and permanently — addressing every dimension of your health.
          </motion.p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="bg-white rounded-2xl border border-[var(--border)] p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-[var(--green-deep)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--gold)]/10 transition-colors duration-300">
                  <b.icon className="w-5 h-5 text-[var(--green-deep)] group-hover:text-[var(--gold)] transition-colors duration-300"/>
                </div>
                <h3 className="font-serif text-xl text-[var(--text-dark)] mb-3 leading-snug">{b.title}</h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Souvik Quotes */}
      <section className="py-16 bg-[var(--bg-cream)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">In His Own Words</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--green-deep)] mt-3">Dr. Souvik Dutta on Homoeopathy</h2>
          </div>
          <div className="flex flex-col gap-8">
            {quotes.map((q, i) => (
              <motion.blockquote key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl border border-[var(--border)] p-8 md:p-10 relative">
                <div className="absolute top-6 left-8 text-[var(--gold)]/20 font-serif text-[80px] leading-none select-none">"</div>
                <p className="font-serif text-xl md:text-2xl text-[var(--text-dark)] italic leading-relaxed mb-5 relative z-10">{q.text}</p>
                <footer className="font-sans text-sm">
                  <span className="font-semibold text-[var(--green-deep)]">{q.author}</span>
                  <span className="text-[var(--text-muted)] mx-2">·</span>
                  <span className="text-[var(--text-muted)]">{q.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--green-deep)]">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-white mb-4">
            Ready to Experience Homoeopathy?
          </motion.h2>
          <p className="font-sans text-white/70 mb-8 leading-relaxed">
            Book a consultation with Dr. Souvik Dutta and begin your personalised healing journey at Heal &amp; Cure Health Clinic, Kolkata.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book" className="inline-block bg-[var(--gold)] text-[var(--text-dark)] px-8 py-3.5 rounded-full font-semibold hover:bg-[var(--gold-light)] transition-all hover:scale-105">
              Book a Consultation
            </Link>
            <a href="https://wa.me/918961661727" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
