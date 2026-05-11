import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Phone, Clock, MessageCircle, CheckCircle2, Calendar, User, Mail, Stethoscope, Apple, AlertCircle } from "lucide-react";
import drSouvikImg from "@assets/Doc_Men_1778067737072.jpeg";
import pampitaImg from "@assets/Doc_Women_1778067734674.jpeg";

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    doctor: "",
    concern: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const today = new Date().toISOString().split("T")[0];

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your full name";
    if (!form.phone.trim()) e.phone = "Please enter your phone number";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email";
    if (!form.date) e.date = "Please select a preferred date";
    if (!form.doctor) e.doctor = "Please select a preferred doctor";
    if (!form.concern.trim()) e.concern = "Please briefly describe your health concern";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          phone: form.phone,
          email: form.email,
          doctor: form.doctor,
          date: form.date,
          reason: form.concern,
        }),
      });
    } catch {
    }
    setLoading(false);
    setSubmitted(true);
  };

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => { const n = { ...e }; delete n[k]; return n; });
  };

  const doctors = [
    { value: "souvik", label: "Dr. Souvik Dutta", sub: "Homoeopathy & Holistic Care", img: drSouvikImg },
    { value: "pampita", label: "Pampita Banerjee", sub: "Nutrition & Diabetic Care", img: pampitaImg },
  ];

  return (
    <div className="pt-20 bg-[var(--bg-warm)] min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase font-sans font-semibold">
            Schedule a Consultation
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mt-3 mb-4">
            Book an Appointment
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-sans text-[var(--text-muted)] text-base max-w-xl mx-auto leading-relaxed">
            Fill out the form below and our clinic team will contact you to confirm your consultation.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-3xl shadow-[0_12px_60px_rgba(27,67,50,0.10)] border border-[var(--border)] overflow-hidden">
          <div className="grid lg:grid-cols-5">

            {/* LEFT PANEL */}
            <div className="lg:col-span-2 bg-[var(--green-deep)] text-white p-8 md:p-10 flex flex-col gap-8">

              <div>
                <h2 className="font-serif text-2xl mb-1">Heal & Cure</h2>
                <p className="font-sans text-white/60 text-sm">Health Clinic · Kolkata, West Bengal</p>
              </div>

              {/* Doctors */}
              <div className="flex flex-col gap-5">
                <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--gold-light)] font-semibold">Our Specialists</h3>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/8 border border-white/10">
                  <img src={drSouvikImg} className="w-12 h-12 rounded-full object-cover object-top ring-2 ring-[var(--gold)]/40 shrink-0" alt="Dr. Souvik"/>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-base leading-tight">Dr. Souvik Dutta</p>
                    <p className="text-white/60 text-xs mt-0.5 font-sans">BHMS, MD(Hom.) · Homoeopathy</p>
                    <div className="mt-2.5 space-y-1">
                      <a href="tel:+917980219737" className="flex items-center gap-2 text-[var(--gold-light)] text-xs hover:text-white transition-colors">
                        <Phone className="w-3 h-3 shrink-0"/> +91 7980219737
                      </a>
                      <a href="tel:+918961661727" className="flex items-center gap-2 text-[var(--gold-light)]/70 text-xs hover:text-white transition-colors">
                        <AlertCircle className="w-3 h-3 shrink-0"/> +91 8961661727 <span className="text-white/40">(emergency)</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/8 border border-white/10">
                  <img src={pampitaImg} className="w-12 h-12 rounded-full object-cover object-top ring-2 ring-[var(--gold)]/40 shrink-0" alt="Pampita"/>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-base leading-tight">Pampita Banerjee</p>
                    <p className="text-white/60 text-xs mt-0.5 font-sans">MSc Nutrition · Diabetic Educator</p>
                    <div className="mt-2.5">
                      <a href="tel:+918961661721" className="flex items-center gap-2 text-[var(--gold-light)] text-xs hover:text-white transition-colors">
                        <Phone className="w-3 h-3 shrink-0"/> +91 8961661721
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinic Hours */}
              <div>
                <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--gold-light)] font-semibold mb-4">Clinic Hours</h3>
                <div className="bg-white/8 border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[var(--gold-light)] shrink-0"/>
                    <div>
                      <p className="font-sans text-sm font-medium">Sunday to Saturday</p>
                      <p className="font-sans text-white/60 text-xs mt-0.5">9:00 AM – 9:00 PM</p>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <p className="font-sans text-white/50 text-xs leading-relaxed">
                      We are open all 7 days of the week. Walk-ins welcome during clinic hours. For urgent queries, please call directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <a href="https://wa.me/918961661721" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl px-5 py-4 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[var(--gold-light)] shrink-0"/>
                  <div>
                    <p className="font-sans text-sm font-medium">Chat With Clinic</p>
                    <p className="font-sans text-white/50 text-xs">WhatsApp · +91 8961661721</p>
                  </div>
                </a>
              </div>
            </div>

            {/* RIGHT PANEL — FORM */}
            <div className="lg:col-span-3 p-8 md:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center h-full py-16 text-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-[var(--green-deep)]/8 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-[var(--green-deep)]"/>
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-[var(--green-deep)] mb-3">Request Received</h3>
                      <p className="font-sans text-[var(--text-muted)] text-base leading-relaxed max-w-md">
                        Thank you. Your appointment request has been received. Our clinic team will contact you shortly to confirm your consultation.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center mt-2">
                      <a href="https://wa.me/918961661721" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[var(--green-deep)] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--green-mid)] transition-colors">
                        <MessageCircle className="w-4 h-4"/> Chat on WhatsApp
                      </a>
                      <button onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",date:"",doctor:"",concern:"" }); }}
                        className="px-6 py-3 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--text-dark)] hover:bg-[var(--bg-cream)] transition-colors">
                        New Request
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-6">

                    {/* Doctor Select */}
                    <div>
                      <label className="block font-sans text-sm font-medium text-[var(--text-dark)] mb-3">
                        Preferred Doctor <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {doctors.map((d) => (
                          <button type="button" key={d.value}
                            onClick={() => set("doctor", d.value)}
                            className={`relative flex flex-col items-center gap-2.5 p-4 rounded-2xl border-2 transition-all text-center ${
                              form.doctor === d.value
                                ? "border-[var(--green-deep)] bg-[var(--green-deep)]/10 shadow-[0_0_0_3px_rgba(27,67,50,0.12)]"
                                : "border-[var(--border)] hover:border-[var(--green-deep)]/50 hover:bg-[var(--bg-cream)]"
                            }`}>
                            <img src={d.img}
                              className={`w-16 h-16 rounded-full object-cover object-top transition-all ${form.doctor === d.value ? "ring-3 ring-[var(--green-deep)] ring-offset-2" : "ring-2 ring-[var(--border)]"}`}
                              alt={d.label}/>
                            <div>
                              <p className={`font-serif text-sm leading-tight transition-colors ${form.doctor === d.value ? "text-[var(--green-deep)]" : "text-[var(--text-dark)]"}`}>{d.label}</p>
                              <p className="font-sans text-[11px] text-[var(--text-muted)] mt-0.5">{d.sub}</p>
                            </div>
                            {form.doctor === d.value && (
                              <span className="absolute top-2 right-2 bg-[var(--green-deep)] rounded-full p-0.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-white"/>
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                      {errors.doctor && <p className="text-red-500 text-xs mt-1.5 font-sans">{errors.doctor}</p>}
                    </div>

                    {/* Name + Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-sm font-medium text-[var(--text-dark)] mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]"/>
                          <input type="text" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your full name"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border font-sans text-sm bg-[var(--bg-warm)] focus:outline-none focus:ring-2 focus:ring-[var(--green-deep)]/30 transition-all ${errors.name ? "border-red-400" : "border-[var(--border)]"}`}/>
                        </div>
                        {errors.name && <p className="text-red-500 text-xs mt-1 font-sans">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block font-sans text-sm font-medium text-[var(--text-dark)] mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]"/>
                          <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 XXXXX XXXXX"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border font-sans text-sm bg-[var(--bg-warm)] focus:outline-none focus:ring-2 focus:ring-[var(--green-deep)]/30 transition-all ${errors.phone ? "border-red-400" : "border-[var(--border)]"}`}/>
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Email + Date */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-sm font-medium text-[var(--text-dark)] mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]"/>
                          <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@email.com"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border font-sans text-sm bg-[var(--bg-warm)] focus:outline-none focus:ring-2 focus:ring-[var(--green-deep)]/30 transition-all ${errors.email ? "border-red-400" : "border-[var(--border)]"}`}/>
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1 font-sans">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block font-sans text-sm font-medium text-[var(--text-dark)] mb-2">
                          Preferred Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none"/>
                          <input type="date" value={form.date} min={today} onChange={(e) => set("date", e.target.value)}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border font-sans text-sm bg-[var(--bg-warm)] focus:outline-none focus:ring-2 focus:ring-[var(--green-deep)]/30 transition-all ${errors.date ? "border-red-400" : "border-[var(--border)]"}`}/>
                        </div>
                        {errors.date && <p className="text-red-500 text-xs mt-1 font-sans">{errors.date}</p>}
                        <p className="text-xs text-[var(--text-muted)] mt-1.5 font-sans flex items-center gap-1">
                          <Clock className="w-3 h-3"/> Open Sun–Sat, 9 AM – 9 PM
                        </p>
                      </div>
                    </div>

                    {/* Health Concern */}
                    <div>
                      <label className="block font-sans text-sm font-medium text-[var(--text-dark)] mb-2">
                        Health Concern <span className="text-red-500">*</span>
                      </label>
                      <textarea value={form.concern} onChange={(e) => set("concern", e.target.value)} rows={4}
                        placeholder="Briefly describe your main health concern or reason for consultation..."
                        className={`w-full px-4 py-3 rounded-xl border font-sans text-sm bg-[var(--bg-warm)] focus:outline-none focus:ring-2 focus:ring-[var(--green-deep)]/30 transition-all resize-none ${errors.concern ? "border-red-400" : "border-[var(--border)]"}`}/>
                      {errors.concern && <p className="text-red-500 text-xs mt-1 font-sans">{errors.concern}</p>}
                    </div>

                    {/* Submit */}
                    <button type="submit" disabled={loading}
                      className="w-full bg-[var(--green-deep)] text-white py-4 rounded-2xl font-medium font-sans text-base hover:bg-[var(--green-mid)] transition-all hover:scale-[1.01] disabled:opacity-70 disabled:scale-100 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(27,67,50,0.25)]">
                      {loading ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending Request…
                        </>
                      ) : "Send Appointment Request"}
                    </button>

                    <p className="text-center font-sans text-xs text-[var(--text-muted)]">
                      Our team will reach out within a few hours to confirm your appointment.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
