import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, XCircle, Leaf } from "lucide-react";

const myths = [
  {
    myth: "Rice is bad for diabetes — you must eliminate it completely.",
    fact: "White rice need not be eliminated. The key is portion control and pairing it with fibre, protein and healthy fats to reduce its glycaemic impact. Brown rice, or cooling and reheating white rice, lowers its glycaemic index further. Blanket elimination of rice leads to restrictive eating without sustainable benefit.",
  },
  {
    myth: "Fruit juice is healthy and a good substitute for whole fruit.",
    fact: "Fruit juice removes the natural fibre of the fruit, causing rapid blood sugar spikes. A glass of juice can contain the sugar of 4–5 fruits without any of the satiety or fibre benefit. Whole fruits eaten with their peel (where safe) are always preferable to juice — even freshly squeezed.",
  },
  {
    myth: "A low-fat diet is the best approach for weight loss.",
    fact: "Dietary fat does not automatically become body fat. Excess refined carbohydrates and sugar are the primary drivers of fat storage. Healthy fats — from ghee, nuts, seeds, coconut, and oily fish — support hormonal balance, brain function, and satiety, and are essential to a sustainable diet.",
  },
  {
    myth: "Skipping meals helps you lose weight faster.",
    fact: "Skipping meals, especially breakfast, often leads to increased cortisol, muscle breakdown, and compensatory overeating later. It disrupts blood sugar regulation and can worsen insulin resistance. Structured, timed eating with balanced meals supports a healthy metabolism far more effectively.",
  },
  {
    myth: "Protein is only for athletes and gym-goers.",
    fact: "Protein is essential for every cell in the body — muscle repair, enzyme production, immune function, and hormonal synthesis all depend on adequate protein intake. Most Indians are chronically protein-deficient, which contributes to fatigue, poor immunity, hair loss, and slow metabolism regardless of activity level.",
  },
  {
    myth: "All 'diet' or 'sugar-free' products are safe for diabetics.",
    fact: "Many sugar-free products use artificial sweeteners or maltitol, which can still affect blood sugar. They often contain refined flour, preservatives, and other additives. These products can create a false sense of security and lead to overconsumption. Real, minimally processed foods are almost always a better choice.",
  },
  {
    myth: "Thyroid patients should avoid all goitrogenic foods like cabbage and broccoli.",
    fact: "Raw cruciferous vegetables in very large quantities may mildly interfere with iodine absorption in those with pre-existing iodine deficiency. However, lightly cooking them deactivates most goitrogens. These vegetables are nutrient-dense and should not be avoided altogether — a balanced, varied diet is far more beneficial than blanket food elimination.",
  },
  {
    myth: "You need supplements to meet your nutritional needs.",
    fact: "For most people eating a varied, whole-food diet, supplements are unnecessary and sometimes harmful. Supplementation is appropriate for confirmed deficiencies (such as B12 in vegetarians, or Vitamin D in those with limited sun exposure) — but should be based on clinical testing, not habit or marketing. Food-first nutrition is always the foundation.",
  },
  {
    myth: "High-protein diets damage the kidneys in healthy individuals.",
    fact: "In people with healthy kidneys, moderately high protein intake does not cause kidney damage. This concern applies only to those with existing chronic kidney disease, where dietary protein must be carefully managed. For the healthy population, adequate protein supports kidney function through proper fluid balance and muscle maintenance.",
  },
  {
    myth: "Ghee is unhealthy and causes heart disease.",
    fact: "Traditionally used in Indian cooking, ghee contains short and medium-chain fatty acids, fat-soluble vitamins (A, D, E, K), and conjugated linoleic acid (CLA) with anti-inflammatory properties. Used in appropriate quantities, ghee does not raise LDL harmfully and is far preferable to refined vegetable oils that are high in trans fats and omega-6 fatty acids.",
  },
  {
    myth: "Eating late at night always leads to weight gain.",
    fact: "Weight gain is determined by total caloric intake and expenditure over time — not solely by meal timing. However, late-night eating is associated with poorer food choices, mindless snacking, and disrupted circadian rhythms that can affect insulin sensitivity. The total quality and quantity of what you eat matters more than the clock.",
  },
  {
    myth: "You should drink eight glasses of water every day — without exception.",
    fact: "Hydration needs vary significantly depending on body size, activity level, climate, and dietary water content from fruits and vegetables. Forcing eight glasses regardless of thirst can even cause electrolyte imbalance in some cases. Listen to your thirst — it is a reliable guide — and adjust for exercise, heat, and illness.",
  },
];

export default function MythsAndFactsDiet() {
  return (
    <div className="pt-20 bg-[var(--bg-warm)] min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-[var(--bg-cream)] border-b border-[var(--border)]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">
            Clinical Nutrition Education
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-[var(--green-deep)] mt-3 mb-4 leading-tight">
            Myths &amp; Facts About Diet
          </motion.h1>
          <motion.div initial={{ width: 0 }} animate={{ width: 56 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="h-0.5 bg-[var(--gold)] mx-auto mb-5"/>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-sans text-lg text-[var(--text-muted)] leading-relaxed">
            Separating evidence-based nutrition science from widespread dietary myths — to help you make informed decisions about your health and food.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white border-b border-[var(--border)]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-4 h-4 text-[var(--green-deep)]"/>
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[var(--green-deep)]">
              From the Desk of Mrs. Pampita Banerjee — Clinical Nutritionist
            </span>
          </div>
          <p className="font-sans text-[var(--text-muted)] text-base leading-relaxed">
            Misinformation about diet is one of the biggest barriers to lasting health improvement. Many patients arrive having followed restrictive, incorrect dietary advice for years — cutting out entire food groups, relying on supplements, or following trends that are not grounded in clinical nutrition science. This page addresses the most common dietary myths we encounter in our practice.
          </p>
        </div>
      </section>

      {/* Myths & Facts Grid */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col gap-8">
            {myths.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="bg-white rounded-2xl border border-[var(--border)] shadow-sm overflow-hidden"
              >
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
                  {/* Myth */}
                  <div className="p-7 flex gap-4">
                    <div className="shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-red-500"/>
                      </div>
                    </div>
                    <div>
                      <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-red-400 mb-2 block">Myth</span>
                      <p className="font-serif text-[var(--text-dark)] text-[1.05rem] leading-snug">{item.myth}</p>
                    </div>
                  </div>
                  {/* Fact */}
                  <div className="p-7 flex gap-4 bg-[var(--bg-warm)]">
                    <div className="shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-full bg-[var(--green-deep)]/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-[var(--green-deep)]"/>
                      </div>
                    </div>
                    <div>
                      <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--green-deep)] mb-2 block">Fact</span>
                      <p className="font-sans text-[var(--text-muted)] text-sm leading-relaxed">{item.fact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer note */}
      <section className="bg-[var(--bg-cream)] border-t border-[var(--border)] py-10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed">
            The information on this page is intended for general educational purposes only and does not constitute personalised medical or dietary advice. Please consult a qualified clinical nutritionist or physician before making significant changes to your diet, especially if you have an existing medical condition.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--green-deep)] py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Get a Personalised Diet Plan</h2>
          <p className="font-sans text-white/70 mb-8">
            Every body is different. Book a clinical nutrition consultation with Mrs. Pampita Banerjee at Heal &amp; Cure Health Clinic, Uttarpara.
          </p>
          <Link href="/book"
            className="inline-block bg-[var(--gold)] text-[var(--text-dark)] px-8 py-3.5 rounded-full font-medium hover:bg-[var(--gold-light)] transition-all hover:scale-105">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
