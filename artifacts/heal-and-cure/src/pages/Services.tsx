import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Stethoscope, Heart, Wind, Brain, Smile, Ear, Leaf,
  Apple, Activity, Scale, Zap, ScrollText, ArrowRight
} from "lucide-react";

const nutritionServices = [
  { icon: Apple, title: "Therapeutic Diet Counseling", desc: "Personalised dietary plans designed around your medical profile, lifestyle, and goals — sustainable, science-backed, and culturally relevant." },
  { icon: Activity, title: "Diabetes Nutrition Management", desc: "Specialized care for Type 1, Type 2, gestational diabetes, and pre-diabetes through targeted meal planning and carb-management strategies." },
  { icon: Scale, title: "Weight Management", desc: "Structured, evidence-based programmes that address the root causes of weight imbalance — without crash dieting or extreme restriction." },
  { icon: Zap, title: "PCOS & Thyroid Nutrition", desc: "Hormone-supportive nutrition therapy for PCOS, hypothyroidism, and other endocrine conditions, guided by therapeutic dietetics." },
  { icon: Leaf, title: "Digestive Health Nutrition", desc: "Gut-healing dietary protocols for IBS, GERD, bloating, constipation, and other functional digestive disorders." },
  { icon: ScrollText, title: "Personalized Meal Planning", desc: "Customised weekly meal plans that align with your health goals, taste preferences, and household routine." },
];

const homeopathyServices = [
  { icon: Heart, title: "Chronic Disease Management", desc: "Long-term holistic treatment for persistent conditions — migraines, arthritis, psoriasis, and other chronic ailments using classical constitutional prescribing." },
  { icon: Wind, title: "Allergy & Respiratory Care", desc: "Gentle, effective remedies for seasonal allergies, sinusitis, asthma, and recurrent respiratory infections — building lasting immunity from within." },
  { icon: Stethoscope, title: "Digestive Disorders", desc: "Holistic management of IBS, acidity, gastritis, constipation, and other gastrointestinal conditions with personalised homoeopathic care." },
  { icon: Brain, title: "Stress & Anxiety Support", desc: "Constitutional remedies addressing the mind-body connection — helping with anxiety, burnout, sleep disorders, and emotional well-being." },
  { icon: Smile, title: "Skin & Hair Concerns", desc: "From eczema, acne, and psoriasis to hair loss and scalp conditions — deep-acting remedies that treat the cause, not just the symptom." },
  { icon: Ear, title: "ENT Related Conditions", desc: "Effective homoeopathic care for recurrent ear infections, tonsillitis, sinusitis, nasal polyps, and other ENT disorders." },
  { icon: Leaf, title: "Holistic Wellness Consultation", desc: "A comprehensive assessment of your physical, mental, and lifestyle health — creating an integrated wellness plan for long-term vitality." },
];

function ServiceCard({ icon: Icon, title, desc, accent }: { icon: any; title: string; desc: string; accent: "green" | "teal" }) {
  const colors = {
    green: {
      icon: "bg-[var(--green-deep)]/8 text-[var(--green-deep)] group-hover:bg-[var(--green-deep)]/14",
      border: "hover:border-[var(--green-deep)]/30",
    },
    teal: {
      icon: "bg-[var(--teal)]/8 text-[var(--teal)] group-hover:bg-[var(--teal)]/14",
      border: "hover:border-[var(--teal)]/30",
    },
  }[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`group bg-white rounded-2xl border border-[var(--border)] ${colors.border} p-6 hover:shadow-[0_8px_32px_rgba(27,67,50,0.10)] transition-all duration-300 cursor-default`}
    >
      <div className={`w-11 h-11 rounded-xl mb-4 flex items-center justify-center transition-colors duration-300 ${colors.icon}`}>
        <Icon className="w-5 h-5"/>
      </div>
      <h3 className="font-serif text-lg text-[var(--text-dark)] mb-2 leading-snug">{title}</h3>
      <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-[var(--green-deep)] text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[var(--gold-light)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">
            Integrated Holistic Care
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl mt-4 mb-5">
            Our Services
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-sans text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
            We offer two complementary streams of care — expert clinical nutrition and classical homoeopathy — tailored to your unique health profile.
          </motion.p>
        </div>
      </section>

      {/* Category 1: Nutrition */}
      <section className="py-24 bg-[var(--bg-warm)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[var(--teal)] flex items-center justify-center">
                <Apple className="w-5 h-5 text-white"/>
              </div>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--gold)] font-semibold">Category 1</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-dark)] mb-3">
              Nutrition & Lifestyle Care
            </h2>
            <p className="font-sans text-[var(--text-muted)] text-base max-w-2xl leading-relaxed">
              Led by <strong className="text-[var(--text-dark)] font-medium">Pampita Banerjee</strong> (MSc Food & Nutrition, Therapeutic Dietitian, Diabetic Educator) — science-based dietary therapy for chronic and lifestyle conditions.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="tel:+918961661721" className="inline-flex items-center gap-2 text-[var(--teal)] text-sm font-medium font-sans hover:text-[var(--green-deep)] transition-colors">
                <Activity className="w-4 h-4"/> +91 8961661721
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nutritionServices.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} accent="teal"/>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-[var(--bg-cream)] py-0.5"/>

      {/* Category 2: Homoeopathy */}
      <section className="py-24 bg-[var(--bg-cream)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[var(--green-deep)] flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white"/>
              </div>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--gold)] font-semibold">Category 2</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-dark)] mb-3">
              Homoeopathic & Holistic Care
            </h2>
            <p className="font-sans text-[var(--text-muted)] text-base max-w-2xl leading-relaxed">
              Led by <strong className="text-[var(--text-dark)] font-medium">Dr. Souvik Dutta</strong> (BHMS, MD(Hom.), MBA, Senior Research Fellow CCRH) — classical constitutional prescribing for lasting, deep healing.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a href="tel:+917980219737" className="inline-flex items-center gap-2 text-[var(--green-deep)] text-sm font-medium font-sans hover:text-[var(--green-mid)] transition-colors">
                <Stethoscope className="w-4 h-4"/> +91 7980219737
              </a>
              <a href="tel:+918961661727" className="inline-flex items-center gap-2 text-[var(--text-muted)] text-sm font-sans hover:text-[var(--green-deep)] transition-colors">
                <Heart className="w-4 h-4"/> +91 8961661727 <span className="text-[var(--text-muted)]/60 text-xs">(emergency)</span>
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {homeopathyServices.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} accent="green"/>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-[var(--text-dark)] mb-5">
            Ready to Begin Your Healing Journey?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="font-sans text-[var(--text-muted)] text-base leading-relaxed mb-8">
            Book a consultation and our team will guide you toward the right specialist and care plan for your needs.
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book"
              className="inline-flex items-center gap-2 bg-[var(--green-deep)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--green-mid)] transition-all hover:scale-105 shadow-lg">
              Book Appointment <ArrowRight className="w-4 h-4"/>
            </Link>
            <a href="https://wa.me/918961661721" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-[var(--border)] text-[var(--green-deep)] px-8 py-4 rounded-full font-medium hover:bg-[var(--bg-cream)] transition-all hover:scale-105">
              Chat With Clinic
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
