import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { AlertTriangle, Eye, EyeOff, ArrowRight } from "lucide-react";

import onchoBefore from "@assets/1._Onchomycosis.jpg_1779095173081.jpeg";
import onchoAfter from "@assets/2._Onchomycosis.jpg_1779095181977.jpeg";
import sialoBefore from "@assets/1._Sublingual_Sialolithiasis.jpg_1779095189352.jpeg";
import sialoAfter from "@assets/2._Sublingual_Sialolithiasis.jpg_1779095199108.jpeg";
import pederusBefore from "@assets/Pic_1.1_Pederus_Dermatitis.jpg_1779095212177.jpeg";
import pederusAfter from "@assets/Pic_2.1_Pederus_Dermatitis.jpg_1779095219001.jpeg";
import dietBefore1 from "@assets/Diet_Before_1_1779095226834.jpeg";
import dietAfter1 from "@assets/Diet_After_1_1779095230122.jpeg";
import diet2 from "@assets/Diet_2_1779095247811.jpeg";
import diet3 from "@assets/Diet_3_1779095251338.jpeg";

interface HomeoCase {
  condition: string;
  subtitle: string;
  before: string;
  after: string;
  outcome: string;
  duration: string;
}

const homeoCases: HomeoCase[] = [
  {
    condition: "Onychomycosis",
    subtitle: "Nail Fungal Infection",
    before: onchoBefore,
    after: onchoAfter,
    outcome: "Complete structural recovery of the affected nail within 4–6 months of constitutional homoeopathic treatment. No antifungal drugs administered.",
    duration: "4–6 months",
  },
  {
    condition: "Sublingual Sialolithiasis",
    subtitle: "Salivary Gland Stone",
    before: sialoBefore,
    after: sialoAfter,
    outcome: "Successful dissolution and expulsion of the sublingual salivary stone without surgical intervention, achieved through targeted homoeopathic remedies.",
    duration: "6–8 weeks",
  },
  {
    condition: "Pederus Dermatitis",
    subtitle: "Beetle-induced Skin Lesion",
    before: pederusBefore,
    after: pederusAfter,
    outcome: "Complete resolution of the inflammatory skin lesion caused by Pederus beetle contact, with no residual scarring under homoeopathic management.",
    duration: "3–4 weeks",
  },
];

function BeforeAfterCard({ c, revealed, onReveal }: { c: HomeoCase; revealed: boolean; onReveal: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="grid grid-cols-2">
        {/* Before */}
        <div className="relative">
          <div
            className={`aspect-[4/3] overflow-hidden relative ${!revealed ? "cursor-pointer" : ""}`}
            onClick={!revealed ? onReveal : undefined}
          >
            <img
              src={c.before}
              alt={`Before — ${c.condition}`}
              className={`w-full h-full object-cover transition-all duration-500 ${!revealed ? "blur-xl scale-105" : ""}`}
            />
            {!revealed && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 gap-2">
                <Eye className="w-6 h-6 text-white/80" />
                <span className="text-white text-xs font-sans font-semibold uppercase tracking-wider">Tap to reveal</span>
              </div>
            )}
          </div>
          <div className="px-3 py-2 bg-red-50 border-t border-red-100">
            <span className="font-sans text-xs font-bold text-red-600 uppercase tracking-widest">Before</span>
          </div>
        </div>
        {/* After */}
        <div>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={c.after} alt={`After — ${c.condition}`} className="w-full h-full object-cover" />
          </div>
          <div className="px-3 py-2 bg-green-50 border-t border-green-100">
            <span className="font-sans text-xs font-bold text-[var(--green-deep)] uppercase tracking-widest">After</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl text-[var(--text-dark)] leading-snug">{c.condition}</h3>
        <p className="font-sans text-xs text-[var(--gold)] font-semibold uppercase tracking-wider mt-0.5 mb-3">{c.subtitle}</p>
        <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed mb-3">{c.outcome}</p>
        <span className="font-sans text-[11px] font-semibold text-[var(--green-deep)] bg-[var(--bg-cream)] border border-[var(--border)] px-3 py-1 rounded-full">
          Recovery: {c.duration}
        </span>
      </div>
    </motion.div>
  );
}

