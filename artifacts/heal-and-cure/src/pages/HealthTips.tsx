import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const posts = [
  {
    id: 1,
    category: "HOMEOPATHY",
    title: "Can Homeopathy Help Manage Diabetes?",
    excerpt: "Explore how constitutional treatment addresses blood sugar at the root cause, working alongside dietary changes.",
    color: "green"
  },
  {
    id: 2,
    category: "NUTRITION",
    title: "5 Diet Mistakes Diabetics Make Daily",
    excerpt: "Common pitfalls in diabetic diet planning that silently worsen blood sugar control, and how to fix them.",
    color: "teal"
  },
  {
    id: 3,
    category: "LIFESTYLE",
    title: "What Is Constitutional Homeopathic Treatment?",
    excerpt: "Understanding individualized medicine — the cornerstone of classical homoeopathy that treats the person, not just the disease.",
    color: "green"
  },
  {
    id: 4,
    category: "NUTRITION",
    title: "Managing PCOS Naturally: Diet & Homeopathy",
    excerpt: "A combined approach using anti-inflammatory eating and constitutional treatment to restore hormonal balance.",
    color: "teal"
  },
  {
    id: 5,
    category: "HOMEOPATHY",
    title: "Why Children Respond So Well to Homeopathy",
    excerpt: "The gentle, deep-acting nature of homoeopathic medicine makes it ideal for pediatric care and building immunity.",
    color: "green"
  },
  {
    id: 6,
    category: "LIFESTYLE",
    title: "Kolkata's Hidden Health Crisis: Sedentary Work Culture",
    excerpt: "How long hours at a desk are silently harming Kolkata's working population and simple ways to combat it.",
    color: "teal"
  }
];

export default function HealthTips() {
  const [filter, setFilter] = useState("All");
  
  const filteredPosts = filter === "All" ? posts : posts.filter(p => p.category === filter.toUpperCase());

  return (
    <div className="pt-20 bg-[var(--bg-warm)] min-h-screen">
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--green-deep)] mb-6">Health Tips & Insights</h1>
          <p className="font-sans text-lg text-[var(--text-muted)] leading-relaxed mb-12">
            Expert advice on homeopathy, clinical nutrition, and holistic living.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Homeopathy", "Nutrition", "Lifestyle"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === cat ? 'bg-[var(--gold)] text-white' : 'bg-white border border-[var(--border)] text-[var(--text-dark)] hover:border-[var(--gold)]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className={`h-40 ${post.color === 'green' ? 'bg-[var(--green-deep)]' : 'bg-[var(--teal)]'} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 font-serif text-6xl font-bold px-4 text-center leading-none uppercase mix-blend-overlay">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative bg-white">
                  <div className="absolute -top-5 left-8 bg-[var(--gold)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    {post.category}
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--text-dark)] mb-4 mt-2 group-hover:text-[var(--gold)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-sans text-[var(--text-muted)] text-sm mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <Link href={`/health-tips`} className="text-[var(--gold)] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all mt-auto w-max">
                    Read More <span>→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
