import { motion } from "framer-motion";
import drSouvikImg from "@assets/Doc_Men_1778067737072.jpeg";
import pampitaImg from "@assets/Doc_Women_1778067734674.jpeg";
import { CheckCircle2 } from "lucide-react";

const clinicPoints = [
  "Heal and Cure Health Clinic provides patient-centered, integrative healthcare focused on identifying the root cause of disease.",
  "Our approach combines individualized homeopathic treatment with evidence-based nutrition and lifestyle guidance.",
  "Each treatment plan is developed after a detailed clinical assessment and tailored to the patient's specific needs.",
  "We aim to restore physiological balance, strengthen immunity, and support long-term health outcomes.",
  "Our services address acute and chronic conditions, including digestive, hormonal, dermatological, and metabolic disorders.",
  "We are committed to safe, ethical, and personalized care that improves overall health and quality of life.",
];

const souvikCredentials = [
  "BHMS",
  "MD (Hom.)",
  "MBA (Healthcare)",
  "Senior Research Fellow, CCRH — Dr. Anjali Chatterji Regional Research Institute for Homoeopathy, Kolkata (Ministry of Ayush, Govt. of India)",
  "Formerly M.R. Bangur College & Hospital, 10+ years",
  "Formerly attached to M.R. Bangur Hospital",
];

const pampitaCredentials = [
  "MSc Food & Nutrition",
  "Therapeutic Dietitian",
  "Certified Diabetic Educator",
  "Independent Researcher",
  "Attached with The Care Nursing Home, Uttarpara and Fortis Hospital & Kidney Institute",
];

export default function About() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-[var(--green-deep)] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "36px 36px" }}/>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[var(--gold-light)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">
            About Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-white mt-3 mb-4">
            Heal &amp; Cure<br className="hidden md:block"/> Health Clinic
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-sans text-white/70 text-base leading-relaxed">
            Integrative healthcare rooted in homoeopathy and therapeutic nutrition — treating the root cause, not just the symptom.
          </motion.p>
        </div>
      </section>

      {/* Clinic Description */}
      <section className="py-16 bg-[var(--bg-cream)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-[var(--border)]"/>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Our Clinic</span>
            <div className="h-px flex-1 bg-[var(--border)]"/>
          </motion.div>
          <ul className="space-y-4">
            {clinicPoints.map((text, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0 mt-2.5"/>
                <p className="font-sans text-[var(--text-dark)] leading-relaxed">{text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-24 bg-[var(--bg-warm)]">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Dr Souvik */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={drSouvikImg} alt="Dr. Souvik Dutta — Consultant Homoeopathic Physician" className="w-full h-full object-cover"/>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)] mb-2 block">Homoeopathy</span>
                <h2 className="font-serif text-4xl text-[var(--green-deep)] mb-1">Dr. Souvik Dutta</h2>
                <p className="text-[var(--gold)] font-medium font-sans text-sm">Consultant Homoeopathic Physician</p>
              </div>
              <p className="font-sans text-[var(--text-muted)] leading-relaxed text-sm">
                Dr. Souvik Dutta is a distinguished homoeopathic practitioner and active research fellow with over a decade of clinical experience. Senior Research Fellow at the Dr. Anjali Chatterji Regional Research Institute for Homoeopathy, Kolkata under CCRH, Ministry of Ayush, Govt. of India. His approach combines classical homoeopathy with modern medical insights and evidence-based research.
              </p>
              <ul className="space-y-3">
                {souvikCredentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--green-deep)] shrink-0 mt-0.5"/>
                    <span className="font-sans text-sm text-[var(--text-dark)]">{cred}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Pampita */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:order-2 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={pampitaImg} alt="Mrs. Pampita Banerjee — Consultant Therapeutic Dietician" className="w-full h-full object-cover"/>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:order-1 flex flex-col gap-6"
            >
              <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[var(--teal)] mb-2 block">Nutrition &amp; Dietetics</span>
                <h2 className="font-serif text-4xl text-[var(--teal)] mb-1">Mrs. Pampita Banerjee</h2>
                <p className="text-[var(--gold)] font-medium font-sans text-sm">Consultant Therapeutic Dietician &amp; Diabetic Educator</p>
              </div>
              <p className="font-sans text-[var(--text-muted)] leading-relaxed text-sm">
                Pampita Banerjee specialises in therapeutic nutrition for chronic disease, lifestyle disorders, malnutrition treatment, and obesity management. A Certified Diabetic Educator and Independent Researcher with 5+ years of clinical experience, she creates sustainable, personalised diet plans that heal from within — managing all types of acute and chronic health conditions through the science of nutrition.
              </p>
              <ul className="space-y-3">
                {pampitaCredentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--teal)] shrink-0 mt-0.5"/>
                    <span className="font-sans text-sm text-[var(--text-dark)]">{cred}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
