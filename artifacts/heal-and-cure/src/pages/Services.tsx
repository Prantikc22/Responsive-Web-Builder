import { motion } from "framer-motion";
import { Link } from "wouter";
import { Stethoscope, Heart, Baby, Apple, Activity, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    id: "homeopathy",
    icon: Stethoscope,
    title: "Homeopathic Consultation",
    color: "green",
    desc: "Classical constitutional prescribing that treats the individual, not just the disease. We spend time understanding your complete physical and emotional health profile.",
    helps: "Chronic conditions, acute illnesses, autoimmune disorders.",
    expect: "A detailed 45-60 minute initial case-taking session."
  },
  {
    id: "nutrition",
    icon: Apple,
    title: "Clinical Nutrition & Diet Planning",
    color: "teal",
    desc: "Therapeutic meal plans customized for your health conditions, lifestyle, and cultural preferences. No crash diets, just sustainable healing.",
    helps: "Weight management, thyroid issues, PCOS, digestive disorders.",
    expect: "Comprehensive dietary assessment and customized weekly meal plans."
  },
  {
    id: "diabetes",
    icon: Activity,
    title: "Diabetes Management & Education",
    color: "teal",
    desc: "Specialized care combining medical insight with expert nutrition to stabilize blood sugar levels naturally and prevent long-term complications.",
    helps: "Type 1, Type 2, Gestational Diabetes, Pre-diabetes.",
    expect: "Blood sugar monitoring strategies and carb-counting education."
  },
  {
    id: "pediatric",
    icon: Baby,
    title: "Pediatric Homeopathy",
    color: "green",
    desc: "Gentle, safe, and effective remedies for children's ailments. Building strong natural immunity without harsh side effects.",
    helps: "Recurrent infections, allergies, behavioral issues, teething troubles.",
    expect: "Child-friendly consultation in a comfortable environment."
  },
  {
    id: "chronic",
    icon: Heart,
    title: "Chronic Disease Care",
    color: "green",
    desc: "Long-term management strategies for persistent health issues that conventional medicine struggles to resolve completely.",
    helps: "Migraines, arthritis, skin conditions, respiratory issues.",
    expect: "Regular follow-ups and progressive treatment adjustments."
  },
  {
    id: "lifestyle",
    icon: Zap,
    title: "Lifestyle Disease Management",
    color: "teal",
    desc: "Addressing the root causes of modern health problems caused by sedentary habits, stress, and poor dietary choices.",
    helps: "Hypertension, high cholesterol, fatty liver, stress-related disorders.",
    expect: "Holistic action plan combining diet, movement, and homeopathic support."
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      <section className="bg-[var(--green-deep)] text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Services</h1>
          <p className="font-sans text-lg text-white/80 leading-relaxed">
            Integrative healing tailored to your unique constitution. Experience the power of Homeopathy combined with Clinical Nutrition.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section key={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-[var(--bg-cream)]'}`}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <div className={`w-20 h-20 rounded-2xl mb-8 flex items-center justify-center shadow-lg ${service.color === 'green' ? 'bg-[var(--green-deep)] text-white' : 'bg-[var(--teal)] text-white'}`}>
                  <service.icon className="w-10 h-10" />
                </div>
                <h2 className={`font-serif text-4xl mb-4 ${service.color === 'green' ? 'text-[var(--green-deep)]' : 'text-[var(--teal)]'}`}>
                  {service.title}
                </h2>
                <p className="font-sans text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-bold text-[var(--text-dark)] uppercase text-sm tracking-wider mb-2">Who it helps</h4>
                    <p className="text-[var(--text-muted)]">{service.helps}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-dark)] uppercase text-sm tracking-wider mb-2">What to expect</h4>
                    <p className="text-[var(--text-muted)]">{service.expect}</p>
                  </div>
                </div>
                <Link 
                  href="/book" 
                  className={`inline-flex items-center gap-2 font-medium px-6 py-3 rounded-full transition-colors ${service.color === 'green' ? 'bg-[var(--green-deep)] text-white hover:bg-[var(--green-mid)]' : 'bg-[var(--teal)] text-white hover:bg-[var(--teal)]/90'}`}
                >
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`aspect-square rounded-full border-4 border-dashed opacity-20 flex items-center justify-center ${index % 2 === 1 ? 'md:order-1' : ''} ${service.color === 'green' ? 'border-[var(--green-deep)]' : 'border-[var(--teal)]'}`}
              >
                 <service.icon className="w-1/3 h-1/3" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
