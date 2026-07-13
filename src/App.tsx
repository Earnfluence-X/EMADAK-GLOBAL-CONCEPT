import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  ChartBar, 
  CheckCircle2, 
  Clock, 
  Mail, 
  MapPin, 
  Phone, 
  Play, 
  Quote, 
  ShieldCheck, 
  Trophy, 
  User, 
  Menu,
  X,
  ArrowUpRight,
  Globe,
  Award,
  Users,
  Calendar,
  Sun,
  Moon,
  MessageCircle
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme } from './context/ThemeContext';
import WhatsAppButton from './components/WhatsAppButton';
import Blog from './components/Blog';

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Enhanced Counter ---
const Counter = ({ value, suffix = "", duration = 2.5, delay = 0 }: { value: number, suffix?: string, duration?: number, delay?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const end = value;
      const totalFrames = duration * 60;
      let frame = 0;

      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * end);
          setCount(current);

          if (frame === totalFrames) {
            setCount(end);
            clearInterval(interval);
          }
        }, 1000 / 60);

        return () => clearInterval(interval);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, value, duration, delay, hasAnimated]);

  return <span ref={ref} className="counter-number text-primary">{count}{suffix}</span>;
};

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      scrolled ? "py-4 glass shadow-2xl" : "py-8 bg-transparent"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <span className="text-2xl font-bold font-['Playfair_Display'] tracking-tight text-primary">
            Emadak<span className="text-[#D4AF37]">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {['Properties', 'Investment', 'About', 'Blog', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium tracking-widest uppercase text-secondary hover:text-[#D4AF37] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full" />
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="theme-toggle w-10 h-10 rounded-full flex items-center justify-center hover:border-[#D4AF37] transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
          </button>
          <a href="#contact" className="btn-gold py-2 px-6 text-sm">Get Started</a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#D4AF37]">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass p-6 flex flex-col gap-6 lg:hidden"
          >
            {['Properties', 'Investment', 'About', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold border-b border-[var(--border-color)] pb-2 text-primary"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => { toggleTheme(); setIsOpen(false); }}
              className="flex items-center gap-3 text-lg font-semibold border-b border-[var(--border-color)] pb-2 text-primary"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-[#D4AF37]" /> : <Moon className="w-5 h-5 text-[#D4AF37]" />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a href="#contact" onClick={() => setIsOpen(false)} className="btn-gold text-center">Get Started</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero ---
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative min-height-[100vh] flex items-center pt-20 overflow-hidden bg-[var(--bg-primary)]">
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/80 via-[var(--bg-primary)]/20 to-[var(--bg-primary)] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover scale-110 opacity-50"
        />
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 z-1 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60"
      />

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-[#D4AF37]/20"
            >
              <Trophy className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37]">Award Winning Brokerage 2025</span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-[1.1] text-primary">
              Build Wealth with <br />
              <span className="gold-gradient">Real Estate</span>
            </h1>
            
            <p className="text-lg text-tertiary mb-10 max-w-xl leading-relaxed">
              Emadak Global Concept — premium real estate brokerage, investment advisory, 
              and wealth creation across Nigeria. Trusted by over 500 smart investors.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#investment" className="btn-gold flex items-center gap-2">
                Start Investing <ArrowUpRight className="w-5 h-5" />
              </a>
              <a href="#properties" className="btn-outline-gold">
                View Properties
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-[var(--border-color)]">
              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]"><Counter value={8} suffix="+" /></h3>
                <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mt-1">Years Excellence</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]"><Counter value={35} suffix="%" /></h3>
                <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mt-1">Guaranteed ROI</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]"><Counter value={9} /></h3>
                <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mt-1">States Covered</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 p-10 glass-dark rounded-3xl border-[var(--border-color)] shadow-[0_0_100px_rgba(0,0,0,0.5)] card-glow">
              <div className="absolute top-0 right-0 p-8">
                <Quote className="w-12 h-12 text-[#D4AF37] opacity-20" />
              </div>
              <p className="text-2xl font-['Playfair_Display'] italic leading-relaxed mb-8 text-secondary">
                "Slow progress is better than no progress. Real estate is the certain path to realization of sustainable income."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] flex items-center justify-center">
                  <User className="text-[#050B16]" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Emmanuel Dare Akinlotan</h4>
                  <p className="text-sm text-muted uppercase tracking-tighter">The Real Estate Doctor</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#B8860B]/10 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- TrustBar ---
const TrustBar = () => {
  const stats = [
    { icon: Award, label: "Years of Trust", value: 8, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 500, suffix: "+" },
    { icon: Globe, label: "States Covered", value: 9, suffix: "" },
    { icon: ShieldCheck, label: "Guaranteed ROI", value: 35, suffix: "%" }
  ];

  return (
    <div className="bg-[var(--bg-secondary)] border-y border-[var(--border-color)] py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-center gap-4 group p-4 rounded-2xl glass-strong border-[var(--border-color)] hover:border-[#D4AF37]/20 transition-all duration-300 card-glow-gold"
            >
              <div className="p-3 rounded-xl glass border-[var(--border-color)] group-hover:border-[#D4AF37]/30 transition-all duration-300 group-hover:bg-[#D4AF37]/10">
                <stat.icon className="w-6 h-6 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#D4AF37] flex items-center">
                  <Counter value={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted font-bold">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- PropertyCard ---
const PropertyCard = ({ title, location, desc, tags, image, price }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -15, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="group rounded-3xl overflow-hidden glass-strong border-[var(--border-color)] card-glow-gold h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          {tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-[#D4AF37] text-[#050B16] text-[8px] font-black uppercase tracking-widest rounded-full shadow-lg">
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80 text-xs">
          <MapPin className="w-4 h-4 text-[#D4AF37]" /> {location}
        </div>
        {price && (
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#D4AF37]/90 text-[#050B16] text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
            {price}
          </div>
        )}
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-tertiary text-sm mb-6 leading-relaxed line-clamp-2">
          {desc}
        </p>
        <a 
          href="#contact" 
          className="w-full btn-outline-gold py-3 text-xs flex items-center justify-center gap-2 group-hover:bg-[#D4AF37] group-hover:text-navy transition-all"
        >
          Explore Asset <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

// --- Properties ---
const Properties = () => {
  const assets = [
    {
      title: "Lekki Aviation Town",
      location: "Lekki-Epe Expressway, Lagos",
      desc: "Prime land proximity to Lekki Airport, Alaro City & Dangote Refinery. High appreciation potential.",
      tags: ["Hot Zone", "Residential"],
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₦850k/plot"
    },
    {
      title: "LSDPC Ojokoro Estate",
      location: "Meiran, Ijaiye, Lagos",
      desc: "Exclusive gated community with modern infrastructure & 24/7 world-class security services.",
      tags: ["Gated", "Limited"],
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₦1.2M/plot"
    },
    {
      title: "Ibeju-Lekki Free Zone",
      location: "Ibeju-Lekki Hub, Lagos",
      desc: "Strategically located near the Deep Seaport and the new industrial corridor of West Africa.",
      tags: ["High Growth", "Commercial"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₦2.5M/plot"
    },
    {
      title: "Epe Waterfront City",
      location: "Epe, Lagos",
      desc: "Luxury waterfront residential plots with panoramic ocean views. Perfect for high-end home construction.",
      tags: ["Waterfront", "Luxury"],
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₦3.8M/plot"
    },
    {
      title: "Abuja Smart City",
      location: "Kubwa, Abuja FCT",
      desc: "Smart city development with fiber optics, solar lighting, and modern infrastructure. High rental yield potential.",
      tags: ["Smart City", "High ROI"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₦4.2M/plot"
    },
    {
      title: "Ogun Industrial Corridor",
      location: "Mowe, Ogun State",
      desc: "Prime industrial and commercial land along the Lagos-Ibadan expressway corridor. Ideal for warehouses and factories.",
      tags: ["Industrial", "Commercial"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₦1.8M/plot"
    }
  ];

  return (
    <section id="properties" className="section-padding py-32 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-primary">
              Curated <span className="gold-gradient italic">Prime Assets</span>
            </h2>
          </div>
          <p className="text-tertiary max-w-sm mb-4">
            Discover verified land and residential options across Nigeria's fastest-growing corridors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assets.map((asset, i) => (
            <PropertyCard key={i} {...asset} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Investment ---
const Investment = () => {
  const plans = [
    {
      name: "6-Month Growth",
      roi: "15%",
      label: "Short Term Wealth",
      features: ["Capital secured in prime land", "Exit after 6 months", "Liquidity focused"],
      icon: Clock,
      featured: false
    },
    {
      name: "12-Month Acceleration",
      roi: "35%",
      label: "Maximum Wealth Yield",
      features: ["Premium land banking", "Co-ownership upside", "Best for long-term growth"],
      icon: ChartBar,
      featured: true
    },
    {
      name: "Co-Ownership Pool",
      roi: "25%",
      label: "Shared Investment",
      features: ["Pool capital with peers", "Diversified land portfolio", "Managed by experts"],
      icon: Users,
      featured: false
    }
  ];

  return (
    <section id="investment" className="py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[var(--bg-secondary)] to-transparent z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Fixed Returns</span>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">Invest with <span className="gold-gradient italic">Confidence</span></h2>
          <p className="text-tertiary">Transparent fixed-return vehicles designed for sustainable wealth creation, backed by years of market expertise.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={cn(
                "relative p-10 rounded-[2.5rem] flex flex-col items-center text-center group transition-all duration-500 card-glow-gold",
                plan.featured ? "glass-gold border-[#D4AF37]/30 shadow-[0_0_80px_rgba(212,175,55,0.1)]" : "glass-strong border-[var(--border-color)]"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-navy text-[10px] font-black uppercase tracking-widest rounded-full">
                  Best Value
                </div>
              )}
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <plan.icon className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">{plan.name}</h3>
              <p className="text-xs text-muted uppercase tracking-widest mb-6">{plan.label}</p>
              
              <div className="mb-8">
                <div className="text-6xl font-black gold-gradient mb-1">{plan.roi}</div>
                <div className="text-muted text-xs">Guaranteed Annual Return</div>
              </div>

              <ul className="space-y-4 mb-10 w-full text-left">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-tertiary">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={cn(
                  "w-full py-4 rounded-2xl font-bold transition-all text-center",
                  plan.featured ? "btn-gold" : "btn-outline-gold"
                )}
              >
                Start Plan Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- About ---
const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative glass-strong border-[var(--border-color)] p-6 card-glow-gold">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent z-10" />
              
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-[90%] aspect-square rounded-full overflow-hidden border-4 border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/10">
                  <img 
                    src="/his-image.png" 
                    alt="Emmanuel Dare Akinlotan - The Real Estate Doctor" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              
              <div className="absolute bottom-10 left-10 z-20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-10 h-[1px] bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">MD / CEO</span>
                </div>
                <h3 className="text-3xl font-bold mb-1 font-['Playfair_Display'] text-primary">Emmanuel Dare Akinlotan</h3>
                <p className="text-[#D4AF37] italic text-sm">"The Real Estate Doctor"</p>
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 p-8 glass-strong rounded-3xl border-[#D4AF37]/30 shadow-2xl z-30 card-glow-gold"
            >
              <Award className="w-12 h-12 text-[#D4AF37] mb-4" />
              <div className="text-xl font-bold text-primary">Consultant <br/>of the Year</div>
              <div className="text-[#D4AF37] text-sm font-bold mt-1">2025 Winner</div>
            </motion.div>
          </motion.div>

          <div>
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Meet the MD</span>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight text-primary">
              A Legacy of <br /><span className="gold-gradient italic">Trust & Excellence</span>
            </h2>
            
            <div className="space-y-6 text-tertiary leading-relaxed mb-12">
              <p>
                With over 8 years of transformative experience, Emmanuel combines deep expertise in real estate, 
                insurance, and digital entrepreneurship to help clients build generational wealth.
              </p>
              <div className="grid grid-cols-2 gap-6 py-8 border-y border-[var(--border-color)]">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-[#D4AF37] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold">NIIT Certified</h4>
                    <p className="text-xs text-muted">Network Engineer</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-[#D4AF37] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold">O.O.U Alumni</h4>
                    <p className="text-xs text-muted">Educational Background</p>
                  </div>
                </div>
              </div>
              <p>
                As a sought-after speaker on business and entrepreneurship, he lives by the philosophy: 
                <span className="text-[#D4AF37] font-semibold italic"> "Slow progress is better than no progress"</span>
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#D4AF37]"><Counter value={8} suffix="+" duration={2} /></div>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37]"><Counter value={500} suffix="+" duration={2.5} /></div>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold">Investors</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37]">2025</div>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold">Award Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Contact ---
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const waMessage = `Hello Emadak Global Concept,\n\nI am interested in your services.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encoded = encodeURIComponent(waMessage);
    window.open(`https://wa.me/2347033726654?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 relative bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6">
        <div className="glass-strong rounded-[3.5rem] p-10 lg:p-20 overflow-hidden relative card-glow-gold border-[var(--border-color)]">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D4AF37]/10 to-transparent pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Get in Touch</span>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-primary">Let's Secure <br /><span className="gold-gradient italic">Your Future</span></h2>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Call / WhatsApp", value: "+234 703 372 6654" },
                  { icon: Mail, label: "Email Support", value: "info@emadakglobal.com" },
                  { icon: MapPin, label: "Head Office", value: "LSDPC Ojokoro Estate, Lagos, Nigeria" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl glass border-[var(--border-color)] flex items-center justify-center transition-all group-hover:bg-[#D4AF37] group-hover:text-navy">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">{item.label}</div>
                      <div className="text-lg font-semibold text-primary">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-12">
                {[
                  { icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, label: "Instagram" },
                  { icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, label: "Facebook" },
                  { icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, label: "LinkedIn" }
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a key={i} href="#" aria-label={social.label} className="w-12 h-12 rounded-full glass border-[var(--border-color)] flex items-center justify-center hover:bg-[#D4AF37] hover:text-navy transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleWhatsApp} className="glass-strong border-[var(--border-color)] p-10 rounded-[2.5rem] space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-muted font-bold ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  required
                  className="w-full bg-[var(--bg-input)] border border-[var(--border-color)] rounded-2xl p-4 text-primary placeholder:text-muted focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted font-bold ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    required
                    className="w-full bg-[var(--bg-input)] border border-[var(--border-color)] rounded-2xl p-4 text-primary placeholder:text-muted focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted font-bold ml-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+234..." 
                    required
                    className="w-full bg-[var(--bg-input)] border border-[var(--border-color)] rounded-2xl p-4 text-primary placeholder:text-muted focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-muted font-bold ml-2">Your Goals</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your investment dreams..." 
                  className="w-full bg-[var(--bg-input)] border border-[var(--border-color)] rounded-2xl p-4 text-primary placeholder:text-muted focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-gold py-5 text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                 Submit & WhatsApp Us <Play className="w-4 h-4 fill-current" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <span className="text-xl font-bold font-['Playfair_Display'] text-primary">Emadak<span className="text-[#D4AF37]">.</span></span>
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-muted">
            <a href="#properties" className="hover:text-[#D4AF37] transition-colors">Properties</a>
            <a href="#investment" className="hover:text-[#D4AF37] transition-colors">Invest</a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">CEO Profile</a>
            <a href="#blog" className="hover:text-[#D4AF37] transition-colors">Blog</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">
            &copy; {currentYear} Emadak Global Concept Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---
export default function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="selection:bg-[#D4AF37] selection:text-navy"
      >
        <Navbar />
        <Hero />
        <TrustBar />
        <Properties />
        <Investment />
        <About />
        <Blog />
        <Contact />
        <Footer />
        <WhatsAppButton />
        
        {/* Global Aesthetics */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-[#B8860B]/5 rounded-full blur-[150px]" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}