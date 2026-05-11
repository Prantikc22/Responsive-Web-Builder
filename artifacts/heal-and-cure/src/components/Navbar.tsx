import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/Logo_Dark_Bg-removebg_1778067731722.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/health-tips", label: "Health Tips" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-sm border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-[72px] flex items-center justify-between">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3" data-testid="link-home-logo">
            <img
              src={logoImg}
              alt="Heal & Cure Health Clinic"
              className="h-14 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-semibold text-xl text-[var(--green-deep)] leading-none tracking-wide">
                Heal &amp; Cure
              </span>
              <span className="font-sans text-[10px] text-[var(--text-muted)] uppercase tracking-[0.18em]">
                Health Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm font-medium transition-colors relative group ${
                  location === link.href
                    ? "text-[var(--gold)]"
                    : "text-[var(--text-dark)] hover:text-[var(--green-deep)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[var(--gold)] transition-all duration-300 origin-left ${
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/book"
              data-testid="link-nav-book"
              className="bg-[var(--green-deep)] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--green-mid)] transition-all hover:scale-105 shadow-sm"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[var(--text-dark)]"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="button-mobile-menu-open"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-3">
                <img src={logoImg} alt="Heal & Cure" className="h-12 w-auto object-contain" />
                <div className="flex flex-col leading-tight">
                  <span className="font-serif font-semibold text-lg text-[var(--green-deep)]">Heal &amp; Cure</span>
                  <span className="font-sans text-[9px] text-[var(--text-muted)] uppercase tracking-widest">Health Clinic</span>
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-menu-close">
                <X className="w-7 h-7 text-[var(--text-dark)]" />
              </button>
            </div>

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col flex-1 px-8 py-8 gap-1"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-4 font-serif text-3xl border-b border-[var(--border)] ${
                      location === link.href ? "text-[var(--gold)]" : "text-[var(--green-deep)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8">
                <Link
                  href="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-[var(--green-deep)] text-white text-center py-4 rounded-full font-medium text-lg"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </motion.nav>

            <div className="px-8 py-6 border-t border-[var(--border)] bg-[var(--bg-cream)]">
              <p className="font-sans text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2">Call Us</p>
              <div className="flex flex-col gap-1.5">
                <a href="tel:+917980219737" className="font-serif text-lg text-[var(--green-deep)]">+91 7980219737 <span className="font-sans text-xs text-[var(--text-muted)] font-normal">(Dr. Souvik)</span></a>
                <a href="tel:+918961661721" className="font-serif text-lg text-[var(--teal)]">+91 8961661721 <span className="font-sans text-xs text-[var(--text-muted)] font-normal">(Pampita / WhatsApp)</span></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
