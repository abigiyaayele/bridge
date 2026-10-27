import React, { useState } from "react";
import { motion } from "motion/react";
import { X, ArrowRight, Check } from "lucide-react";

interface Props {
  onClose: () => void;
}

export default function FindFamilyForm({ onClose }: Props) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    birthPlace: "",
    orphanage: "",
    adoptiveParents: "",
    contactEmail: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Success state
  };

  return (
    <div className="h-full w-full bg-white text-black overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <header className="flex justify-between items-start mb-12 md:mb-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-bold mb-4">Form 01 / Search Request</p>
            <h1 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter">Find My Family</h1>
          </div>
          <button 
            onClick={onClose}
            className="p-4 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6 md:space-y-8">
                <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                  Beginning the journey to find your biological family is a significant step. 
                  Please provide as much detail as possible to help our local agents in Ethiopia 
                  conduct a thorough and sensitive search.
                </p>
                <div className="p-6 md:p-8 bg-neutral-50 rounded-2xl space-y-4">
                  <h3 className="font-bold uppercase tracking-widest text-[10px] md:text-xs">Confidentiality Notice</h3>
                  <p className="text-[11px] md:text-xs text-neutral-500 leading-relaxed">
                    All information provided is strictly confidential. We only share details with 
                    verified local agents and biological family members once a connection is confirmed 
                     and both parties consent.
                  </p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="group">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 block mb-2">Full Name (at birth if known)</label>
                   <input 
                     type="text" 
                     className="w-full border-b border-neutral-200 py-3 md:py-4 focus:border-black outline-none transition-colors text-lg md:text-xl"
                     placeholder="Enter your name"
                     value={formData.fullName}
                     onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                   />
                </div>
                <div className="group">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 block mb-2">Date of Birth (Approximate is fine)</label>
                   <input 
                     type="text" 
                     className="w-full border-b border-neutral-200 py-3 md:py-4 focus:border-black outline-none transition-colors text-lg md:text-xl"
                     placeholder="DD / MM / YYYY"
                     value={formData.birthDate}
                     onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                   />
                </div>
                <div className="group">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 block mb-2">Place of Birth / Region</label>
                   <input 
                     type="text" 
                     className="w-full border-b border-neutral-200 py-3 md:py-4 focus:border-black outline-none transition-colors text-lg md:text-xl"
                     placeholder="e.g. Addis Ababa, Wollo, etc."
                     value={formData.birthPlace}
                     onChange={(e) => setFormData({...formData, birthPlace: e.target.value})}
                   />
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-black text-white py-4 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4 md:space-y-6">
                <div className="group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 block mb-2">Orphanage Name (if known)</label>
                  <input 
                    type="text" 
                    className="w-full border-b border-neutral-200 py-3 md:py-4 focus:border-black outline-none transition-colors text-lg md:text-xl"
                    placeholder="Name of the institution"
                    value={formData.orphanage}
                    onChange={(e) => setFormData({...formData, orphanage: e.target.value})}
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 block mb-2">Adoptive Parents' Names</label>
                  <input 
                    type="text" 
                    className="w-full border-b border-neutral-200 py-3 md:py-4 focus:border-black outline-none transition-colors text-lg md:text-xl"
                    placeholder="For verification purposes"
                    value={formData.adoptiveParents}
                    onChange={(e) => setFormData({...formData, adoptiveParents: e.target.value})}
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 block mb-2">Your Contact Email</label>
                  <input 
                    type="email" 
                    className="w-full border-b border-neutral-200 py-3 md:py-4 focus:border-black outline-none transition-colors text-lg md:text-xl"
                    placeholder="email@example.com"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6">
                <div className="group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 block mb-2">Additional Information</label>
                  <textarea 
                    rows={6}
                    className="w-full border border-neutral-200 p-4 md:p-6 rounded-2xl focus:border-black outline-none transition-colors text-base md:text-lg resize-none"
                    placeholder="Any other details that might help (names of siblings, physical descriptions, etc.)"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setStep(1)}
                    className="flex-1 border border-neutral-200 py-4 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-neutral-50 transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="flex-[2] bg-black text-white py-4 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors"
                  >
                    Submit <span className="hidden sm:inline">Request</span> <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center mb-12">
              <Check className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-6">Request Received</h2>
            <p className="text-lg md:text-xl text-neutral-500 max-w-lg leading-relaxed mb-12">
              Thank you for trusting us with your journey. Our team in Addis Ababa will review 
              your information and contact you within 3-5 business days to discuss next steps.
            </p>
            <button 
              onClick={onClose}
              className="bg-black text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-neutral-800 transition-colors"
            >
              Return to Home
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
