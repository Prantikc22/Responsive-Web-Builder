import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Stethoscope, Heart, Wind, Brain, Smile, Ear, Leaf,
  Apple, Activity, Scale, Zap, ScrollText, ArrowRight,
  Baby, Layers, Waves, HeartPulse, Bone, Droplets,
  Filter, Dna, CalendarCheck, FlaskConical, Salad
} from "lucide-react";

type Category = "all" | "nutrition" | "homoeopathy";

const nutritionServices = [
  { icon: Apple, title: "Therapeutic Diet Counselling", desc: "Personalised dietary plans designed around your medical profile, lifestyle, and goals — sustainable, science-backed, and providing dietary management for a wide range of acute and chronic health conditions.", cat: "nutrition" as const },
  { icon: Droplets, title: "Diabetes Nutrition Management", desc: "Specialized care for Type 1, Type 2, gestational diabetes, and pre-diabetes through targeted meal planning and carbohydrate-management strategies.", cat: "nutrition" as const },
  { icon: Scale, title: "Weight Management (Diet Only)", desc: "Structured, evidence-based programmes that address the root causes of weight imbalance through therapeutic dietary science alone — no exercise required.", cat: "nutrition" as const },
  { icon: Dna, title: "PCOD/PCOS Hormonal Diet", desc: "Nutritional therapy for hormonal balance, weight management and cycle regulation in PCOD — tailored to your hormonal profile.", cat: "nutrition" as const },
  { icon: Filter, title: "Kidney & Liver Disease Diet", desc: "Disease-specific nutrition for creatinine management, liver health and renal protection — including dietary guidance for UTI, AKI, and CKD.", cat: "nutrition" as const },
  { icon: Salad, title: "Malnutrition Treatment", desc: "Clinically designed dietary rehabilitation for malnourished patients, including therapeutic nutritional support for recovery and sustainable weight gain.", cat: "nutrition" as const },
  { icon: FlaskConical, title: "Kidney Diseases — UTI, AKI, CKD", desc: "Specialised renal diet management for urinary tract infections, acute kidney injury and chronic kidney disease — focused on creatinine control and renal health.", cat: "nutrition" as const },
  { icon: Zap, title: "PCOS & Thyroid Nutrition", desc: "Hormone-supportive nutrition therapy for PCOS, hypothyroidism, and other endocrine conditions, guided by therapeutic dietetics.", cat: "nutrition" as const },
  { icon: Leaf, title: "Digestive Health Nutrition", desc: "Gut-healing dietary protocols for IBS, GERD, bloating, constipation, and other functional digestive disorders.", cat: "nutrition" as const },
  { icon: ScrollText, title: "Personalised Meal Planning", desc: "Customised weekly meal plans that align with your health goals, taste preferences, household routine — using affordable, locally available ingredients.", cat: "nutrition" as const },
];

const homeopathyServices = [
  { icon: Baby, title: "Children's Wellness", desc: "Gentle, safe homoeopathic remedies for paediatric ailments, immunity building, recurrent infections and developmental concerns.", cat: "homoeopathy" as const },
  { icon: Layers, title: "Skin & Allergic Disorders", desc: "Effective homoeopathic care for eczema, psoriasis, tinea, urticaria, acne and chronic skin allergies — treating the cause, not the surface.", cat: "homoeopathy" as const },
  { icon: Waves, title: "Hormonal & Thyroid Care", desc: "Constitutional treatment for PCOD, hypothyroidism, menstrual irregularity and hormonal imbalances — addressing the endocrine system holistically.", cat: "homoeopathy" as const },
  { icon: Wind, title: "Respiratory Conditions", desc: "Root-cause homoeopathic treatment for chronic asthma, sinusitis, recurrent cough, allergic rhinitis and other respiratory disorders.", cat: "homoeopathy" as const },
  { icon: Activity, title: "Pre-Hypertension Management", desc: "Evidence-based homoeopathic care for prehypertension and early-stage blood pressure disorders, with published RCT evidence supporting treatment efficacy.", cat: "homoeopathy" as const },
  { icon: HeartPulse, title: "Infertility Support", desc: "Homoeopathic support for primary and secondary infertility, reproductive health and PCOD — with case-study evidence of successful outcomes.", cat: "homoeopathy" as const },
  { icon: Bone, title: "Joint, Arthritis & Pain", desc: "Deep-acting remedies for arthritis, back pain, migraine, neuralgia and musculoskeletal conditions — personalised homoeopathic pain management.", cat: "homoeopathy" as const },
  { icon: Heart, title: "Chronic Disease Management", desc: "Long-term holistic treatment for persistent conditions — migraines, arthritis, psoriasis, and other chronic ailments using classical constitutional prescribing.", cat: "homoeopathy" as const },
  { icon: Brain, title: "Stress & Anxiety Support", desc: "Constitutional remedies addressing the mind-body connection — helping with anxiety, burnout, sleep disorders, and emotional well-being.", cat: "homoeopathy" as const },
  { icon: Smile, title: "Skin & Hair Concerns", desc: "From eczema, acne, and psoriasis to hair loss and scalp conditions — deep-acting remedies that treat the cause, not just the symptom.", cat: "homoeopathy" as const },
  { icon: Ear, title: "ENT Related Conditions", desc: "Effective homoeopathic care for recurrent ear infections, tonsillitis, sinusitis, nasal polyps, and other ENT disorders.", cat: "homoeopathy" as const },
  { icon: Stethoscope, title: "Digestive Disorders", desc: "Holistic management of IBS, acidity, gastritis, constipation, and other gastrointestinal conditions with personalised homoeopathic care.", cat: "homoeopathy" as const },
  { icon: CalendarCheck, title: "Preventive Health Plans", desc: "Family wellness programmes, seasonal immunity plans and evidence-based nutrition education for long-term health management.", cat: "homoeopathy" as const },
];

