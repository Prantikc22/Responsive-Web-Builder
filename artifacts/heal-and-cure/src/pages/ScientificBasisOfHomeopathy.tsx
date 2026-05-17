import { motion } from "framer-motion";
import { FlaskConical, Microscope, Waves, Atom, BookOpen, Info } from "lucide-react";

const sections = [
  {
    icon: FlaskConical,
    heading: "Understanding Homeopathic Dilutions",
    content: `One of the most debated aspects of homeopathy is the use of extremely diluted substances. In many homeopathic preparations, the original substance may be diluted beyond Avogadro's limit, meaning that only trace amounts — or in some cases no measurable molecules — of the starting material are expected to remain. Despite this, proponents of homeopathy suggest that the preparation process may leave behind structural or energetic information capable of influencing biological systems.`,
  },
  {
    icon: Waves,
    heading: `The "Memory of Water" Concept`,
    content: `A commonly discussed theory in homeopathic research is the idea that water may retain a structural "memory" of substances previously dissolved in it. Some laboratory studies using spectroscopy, thermoluminescence, and other physical analysis methods have reported changes in the properties of water depending on its treatment history. Although this theory remains controversial and has not been universally accepted, it continues to be explored as a possible explanation for the action of highly diluted preparations.`,
  },
  {
    icon: Atom,
    heading: "Molecular Clusters and Nanostructures",
    content: `Another scientific hypothesis proposes that during repeated dilution and succussion (vigorous shaking), microscopic molecular clusters or nanostructures may form within the solution. Some researchers believe these structures could preserve characteristics of the original substance and potentially contribute to biological effects. Studies have also suggested the presence of nanobubbles and stable molecular aggregates in highly diluted solutions.`,
  },
  {
    icon: Microscope,
    heading: "Laboratory and Biological Research",
    content: `Various laboratory experiments have attempted to investigate the biological effects of homeopathic preparations. Certain in-vitro studies have reported measurable responses from ultra-diluted substances in cellular or biochemical systems. Reviews of published experiments have found that a number of studies demonstrated positive findings, although consistent reproducibility across all laboratories remains a challenge. Researchers continue to study these observations to better understand the possible mechanisms involved.`,
  },
  {
    icon: BookOpen,
    heading: "Ongoing Scientific Debate",
    content: `The scientific basis of homeopathy remains an evolving and debated topic. While some experimental findings suggest possible mechanisms and effects, mainstream medical science continues to call for larger, more reproducible studies before drawing definitive conclusions. Supporters of homeopathy view ongoing research as an important step toward understanding how highly diluted preparations may interact with living systems.`,
  },
];

export default function ScientificBasisOfHomeopathy() {
  return (
    <div className="pt-20 bg-[var(--bg-warm)] min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-[var(--green-deep)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "36px 36px" }}/>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[var(--gold-light)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Research Perspective</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-6xl text-white mt-3 mb-4">Scientific Basis of Homoeopathy</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-sans text-lg text-white/70 leading-relaxed">
            An exploration of current scientific hypotheses, laboratory findings, and the ongoing research debate around homoeopathic medicine.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 pb-0">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-2xl border border-[var(--border)] p-8 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5"/>
              <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                The following overview is inspired by research and discussions published by organisations such as the Faculty of Homeopathy (UK) and academic journals exploring the mechanism and efficacy of highly diluted preparations.
              </p>
            </div>
          </motion.div>

          <p className="font-sans text-[var(--text-muted)] text-base leading-relaxed mb-12">
            Homoeopathy has long been a subject of discussion within the medical and scientific community, particularly regarding the effectiveness of highly diluted remedies. While critics often argue that ultra-diluted preparations may act only as placebos, several researchers and institutions have explored possible scientific explanations behind their effects.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col gap-6">
            {sections.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-[var(--border)] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--green-deep)]/8 flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-[var(--green-deep)]"/>
                  </div>
                  <h2 className="font-serif text-xl text-[var(--text-dark)] leading-snug">{s.heading}</h2>
                </div>
                <p className="font-sans text-[var(--text-muted)] text-base leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
