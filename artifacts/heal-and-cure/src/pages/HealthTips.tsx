import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Clock, User } from "lucide-react";

const posts = [
  {
    slug: "homeopathy-for-diabetes",
    category: "HOMEOPATHY",
    title: "Can Homeopathy Help Manage Diabetes?",
    excerpt: "A clinical perspective on how constitutional homoeopathic treatment addresses blood sugar imbalance at the root cause — not just the numbers.",
    author: "Dr. Souvik Dutta",
    readTime: "7 min",
    color: "bg-[var(--green-deep)]",
  },
  {
    slug: "diet-mistakes-for-diabetics",
    category: "NUTRITION",
    title: "5 Diet Mistakes Diabetics Make Daily",
    excerpt: "Common pitfalls in diabetic diet planning — from eliminating rice to drinking 'healthy' juices — that silently worsen blood sugar control.",
    author: "Pampita Banerjee",
    readTime: "6 min",
    color: "bg-[var(--teal)]",
  },
  {
    slug: "constitutional-homeopathic-treatment",
    category: "HOMEOPATHY",
    title: "What Is Constitutional Homeopathic Treatment?",
    excerpt: "Understanding individualised medicine — the gold standard of classical homoeopathy that treats the person, not just the disease.",
    author: "Dr. Souvik Dutta",
    readTime: "8 min",
    color: "bg-[var(--green-deep)]",
  },
  {
    slug: "managing-pcos-naturally",
    category: "NUTRITION",
    title: "Managing PCOS Naturally: Diet & Homoeopathy",
    excerpt: "A combined clinical approach using anti-inflammatory nutrition and constitutional homoeopathy to restore hormonal balance in PCOS.",
    author: "Pampita Banerjee & Dr. Souvik Dutta",
    readTime: "7 min",
    color: "bg-[var(--teal)]",
  },
  {
    slug: "why-children-respond-to-homeopathy",
    category: "HOMEOPATHY",
    title: "Why Children Respond So Well to Homoeopathy",
    excerpt: "The gentle, deep-acting nature of constitutional homoeopathic medicine makes it particularly powerful for paediatric care and immunity.",
    author: "Dr. Souvik Dutta",
    readTime: "6 min",
    color: "bg-[var(--green-mid)]",
  },
  {
    slug: "sedentary-lifestyle-kolkata",
    category: "LIFESTYLE",
    title: "Kolkata's Hidden Health Crisis: Sedentary Work Culture",
    excerpt: "How long desk hours are silently driving lifestyle disease in Kolkata's professional population — and practical strategies to reverse the damage.",
    author: "Dr. Souvik Dutta & Pampita Banerjee",
    readTime: "6 min",
    color: "bg-[var(--green-mid)]",
  },
];

const categories = ["All", "Homeopathy", "Nutrition", "Lifestyle"];

export default function HealthTips() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? posts
    : posts.filter(p => p.category === filter.toUpperCase());

  return (
    <div className="pt-20 bg-[var(--bg-warm)] min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-[var(--bg-cream)] border-b border-[var(--border)]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">From Our Doctors</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-6xl text-[var(--green-deep)] mt-3 mb-4">Health Journal</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-sans text-lg text-[var(--text-muted)] leading-relaxed mb-10">
            Expert, SEO-researched insights on homoeopathy, clinical nutrition, and holistic living — written by the doctors of Heal &amp; Cure Health Clinic, Kolkata.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)}
                data-testid={`filter-${cat.toLowerCase()}`}
                className={`px-6 py-2.5 rounded-full font-medium font-sans text-sm transition-all ${filter === cat ? "bg-[var(--green-deep)] text-white shadow-sm" : "bg-white border border-[var(--border)] text-[var(--text-dark)] hover:border-[var(--gold)] hover:text-[var(--green-deep)]"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((post, i) => (
                <motion.article key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col border border-[var(--border)]">
                  <div className={`h-40 ${post.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "16px 16px" }}/>
                    <div className="absolute inset-0 flex items-end p-5">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-white/20">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h2 className="font-serif text-xl text-[var(--text-dark)] mb-3 leading-snug group-hover:text-[var(--green-deep)] transition-colors">
                      {post.title}
                    </h2>
                    <p className="font-sans text-[var(--text-muted)] text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                      <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-sans">
                        <User className="w-3.5 h-3.5"/>
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-sans">
                        <Clock className="w-3.5 h-3.5"/>
                        <span>{post.readTime} read</span>
                      </div>
                    </div>
                    <Link href={`/health-tips/${post.slug}`} data-testid={`link-article-${post.slug}`}
                      className="mt-4 text-[var(--gold)] font-medium font-sans text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Full Article →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--text-muted)] font-sans py-16">No articles in this category yet. Check back soon.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--green-deep)] py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Have a Health Question?</h2>
          <p className="font-sans text-white/70 mb-8">Book a consultation with our specialists at Heal &amp; Cure Health Clinic, Uttarpara, Kolkata.</p>
          <Link href="/book" className="inline-block bg-[var(--gold)] text-[var(--text-dark)] px-8 py-3.5 rounded-full font-medium hover:bg-[var(--gold-light)] transition-all hover:scale-105">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