const allServices = [...homeopathyServices, ...nutritionServices];

const filters: { key: Category; label: string; activeClass: string }[] = [
  { key: "all", label: "All Treatments", activeClass: "bg-[var(--green-deep)] text-white border-[var(--green-deep)]" },
  { key: "homoeopathy", label: "Homoeopathy", activeClass: "bg-[var(--green-deep)] text-white border-[var(--green-deep)]" },
  { key: "nutrition", label: "Nutrition & Diet", activeClass: "bg-[var(--teal)] text-white border-[var(--teal)]" },
];

function ServiceCard({ icon: Icon, title, desc, cat }: { icon: any; title: string; desc: string; cat: "nutrition" | "homoeopathy" }) {
  const isNutrition = cat === "nutrition";
  const iconClass = isNutrition
    ? "bg-[var(--teal)]/8 text-[var(--teal)] group-hover:bg-[var(--teal)]/14"
    : "bg-[var(--green-deep)]/8 text-[var(--green-deep)] group-hover:bg-[var(--green-deep)]/14";
  const borderClass = isNutrition ? "hover:border-[var(--teal)]/30" : "hover:border-[var(--green-deep)]/30";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`group bg-white rounded-2xl border border-[var(--border)] ${borderClass} p-6 hover:shadow-[0_8px_32px_rgba(27,67,50,0.10)] transition-all duration-300 cursor-default`}
    >
      <div className={`w-11 h-11 rounded-xl mb-4 flex items-center justify-center transition-colors duration-300 ${iconClass}`}>
        <Icon className="w-5 h-5"/>
      </div>
      <div className={`inline-block text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full mb-3 ${isNutrition ? "bg-[var(--teal)]/8 text-[var(--teal)]" : "bg-[var(--green-deep)]/8 text-[var(--green-deep)]"}`}>
        {isNutrition ? "Nutrition & Diet" : "Homoeopathy"}
      </div>
      <h3 className="font-serif text-lg text-[var(--text-dark)] mb-2 leading-snug">{title}</h3>
      <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function Services() {
  const [active, setActive] = useState<Category>("all");

  const displayed = active === "all" ? allServices
    : active === "nutrition" ? nutritionServices
    : homeopathyServices;

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
            Our Treatments
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-sans text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
            Two complementary streams of care — expert clinical nutrition and classical homoeopathy — tailored to your unique health profile and condition.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-[var(--border)] sticky top-[72px] z-40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-6 py-2.5 rounded-full border font-medium text-sm font-sans transition-all duration-200 ${
                  active === f.key
                    ? f.activeClass
                    : "bg-white text-[var(--text-dark)] border-[var(--border)] hover:border-[var(--green-deep)]/30 hover:text-[var(--green-deep)]"
                }`}
              >
                {f.label}
                <span className={`ml-2 text-xs rounded-full px-1.5 py-0.5 ${active === f.key ? "bg-white/20" : "bg-[var(--bg-cream)]"}`}>
                  {f.key === "all" ? allServices.length : f.key === "nutrition" ? nutritionServices.length : homeopathyServices.length}
                </span>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            {active !== "all" && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="mt-5 flex flex-wrap items-center justify-center gap-6"
              >
                {active === "homoeopathy" ? (
                  <div className="flex items-center gap-3 text-sm font-sans text-[var(--text-muted)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--green-deep)] inline-block"/>
                    Led by <strong className="text-[var(--green-deep)] font-medium mx-1">Dr. Souvik Dutta</strong> · BHMS, MD(Hom.) ·
                    <a href="tel:+917980219737" className="ml-1 text-[var(--green-deep)] font-medium hover:underline">+91 7980219737</a>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-sm font-sans text-[var(--text-muted)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--teal)] inline-block"/>
                    Led by <strong className="text-[var(--teal)] font-medium mx-1">Mrs. Pampita Banerjee</strong> · MSc Nutrition, Diabetic Educator ·
                    <a href="tel:+918961661727" className="ml-1 text-[var(--teal)] font-medium hover:underline">+91 8961661727</a>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[var(--bg-warm)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {displayed.map((s, i) => (
                <ServiceCard key={`${s.title}-${i}`} icon={s.icon} title={s.title} desc={s.desc} cat={s.cat}/>
              ))}
            </motion.div>
          </AnimatePresence>
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
            <a href="https://wa.me/918961661727" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-[var(--border)] text-[var(--green-deep)] px-8 py-4 rounded-full font-medium hover:bg-[var(--bg-cream)] transition-all hover:scale-105">
              Chat With Clinic
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