export default function PatientResults() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="pt-20 bg-[var(--bg-warm)] min-h-screen">

      {/* Hero */}
      <section className="py-20 bg-[var(--green-deep)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[var(--gold-light)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">
            Clinical Outcomes
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-white mt-3 mb-4">
            Patient <span className="text-[var(--gold-light)]">Results</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-sans text-lg text-white/70 leading-relaxed">
            Documented before-and-after clinical outcomes from homoeopathic and therapeutic nutrition treatments at Heal &amp; Cure Health Clinic.
          </motion.p>
        </div>
      </section>

      {/* ── HOMOEOPATHY RESULTS ──────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="text-center mb-8">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">
              Dr. Souvik Dutta · MD (Hom.)
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl text-[var(--text-dark)] mt-3">
              Homoeopathy Clinical Results
            </motion.h2>
          </div>

          {/* Disclaimer */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-sans font-semibold text-amber-800 text-sm">Medical Imagery Disclaimer</p>
                <p className="font-sans text-amber-700 text-sm mt-0.5 leading-relaxed">
                  The "Before" images show clinical conditions including skin lesions and oral tissue that some viewers may find uncomfortable. All images are shared for educational purposes with patient consent. "After" images are always visible.
                </p>
              </div>
            </div>
            <button
              onClick={() => setRevealed((v) => !v)}
              className="btn-fill shrink-0 flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              {revealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {revealed ? "Hide Before Images" : "Reveal Before Images"}
            </button>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeoCases.map((c, i) => (
              <BeforeAfterCard key={i} c={c} revealed={revealed} onReveal={() => setRevealed(true)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NUTRITION & DIET RESULTS ─────────────────────────── */}
      <section className="py-20 bg-[var(--bg-cream)]">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="text-center mb-12">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[var(--teal)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">
              Mrs. Pampita Banerjee · MSc Food &amp; Nutrition
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl text-[var(--text-dark)] mt-3">
              Therapeutic Nutrition Results
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="font-sans text-[var(--text-muted)] mt-3 max-w-xl mx-auto leading-relaxed">
              Sustainable weight and health outcomes achieved through personalised therapeutic diet — without medication or surgery.
            </motion.p>
          </div>

          {/* Before / After Photos */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm mb-8">
            <div className="grid grid-cols-2">
              <div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={dietBefore1} alt="Before — Therapeutic Nutrition" className="w-full h-full object-cover object-top" />
                </div>
                <div className="px-4 py-3 bg-red-50 border-t border-red-100">
                  <span className="font-sans text-xs font-bold text-red-600 uppercase tracking-widest">Before</span>
                </div>
              </div>
              <div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={dietAfter1} alt="After — Therapeutic Nutrition" className="w-full h-full object-cover object-top" />
                </div>
                <div className="px-4 py-3 bg-green-50 border-t border-green-100">
                  <span className="font-sans text-xs font-bold text-[var(--green-deep)] uppercase tracking-widest">After</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-[var(--teal)] mb-2">Weight Management — Personalised Therapeutic Diet</h3>
              <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                Significant body composition improvement achieved through Pampita Banerjee's personalised therapeutic diet plan — no fad diets, no medications. Treatment based on detailed metabolic assessment and tailored nutritional guidance.
              </p>
            </div>
          </motion.div>

          {/* Patient Testimonial Screenshots */}
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm">
              <img src={diet2} alt="Patient testimonial — Mampi Roy" className="w-full block" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm">
              <img src={diet3} alt="Patient testimonial — weight loss" className="w-full block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--green-deep)]">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-white mb-4">
            Begin Your Healing Journey
          </motion.h2>
          <p className="font-sans text-white/70 mb-8 leading-relaxed">
            These results represent real patients treated at Heal &amp; Cure Health Clinic. Book a consultation to discuss your individual health goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/book"
              className="btn-fill inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--text-dark)] px-8 py-3.5 rounded-full font-semibold hover:bg-[var(--gold-light)] transition-all hover:scale-105">
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/918961661727" target="_blank" rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-2 bg-transparent border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
