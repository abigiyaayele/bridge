import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Phone, MapPin, ArrowRight, Instagram, Facebook, Twitter, Video, Calendar, Clock } from "lucide-react";
import { CONTACT_EMAIL, openEmail } from "../contact";

interface Props {
  onClose: () => void;
}

export default function ContactPage({ onClose }: Props) {
  const [isMeetRequested, setIsMeetRequested] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const meeting = isMeetRequested
      ? { "Google Meet requested": [form.date, form.time && `${form.time} EAT`].filter(Boolean).join(" at ") || "Yes, no time given" }
      : {};
    openEmail(`Message from ${form.name.trim()}`, {
      "Name": form.name,
      "Email": form.email,
      ...meeting,
      "Message": form.message,
    });
    setSent(true);
  };

  return (
    <div className="h-full w-full bg-neutral-900 text-white overflow-y-auto">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-32">
        <header className="flex justify-between items-start mb-16 md:mb-40">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-500 font-bold mb-6">Contact / Dildiy</p>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12">
              Start Your <br />
              <span className="text-neutral-400 italic">Journey.</span>
            </h1>
            <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-light">
              Whether you're looking to find your roots, support a family, or simply 
              want to learn more about our mission, our team in Addis Ababa is here 
              to guide you with care and confidentiality.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-4 hover:bg-white/10 rounded-full transition-colors sticky top-0"
          >
            <X className="w-8 h-8" />
          </button>
        </header>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-24 md:mb-40">
          <div className="space-y-12 md:space-y-16">
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-500">Contact Details</h3>
              <div className="space-y-4 md:space-y-6">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-lg md:text-2xl font-medium tracking-tight break-all">{CONTACT_EMAIL}</span>
                </a>
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-lg md:text-2xl font-medium tracking-tight">+251 11 123 4567</span>
                </div>
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-lg md:text-2xl font-medium tracking-tight">Bole Road, Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-500">Working Hours</h3>
              <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl space-y-4 md:space-y-6">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-neutral-400 text-base md:text-lg">Monday – Friday</span>
                  <span className="text-lg md:text-xl font-bold whitespace-nowrap">8:30 AM – 5:30 PM</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-neutral-400 text-base md:text-lg">Saturday</span>
                  <span className="text-lg md:text-xl font-bold whitespace-nowrap">9:00 AM – 1:00 PM</span>
                </div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500 italic pt-4 border-t border-white/10">
                  All times are East Africa Time (EAT)
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-500">Follow Our Impact</h3>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-3xl h-fit">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-6 md:mb-8">Send a Message</h3>
            <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Your Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:border-white outline-none transition-colors text-base md:text-lg" placeholder="Enter your name" required value={form.name} onChange={update("name")} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:border-white outline-none transition-colors text-base md:text-lg" placeholder="email@example.com" required value={form.email} onChange={update("email")} />
              </div>

              {/* Google Meet Option */}
              <div className="bg-white/5 border border-white/10 p-4 md:p-6 rounded-2xl space-y-4 md:space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Video className="w-4 h-4 md:w-5 md:h-5 text-neutral-400" />
                    <span className="text-[11px] md:text-sm font-bold uppercase tracking-wider">Schedule a Google Meet</span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setIsMeetRequested(!isMeetRequested)}
                    className={`w-10 md:w-12 h-5 md:h-6 rounded-full transition-colors relative shrink-0 ${isMeetRequested ? 'bg-emerald-500' : 'bg-white/10'}`}
                  >
                    <motion.div 
                      animate={{ x: isMeetRequested ? 20 : 4 }}
                      className="absolute top-0.5 md:top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {isMeetRequested && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden space-y-6 pt-6 border-t border-white/10"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                        <div className="space-y-4">
                          <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 flex items-center gap-2">
                            <Calendar className="w-3 h-3" /> Preferred Date
                          </label>
                          <div className="relative group/input">
                            <input 
                              type="date" 
                              value={form.date}
                              onChange={update("date")}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all text-sm md:text-base [color-scheme:dark]" 
                            />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 flex items-center gap-2">
                            <Clock className="w-3 h-3" /> Preferred Time (EAT)
                          </label>
                          <div className="relative group/input">
                            <input 
                              type="time" 
                              value={form.time}
                              onChange={update("time")}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all text-sm md:text-base [color-scheme:dark]" 
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-[9px] text-neutral-500 italic">
                        * Meeting link will be sent to your email after agent verification.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">How can we help?</label>
                <textarea rows={4} className="w-full bg-transparent border border-white/10 p-4 md:p-6 rounded-2xl focus:border-white outline-none transition-colors text-base md:text-lg resize-none" placeholder="Tell us about your journey..." required value={form.message} onChange={update("message")} />
              </div>
              {sent && (
                <p role="status" className="text-sm text-emerald-400">
                  Your email app should now be open with your message filled in. Press send to reach us.
                </p>
              )}
              <button type="submit" className="w-full bg-white text-black py-4 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors">
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <footer className="text-center py-16 md:py-24 border-t border-white/10">
          <p className="text-neutral-500 text-xs md:text-sm mb-8">We typically respond within 24-48 hours.</p>
          <button 
            onClick={onClose}
            className="border border-white/20 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white/10 transition-colors"
          >
            Return to Home
          </button>
        </footer>
      </div>
    </div>
  );
}
