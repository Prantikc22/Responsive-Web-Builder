import { motion } from "framer-motion";
import drSouvikImg from "@assets/Doc_Men_1778067737072.jpeg";
import pampitaImg from "@assets/Doc_Women_1778067734674.jpeg";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[var(--bg-cream)] py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--green-deep)] mb-6">Our Story</h1>
          <p className="font-sans text-lg text-[var(--text-muted)] leading-relaxed">
            Heal & Cure was founded with a singular vision: to provide Kolkata with a truly integrative approach to healing. We believe that true health is not merely the absence of disease, but a state of complete physical, mental, and social well-being.
          </p>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Dr Souvik */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={drSouvikImg} alt="Dr. Souvik" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div>
                <h2 className="font-serif text-4xl text-[var(--green-deep)] mb-2">Dr. Souvik Dutta</h2>
                <p className="text-[var(--gold)] font-medium">Homeopathic Physician & Consultant</p>
              </div>
              <div className="space-y-4 text-[var(--text-muted)]">
                <p>Dr. Souvik Dutta is a distinguished homoeopathic practitioner with over a decade of clinical experience. His approach combines classical homoeopathy with modern medical insights.</p>
              </div>
              <ul className="space-y-3">
                {[
                  "BHMS",
                  "MD(Hom.)",
                  "MBA (Healthcare)",
                  "Senior Research Fellow CCRH",
                  "Ex House Physician Surgery & ENT at Mahesh Bhattacharyya Homoeopathic Medical College",
                  "Formerly M.R. Bangur Hospital, 10+ years"
                ].map((cred, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--green-deep)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-dark)]">{cred}</span>
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
              <img src={pampitaImg} alt="Pampita" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:order-1 flex flex-col gap-6"
            >
              <div>
                <h2 className="font-serif text-4xl text-[var(--teal)] mb-2">Pampita Banerjee</h2>
                <p className="text-[var(--gold)] font-medium">Clinical Nutritionist & Dietitian</p>
              </div>
              <div className="space-y-4 text-[var(--text-muted)]">
                <p>Pampita Banerjee specializes in therapeutic nutrition, focusing on creating sustainable, practical diet plans that heal from within.</p>
              </div>
              <ul className="space-y-3">
                {[
                  "MSc Food & Nutrition",
                  "Therapeutic Dietitian",
                  "Diabetic Educator",
                  "Phone Consultation Available"
                ].map((cred, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--teal)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-dark)]">{cred}</span>
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
