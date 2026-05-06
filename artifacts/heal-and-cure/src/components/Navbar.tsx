import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/Logo_Dark_Bg-removebg_1778067731722.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-[var(--bg-cream)]/90 backdrop-blur shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
            <div className="bg-[var(--green-deep)] rounded-full p-2 w-12 h-12 flex items-center justify-center shadow-md">
              <img src={logoImg} alt="Heal & Cure Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className={`font-serif font-bold text-xl tracking-wide ${isScrolled ? "text-[var(--green-deep)]" : "text-[var(--green-deep)]"}`}>
              Heal & Cure
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium transition-colors relative group ${
                  location === link.href ? "text-[var(--gold)]" : "text-[var(--text-dark)] hover:text-[var(--gold)]"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${location === link.href ? "scale-x-100" : ""}`} />
              </Link>
            ))}
            <Button 
              asChild
              className="bg-[var(--green-deep)] hover:bg-[var(--green-mid)] text-white rounded-full px-6 transition-transform hover:scale-105"
            >
              <Link href="/book" data-testid="link-nav-book">Book Appointment</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[var(--text-dark)] p-2"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="button-mobile-menu-open"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[var(--bg-cream)] flex flex-col px-6 py-8"
          >
            <div className="flex justify-end">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--text-dark)] p-2"
                data-testid="button-mobile-menu-close"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-serif ${location === link.href ? "text-[var(--gold)]" : "text-[var(--green-deep)]"}`}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-[var(--green-deep)] hover:bg-[var(--green-mid)] text-white rounded-full px-8 py-6 text-lg w-full max-w-xs mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/book">Book Appointment</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
