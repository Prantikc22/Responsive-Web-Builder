import { motion } from "framer-motion";
import { AlertTriangle, Info, XCircle, CheckCircle, BookOpen } from "lucide-react";

const criticisms = [
  {
    heading: "Lack of Scientific Plausibility",
    content: `Many scientists and physicians argue that the extreme dilutions used in homoeopathy go far beyond what chemistry and physics can support. When a substance is diluted past Avogadro's number (approximately 10²³ molecules per mole), statistically no molecules of the original substance remain. Critics contend that a preparation containing no detectable active ingredient cannot have a pharmacological effect beyond placebo.`,
  },
  {
    heading: "Clinical Trial Evidence",
    content: `Multiple systematic reviews and meta-analyses — including those published by the Cochrane Collaboration and the Australian National Health and Medical Research Council (NHMRC) — have concluded that there is no reliable evidence that homoeopathy is more effective than placebo for any health condition. Critics argue that positive findings in individual studies are often attributable to methodological flaws, small sample sizes, or publication bias.`,
  },
  {
    heading: "The Placebo Effect",
    content: `Sceptics propose that any beneficial effects reported from homoeopathic treatment can be explained by the placebo effect, combined with the natural course of illness, regression to the mean, and the therapeutic benefit of a thorough and empathetic consultation. The time and attention given by a homoeopathic practitioner may itself be beneficial, independently of any remedy prescribed.`,
  },
  {
    heading: "Memory of Water — Scientific Concerns",
    content: `The "memory of water" theory, proposed by immunologist Jacques Benveniste in 1988, suggested that water retains a structural imprint of dissolved substances. While the idea attracted significant attention, it has not been independently replicated under controlled conditions. The scientific consensus maintains that no credible physical mechanism has been demonstrated to support this hypothesis.`,
  },
  {
    heading: "Regulatory and Safety Concerns",
    content: `Health regulators in several countries, including the United States FDA and the UK MHRA, have raised concerns about homeopathic products making unsubstantiated medical claims. In some cases, products marketed as homeopathic have been found to contain measurable amounts of active ingredients not listed on labels, leading to recalls. Concerns have also been raised about delayed treatment of serious conditions when patients choose homeopathy over evidence-based medicine.`,
  },
  {
    heading: "Professional Medical Organisations",
    content: `Leading medical bodies, including the British Medical Association, the American Medical Association, and the World Health Organization, have issued statements advising against the use of homoeopathy for serious or life-threatening conditions. They emphasise that recommending homoeopathy over conventional treatments with established efficacy could put patients at risk.`,
  },
];

export default function CriticismOfHomeopathy() {
  return (
    <div className="pt-20 bg-[var(--bg-warm)] min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-[var(--green-deep)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "36px 36px" }}/>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[var(--gold-light)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Balanced Perspective</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-6xl text-white mt-3 mb-4">Criticism of Homoeopathy</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-sans text-lg text-white/70 leading-relaxed">
            An honest, balanced look at the scientific criticisms and ongoing debate surrounding homoeopathic medicine.
          </motion.p>
        </div>
      </section>

      {/* Intro notice */}
      <section className="py-10 pb-0">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-[var(--bg-cream)] border border-[var(--gold)]/30 rounded-2xl p-6 flex items-start gap-3 mb-4">
            <Info className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5"/>
            <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
              At Heal &amp; Cure Health Clinic, we believe in transparency and informed consent. The following represents the mainstream scientific community's criticism of homoeopathy. We encourage all patients to review both the evidence for and against, and to make decisions in consultation with qualified healthcare professionals.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm font-sans text-[var(--text-muted)]">
              <XCircle className="w-4 h-4 text-red-400 shrink-0"/>
              Criticisms sourced from peer-reviewed literature and established health organisations
            </div>
            <div className="flex items-center gap-2 text-sm font-sans text-[var(--text-muted)]">
              <CheckCircle className="w-4 h-4 text-[var(--green-deep)] shrink-0"/>
              We also maintain a page on the <a href="/scientific-basis-of-homeopathy" className="text-[var(--green-deep)] hover:underline font-medium">Scientific Basis of Homoeopathy</a>
            </div>
          </div>
        </div>
      </section>

      {/* Criticisms */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col gap-6">
            {criticisms.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-[var(--border)] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-400"/>
                  </div>
                  <h2 className="font-serif text-xl text-[var(--text-dark)] leading-snug">{c.heading}</h2>
                </div>
                <p className="font-sans text-[var(--text-muted)] text-base leading-relaxed">{c.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-8 bg-[var(--bg-cream)] rounded-2xl border border-[var(--border)] p-8 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[var(--green-deep)] shrink-0 mt-0.5"/>
            <div>
              <p className="font-serif text-lg text-[var(--text-dark)] mb-2">Our Commitment to Transparency</p>
              <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                At Heal &amp; Cure, we practice homoeopathy as evidence-informed, patient-centred care. Dr. Souvik Dutta's published research and clinical work aim to contribute to the growing body of evidence. We encourage patients to ask questions, read widely, and make fully informed choices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
