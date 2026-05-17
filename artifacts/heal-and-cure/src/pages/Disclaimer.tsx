import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShieldAlert, Users } from "lucide-react";

const sections = [
  {
    icon: ShieldAlert,
    heading: "Legal Disclaimer",
    content: `The information provided on this website is intended for educational and informational purposes only and should not be considered a replacement for professional medical advice, diagnosis, or treatment. We do not claim to cure any disease that is regarded as incurable by modern medical science. Any medicines, therapies, or services mentioned on healandcure.com should only be used after consulting a qualified physician or healthcare professional.`,
  },
  {
    icon: Users,
    heading: "Testimonials Disclaimer",
    content: `Individual results may differ from person to person, and the testimonials shared on this website should not be interpreted as typical or guaranteed outcomes. The testimonials are based on genuine experiences of patients who received homoeopathic treatment at our clinic. These cases are presented only to demonstrate the possible benefits of homoeopathic care and should not be considered average or standard results for every patient.`,
    attribution: "Dr. Souvik Dutta, MD",
  },
];

export default function Disclaimer() {
  return (
    <div className="pt-20 bg-[var(--bg-warm)] min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-[var(--green-deep)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "36px 36px" }}/>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[var(--gold-light)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">Legal</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-6xl text-white mt-3 mb-4">Disclaimer</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-sans text-lg text-white/70 leading-relaxed">
            Please read the following important notices before using our services or information.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col gap-8">
            {sections.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-[var(--border)] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--green-deep)]/8 flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-[var(--green-deep)]"/>
                  </div>
                  <h2 className="font-serif text-2xl text-[var(--green-deep)]">{s.heading}</h2>
                </div>
                <p className="font-sans text-[var(--text-muted)] text-base leading-relaxed">{s.content}</p>
                {s.attribution && (
                  <p className="font-sans text-sm text-[var(--gold)] font-semibold mt-4">— {s.attribution}</p>
                )}
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[var(--bg-cream)] rounded-2xl border border-[var(--border)] p-8 text-center">
              <p className="font-sans text-sm text-[var(--text-muted)] mb-4">
                For any questions about our disclaimer or services, please reach out directly.
              </p>
              <Link href="/contact" className="inline-block bg-[var(--green-deep)] text-white px-7 py-3 rounded-full font-medium text-sm hover:bg-[var(--green-mid)] transition-all">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
