import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Mail, Users, Heart, MapPin, Globe, Info, MessageSquare } from "lucide-react";
import MissionPage from "./components/MissionPage";
import ServicesPage from "./components/ServicesPage";
import StoriesPage from "./components/StoriesPage";
import ContactPage from "./components/ContactPage";
import FindFamilyForm from "./components/FindFamilyForm";
import ExploreEthiopiaPage from "./components/ExploreEthiopiaPage";
import { CONTACT_EMAIL } from "./contact";

const carouselImages = [
  "https://images.unsplash.com/photo-1518116550791-09609dd6774f?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549444465-f66f91757391?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540564291723-8cf0739c362d?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1920&auto=format&fit=crop",
];

const menuItems = [
  {
    id: "mission",
    label: "Our Mission",
    title: "Rebuilding Families, Restoring Roots",
    description: "The Bridge (Dildiy) is dedicated to connecting hearts and heritage across the globe. We specialize in reuniting families and helping individuals discover their roots in Ethiopia with security, compassion, and expertise.",
    icon: Heart,
    cta: "Learn More",
  },
  {
    id: "services",
    label: "Our Services",
    title: "Compassionate Connection",
    description: "From biological family searches and verified agent support to heritage tours and financial aid facilitation, we provide a comprehensive bridge for the diaspora and adoptive families.",
    icon: Users,
    cta: "View Services",
    subItems: ["Find My Family", "Support a Family", "Visit & Connect", "Explore Ethiopia"]
  },
  {
    id: "stories",
    label: "Success Stories",
    title: "Real Stories of Connection",
    description: "Witness the emotional journeys of families who have crossed The Bridge to find their heritage. Every reunion is a testament to the enduring power of family bonds.",
    icon: MessageSquare,
    cta: "Read Stories",
  },
  {
    id: "contact",
    label: "Get in Touch",
    title: "Start Your Journey",
    description: "Ready to find your roots or support a family in need? Our team in Addis Ababa is here to guide you through every step of the process with care and confidentiality.",
    icon: Mail,
    cta: "Contact Us",
  },
];

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleMenuEnter = (id: string | null) => {
    if (leaveTimeout) {
      window.clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    if (id) {
      setActiveMenu(id);
    }
    setIsMenuHovered(true);
  };

  const handleMenuLeave = () => {
    const timeout = window.setTimeout(() => {
      setActiveMenu(null);
      setIsMenuHovered(false);
    }, 1000); // Increased to 1000ms for a much more generous grace period
    setLeaveTimeout(timeout);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "mission":
        return <MissionPage onClose={() => setCurrentPage(null)} />;
      case "services":
        return <ServicesPage onClose={() => setCurrentPage(null)} onNavigate={(page) => setCurrentPage(page)} />;
      case "stories":
        return <StoriesPage onClose={() => setCurrentPage(null)} onNavigate={(page) => setCurrentPage(page)} />;
      // "Support a Family" and "Visit & Connect" have no page of their own yet,
      // so they go to the contact form.
      case "support":
      case "visit":
      case "contact":
        return <ContactPage onClose={() => setCurrentPage(null)} />;
      case "find-family":
        return <FindFamilyForm onClose={() => setCurrentPage(null)} />;
      case "explore":
        return <ExploreEthiopiaPage onClose={() => setCurrentPage(null)} onNavigate={(page) => setCurrentPage(page)} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white font-sans selection:bg-white selection:text-black">
      <AnimatePresence>
        {currentPage && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            {renderPage()}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={carouselImages[currentImageIndex]}
            alt="Background"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Main UI Overlay */}
      <div className="relative z-20 h-full w-full flex flex-col justify-between p-6 md:p-16">
        
        {/* Header / Brand */}
        <header className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-[0.4em] leading-none mb-2">
              The Bridge
            </h1>
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] text-neutral-400 font-medium">
              Dildiy • Rebuilding Families
            </p>
          </div>
          
          <div className="hidden sm:flex gap-8 md:gap-12">
            <div className="text-right">
              <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-1">Location</p>
              <p className="text-[11px] font-bold uppercase tracking-wider">Addis Ababa, Ethiopia</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-1">Contact</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[11px] font-bold uppercase tracking-wider hover:underline">{CONTACT_EMAIL}</a>
            </div>
          </div>
        </header>

        {/* Central Menu System */}
        <main className="flex flex-col items-center justify-center flex-grow">
          <nav 
            className="flex flex-col items-center gap-4 md:gap-6"
            onMouseEnter={() => handleMenuEnter(null)}
            onMouseLeave={handleMenuLeave}
          >
            {menuItems.map((item, index) => (
              <div 
                key={item.id}
                className="relative group"
                onMouseEnter={() => handleMenuEnter(item.id)}
              >
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter transition-all duration-500 ${
                    activeMenu === item.id 
                      ? "text-white scale-105" 
                      : isMenuHovered 
                        ? "text-white/20 blur-[1px]" 
                        : "text-white/80"
                  }`}
                >
                  {item.label}
                </motion.button>                {/* Content Reveal on Hover */}
                <AnimatePresence>
                  {activeMenu === item.id && (
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="hidden lg:block fixed top-1/2 right-24 -translate-y-1/2 w-[450px] pointer-events-none z-50"
                    >
                      {/* Hover Bridge: Expanded transparent area to ensure mouse transit doesn't break hover */}
                      <div 
                        className="absolute top-0 -left-[500px] w-[500px] h-full pointer-events-auto"
                        onMouseEnter={() => handleMenuEnter(item.id)}
                        onMouseLeave={handleMenuLeave}
                      />
                      
                      <div 
                        className="bg-black/90 md:bg-white/5 backdrop-blur-2xl md:backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-2xl shadow-2xl pointer-events-auto relative z-10"
                        onMouseEnter={() => handleMenuEnter(item.id)}
                        onMouseLeave={handleMenuLeave}
                      >
                        <item.icon className="w-6 h-6 md:w-8 md:h-8 mb-4 md:mb-6 text-white/50" />
                        <h2 className="text-xl md:text-3xl font-bold uppercase tracking-tight mb-3 md:mb-4">
                          {item.title}
                        </h2>
                        <p className="text-xs md:text-base font-light leading-relaxed text-neutral-300 mb-6 md:mb-8">
                          {item.description}
                        </p>
                        
                        {item.subItems && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                            {item.subItems.map(sub => (
                              <div key={sub} className="flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                                <div className="w-1 h-1 bg-white/30 rounded-full" />
                                {sub}
                              </div>
                            ))}
                          </div>
                        )}

                        <button 
                          onClick={() => setCurrentPage(item.id)}
                          onMouseEnter={() => handleMenuEnter(item.id)}
                          className="group/btn flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold border-b border-white/20 pb-2 hover:border-white transition-all pointer-events-auto"
                        >
                          {item.cta} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Inline description for Mobile/Tablets */}
                <AnimatePresence>
                  {activeMenu === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="lg:hidden w-full text-center mt-4 px-4 overflow-hidden"
                    >
                      <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium">
                        {item.title}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </main>

        {/* Footer Navigation */}
        <footer className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex gap-4">
              {carouselImages.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-0.5 transition-all duration-700 ${i === currentImageIndex ? 'w-12 bg-white' : 'w-4 bg-white/20'}`} 
                />
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold">
              0{currentImageIndex + 1} / 0{carouselImages.length}
            </p>
          </div>

          <div className="flex items-center gap-8 md:gap-12">
            <div className="hidden sm:block text-right">
              <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-1">Established</p>
              <p className="text-[11px] font-bold uppercase tracking-wider">2006 • 20 Years</p>
            </div>
            <button 
              onClick={() => setCurrentPage("find-family")}
              className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-200 transition-colors shadow-2xl whitespace-nowrap"
            >
              Find My Family
            </button>
          </div>
        </footer>
      </div>

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}
      />

      {/* Made with Badge */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 z-50 [writing-mode:vertical-lr] rotate-180 opacity-30 hover:opacity-100 transition-opacity cursor-default">
        <p className="text-[9px] uppercase tracking-[0.5em] font-bold">
          The Bridge • Rebuilding Families • Ethiopia
        </p>
      </div>
    </div>
  );
}
