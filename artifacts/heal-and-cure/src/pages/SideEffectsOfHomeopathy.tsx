import { motion } from "framer-motion";
import { AlertTriangle, Info, FlaskConical, Droplets, ShieldAlert } from "lucide-react";

const sections = [
  {
    icon: ShieldAlert,
    heading: "Homeopathic Immunisations & Vaccines",
    content: `Some homeopathic products, including those marketed as "nosodes" or "homeopathic immunizations," have been promoted as alternatives to standard vaccines. However, there is insufficient scientific evidence to support these claims. Health authorities, including the National Center for Complementary and Integrative Health (NCCIH) and the Centers for Disease Control and Prevention (CDC), continue to recommend routine immunization and vaccination for disease prevention.`,
  },
  {
    icon: AlertTriangle,
    heading: "Possible Adverse Effects & Safety Considerations",
    content: `Most homeopathic remedies are prepared in highly diluted forms. However, certain products sold as homeopathic may contain measurable amounts of active substances. Like any medicine or dietary supplement, such products may lead to side effects, allergic reactions, or interactions with other medications. Reports of adverse health effects linked to improperly prepared or insufficiently diluted homeopathic products have been documented.`,
  },
  {
    icon: FlaskConical,
    heading: "Dilution, Safety & Manufacturing Quality",
    content: `Research reviews suggest that highly diluted homeopathic remedies used under the guidance of qualified practitioners are generally considered safe and are unlikely to cause serious adverse effects. Nevertheless, risks may arise if products are contaminated during manufacturing or are incorrectly prepared. Quality of the source material and adherence to proper preparation protocols are essential to safe use.`,
  },
  {
    icon: Droplets,
    heading: "Alcohol Content in Liquid Preparations",
    content: `Some liquid homeopathic preparations may also contain alcohol. In certain cases, the alcohol content in these remedies may be higher than that permitted in conventional pharmaceutical products. Patients who are sensitive to alcohol, including those with liver conditions or certain religious beliefs, should consult their practitioner before using liquid formulations.`,
  },
  {
    icon: Info,
    heading: "Homeopathic Aggravation",
    content: `Homeopathic practitioners sometimes describe a temporary worsening of symptoms after treatment, commonly referred to as "homeopathic aggravation." Scientific evidence supporting this reaction remains limited, and more research is needed in this area. Patients should always consult a qualified healthcare professional regarding any new or worsening symptoms experienced during treatment.`,
  },
];

export default function SideEffectsOfHomeopathy() {
  return (
    <div className="pt-20 bg-[var(--bg-warm)] min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-[var(--green-deep)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "36px 36px" }}/>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[var(--gold-light)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Safety Information</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-6xl text-white mt-3 mb-4">Side Effects of Homoeopathy</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-sans text-lg text-white/70 leading-relaxed">
            An honest, evidence-informed overview of risks and safety considerations associated with homoeopathic treatment.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-[var(--bg-cream)] border border-[var(--gold)]/30 rounded-2xl p-6 mb-8 flex items-start gap-3">
            <Info className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5"/>
            <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
              The following information is provided for educational purposes only and is sourced from internationally recognised health organisations. Always consult a qualified practitioner before beginning or stopping any treatment.
            </p>
          </div>
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
