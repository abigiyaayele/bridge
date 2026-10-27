import { motion } from "motion/react";
import { X, Quote, ArrowRight } from "lucide-react";

interface Props {
  onClose: () => void;
  onNavigate: (page: string) => void;
}

const stories = [
  {
    id: "story-1",
    name: "Sara & Family",
    title: "A Reunion 20 Years in the Making",
    description: "Sara, adopted at age 3, returned to Ethiopia with her adoptive parents. After a 6-month search, we located her biological mother in the Wollo region. Their meeting was a profound moment of healing and connection.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
    quote: "The Bridge didn't just find my family; they helped me find a part of myself I didn't know was missing."
  },
  {
    id: "story-2",
    name: "The Gebre Family",
    title: "Supporting a Community",
    description: "Through our 'Support a Family' program, a diaspora family in the US has been providing monthly financial aid and educational materials to a family in their home village for over 5 years.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    quote: "It's more than just aid; it's a lifelong bond between two families across the ocean."
  },
  {
    id: "story-3",
    name: "David's Heritage Tour",
    title: "Discovering Roots in Addis",
    description: "David, a young professional from the UK, visited Ethiopia for the first time. Our heritage tour took him to his birthplace and introduced him to the vibrant culture of Addis Ababa.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    quote: "I finally understand where I come from. The experience was life-changing."
  }
];

export default function StoriesPage({ onClose, onNavigate }: Props) {
  return (
    <div className="h-full w-full bg-black text-white overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-32">
        <header className="flex justify-between items-start mb-16 md:mb-40">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-500 font-bold mb-6">Success Stories / Dildiy</p>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12">
              Real Stories of <br />
              <span className="text-neutral-600 italic">Connection.</span>
            </h1>
            <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-light">
              Witness the emotional journeys of families who have crossed The Bridge 
              to find their heritage. Every reunion is a testament to the enduring 
              power of family bonds.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-4 hover:bg-white/10 rounded-full transition-colors sticky top-0"
          >
            <X className="w-8 h-8" />
          </button>
        </header>

        <section className="space-y-24 md:space-y-40 mb-24 md:mb-40">
          {stories.map((story, i) => (
            <motion.div 
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full lg:flex-1 relative aspect-[4/5] overflow-hidden rounded-3xl group">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12">
                  <Quote className="w-8 h-8 md:w-12 md:h-12 text-white/30 mb-4 md:mb-6" />
                  <p className="text-xl md:text-2xl font-bold italic leading-tight mb-4">"{story.quote}"</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-neutral-400">— {story.name}</p>
                </div>
              </div>
              <div className="w-full lg:flex-1 space-y-6 md:space-y-8">
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-none">{story.title}</h3>
                <p className="text-base md:text-lg text-neutral-400 leading-relaxed font-light">
                  {story.description}
                </p>
                <button
                  onClick={() => onNavigate("find-family")}
                  className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold border-b border-white/20 pb-2 hover:border-white transition-all"
                >
                  Start Your Own Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </section>

        <footer className="text-center py-16 md:py-24 border-t border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 md:mb-12">Share Your Story</h2>
          <button 
            onClick={onClose}
            className="bg-white text-black px-8 md:px-12 py-4 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-neutral-200 transition-colors"
          >
            Return to Home
          </button>
        </footer>
      </div>
    </div>
  );
}
