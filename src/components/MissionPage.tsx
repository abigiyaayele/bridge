import { motion } from "motion/react";
import { X, Heart, Shield, Globe, Users } from "lucide-react";

interface Props {
  onClose: () => void;
}

export default function MissionPage({ onClose }: Props) {
  return (
    <div className="h-full w-full bg-neutral-50 text-black overflow-y-auto">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-32">
        <header className="flex justify-between items-start mb-16 md:mb-40">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 font-bold mb-6">Our Mission / Dildiy</p>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12">
              Rebuilding Families, <br />
              <span className="text-neutral-300 italic">Restoring Roots.</span>
            </h1>
            <p className="text-lg md:text-2xl text-neutral-600 leading-relaxed font-light">
              We believe that every individual has a right to their heritage. 
              The Bridge (Dildiy) serves as a compassionate, secure, and professional 
              conduit for those seeking to reconnect with their biological families in Ethiopia.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-4 hover:bg-neutral-200 rounded-full transition-colors sticky top-0"
          >
            <X className="w-8 h-8" />
          </button>
        </header>

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-24 md:mb-40">
          {[
            { icon: Heart, title: "Compassion", desc: "Every search is handled with the utmost sensitivity and emotional support." },
            { icon: Shield, title: "Security", desc: "Verified local agents and strict confidentiality protocols protect all parties." },
            { icon: Globe, title: "Heritage", desc: "Restoring cultural connections and providing deep context to your roots." },
            { icon: Users, title: "Connection", desc: "Facilitating safe, guided reunions that prioritize long-term family bonds." },
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        <section className="grid md:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-40">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <img 
              src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=1200&auto=format&fit=crop" 
              alt="Community" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
              Over 20 Years of <br />
              <span className="text-neutral-400">Dedicated Service.</span>
            </h2>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-neutral-600 font-light leading-relaxed">
              <p>
                Founded in Addis Ababa, The Bridge began as a small initiative to help 
                adoptive families stay connected with the birth families of their children. 
                Today, we have grown into a global network of professionals and volunteers.
              </p>
              <p>
                Our name, "Dildiy," means "Bridge" in Amharic. It represents our core 
                purpose: to span the distance—geographical, cultural, and emotional—that 
                separates families.
              </p>
            </div>
            <div className="pt-8 border-t border-neutral-200 flex flex-wrap gap-8 md:gap-12">
              <div>
                <p className="text-3xl md:text-4xl font-bold tracking-tighter">500+</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-400 font-bold mt-2">Reunions Facilitated</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold tracking-tighter">15+</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-400 font-bold mt-2">Regions Covered</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center py-16 md:py-24 border-t border-neutral-200">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 md:mb-12">Join Our Mission</h2>
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
