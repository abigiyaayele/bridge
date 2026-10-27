import { motion, AnimatePresence } from "motion/react";
import { X, Camera, Map, Globe, Compass, Clock, Video } from "lucide-react";

interface Props {
  onClose: () => void;
  onNavigate: (page: string) => void;
}

const experiences = [
  {
    title: "Cultural Immersion",
    description: "Experience the deep-rooted traditions of Ethiopia. From traditional coffee ceremonies to ancient celebrations, discover the soul of the horn of Africa.",
    image: "https://images.unsplash.com/photo-1518116550791-09609dd6774f?q=80&w=1200&auto=format&fit=crop",
    tag: "Tradition",
  },
  {
    title: "Market Exploration",
    description: "Navigate the vibrant markets of Addis Ababa and beyond. Discover handmade crafts, aromatic spices, and the colorful tapestry of daily life.",
    image: "https://images.unsplash.com/photo-1549444465-f66f91757391?q=80&w=1200&auto=format&fit=crop",
    tag: "Local Life",
  },
  {
    title: "Ancient Heritage",
    description: "Journey through history in Lalibela, Axum, and Gondar. Ethiopia's historical circuit offers a glimpse into a civilization that has flourished for millennia.",
    image: "https://images.unsplash.com/photo-1540564291723-8cf0739c362d?q=80&w=1200&auto=format&fit=crop",
    tag: "History",
  }
];

export default function ExploreEthiopiaPage({ onClose, onNavigate }: Props) {
  return (
    <div className="h-full w-full bg-[#faf9f6] text-[#1a1a1a] overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-32">
        <header className="flex justify-between items-start mb-16 md:mb-32">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 font-bold mb-6">Explore / Ethiopia</p>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12">
              Discover Your <br />
              <span className="text-neutral-300 italic">Ancestral Home.</span>
            </h1>
            <p className="text-lg md:text-2xl text-neutral-600 leading-relaxed font-light">
              Ethiopia is more than a destination; it's a journey into the heart of human history. 
              We offer curated heritage tours designed to reconnect the diaspora with the sights, 
              sounds, and soul of their roots.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-4 hover:bg-neutral-200 rounded-full transition-colors sticky top-0"
          >
            <X className="w-8 h-8" />
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mb-32">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Authentic Encounters</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Our tours prioritize genuine connection over typical tourism, introducing you to local families and communities.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Customized Routes</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Whether you want to visit your birthplace or explore historical landmarks, we tailor your itinerary to your story.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Expert Guides</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Travel with trusted, professional local guides who speak the language and understand the cultural nuances.
            </p>
          </div>
        </section>

        <section className="space-y-24 md:space-y-48">
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full lg:flex-1 relative aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/5] overflow-hidden rounded-3xl group">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded-full text-black">
                    {exp.tag}
                  </span>
                </div>
              </div>
              <div className="w-full lg:flex-1 space-y-6 md:space-y-8">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-none">
                  {exp.title}
                </h3>
                <p className="text-base md:text-xl text-neutral-500 leading-relaxed font-light">
                  {exp.description}
                </p>
                <button
                  onClick={() => onNavigate("contact")}
                  className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold border-b border-black/20 pb-2 hover:border-black transition-all"
                >
                  Inquire Now <Compass className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="mt-32 md:mt-48 grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-100 space-y-8">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">Planning Your Visit</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Office Hours (Addis Ababa)</h4>
                  <p className="text-neutral-500 text-sm">Mon – Fri: 8:30 AM – 5:30 PM (EAT)</p>
                  <p className="text-neutral-500 text-sm">Sat: 9:00 AM – 1:00 PM (EAT)</p>
                </div>
              </div>
              <div className="flex items-start gap-6 pt-6 border-t border-neutral-50">
                <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Remote Consultation</h4>
                  <p className="text-neutral-500 text-sm">Can't visit? Schedule a Google Meet with our heritage experts from anywhere in the world.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
              Start Your <br />
              <span className="text-neutral-300">Discovery.</span>
            </h2>
            <p className="text-lg text-neutral-600 font-light leading-relaxed">
              Our agents are available to discuss your heritage tour requirements and provide 
              personalized advice on visiting your ancestral home.
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="w-fit bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-neutral-800 transition-colors"
            >
              Schedule a Meet
            </button>
          </div>
        </section>

        <footer className="text-center py-24 mt-32 border-t border-neutral-200">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12">Every Journey Begins with a Step</h2>
          <button 
            onClick={onClose}
            className="bg-black text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-neutral-800 transition-colors"
          >
            Return to Home
          </button>
        </footer>
      </div>
    </div>
  );
}
