import { motion } from "motion/react";
import { X, Search, Heart, MapPin, Globe, ArrowRight } from "lucide-react";

interface Props {
  onClose: () => void;
  onNavigate: (page: string) => void;
}

const services = [
  {
    id: "find-family",
    icon: Search,
    title: "Find My Family",
    description: "Our core service. We use a network of verified local agents across all regions of Ethiopia to locate biological families based on adoption records and personal information.",
    details: ["Record Verification", "Local Agent Network", "Confidential Search", "DNA Testing Support"]
  },
  {
    id: "support",
    icon: Heart,
    title: "Support a Family",
    description: "Facilitating direct financial aid, clothing, and housing materials to families in need. We ensure that your support reaches the intended recipients with full transparency.",
    details: ["Direct Aid Transfer", "Material Support", "Educational Assistance", "Medical Aid Coordination"]
  },
  {
    id: "visit",
    icon: MapPin,
    title: "Visit & Connect",
    description: "Arranging in-person visits with biological families. We provide translation services, logistical support, and emotional guidance to ensure a safe and meaningful reunion.",
    details: ["Logistical Planning", "Professional Translation", "Reunion Facilitation", "Cultural Guidance"]
  },
  {
    id: "explore",
    icon: Globe,
    title: "Explore Ethiopia",
    description: "Guided heritage tours led by trusted local guides. Discover the rich culture, history, and landscapes of Ethiopia, tailored for the diaspora and adoptive families.",
    details: ["Custom Heritage Tours", "Local Expert Guides", "Cultural Immersion", "Regional Exploration"]
  }
];

export default function ServicesPage({ onClose, onNavigate }: Props) {
  return (
    <div className="h-full w-full bg-white text-black overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-32">
        <header className="flex justify-between items-start mb-16 md:mb-40">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 font-bold mb-6">Our Services / Dildiy</p>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12">
              Compassionate <br />
              <span className="text-neutral-300 italic">Connection.</span>
            </h1>
            <p className="text-lg md:text-2xl text-neutral-600 leading-relaxed font-light">
              We provide a comprehensive bridge for the diaspora and adoptive families, 
              offering a range of services designed to facilitate safe, meaningful, 
              and lasting connections with their heritage in Ethiopia.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-4 hover:bg-neutral-100 rounded-full transition-colors sticky top-0"
          >
            <X className="w-8 h-8" />
          </button>
        </header>

        <section className="grid sm:grid-cols-2 gap-8 md:gap-24 mb-24 md:mb-40">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 md:p-12 bg-neutral-50 rounded-3xl hover:bg-black hover:text-white transition-all duration-500"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-black rounded-full flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform shadow-xl">
                <service.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 md:mb-6">{service.title}</h3>
              <p className="text-base md:text-lg font-light leading-relaxed mb-8 md:mb-12 opacity-70">
                {service.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12">
                {service.details.map(detail => (
                  <div key={detail} className="flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-50">
                    <div className="w-1 h-1 bg-current rounded-full" />
                    {detail}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => onNavigate(service.id)}
                className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold border-b border-current pb-2 hover:gap-4 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </section>

        <footer className="text-center py-16 md:py-24 border-t border-neutral-200">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 md:mb-12">Ready to Start?</h2>
          <button 
            onClick={onClose}
            className="bg-black text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-neutral-800 transition-colors"
          >
            Return to Home
          </button>
        </footer>
      </div>
    </div>
  );
}
