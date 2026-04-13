'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { itemVariants } from './SectionWrapper';
import { CONTACT_PATHS } from '@/lib/constants';

interface FormState {
  name: string;
  email: string;
  company: string;
  type: string;
  message: string;
}

export default function ContactCTA() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    type: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper
      id="contact"
      bgStyle={{
        background: 'radial-gradient(ellipse 100% 60% at 50% 0%, #1c1300 0%, #130f00 40%, #0A0A0A 70%)',
      }}
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-inter mb-4">
          Let&apos;s Talk
        </p>
        <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-[1.08] tracking-[-0.01em]">
          Begin Your{' '}
          <span className="text-gold-gradient italic">Dubai Mall Journey</span>
        </h2>
        <div className="gold-divider mb-6" />
        <p className="text-white/50 font-inter text-base md:text-lg leading-[1.8] tracking-wide">
          Three paths. One extraordinary destination. Tell us your vision.
        </p>
      </motion.div>

      {/* Three paths */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
        {CONTACT_PATHS.map((path) => (
          <motion.div
            key={path.title}
            variants={itemVariants}
            whileHover={{ y: -8, borderColor: 'rgba(201,168,76,0.5)' }}
            className="glass-card rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 group"
            onClick={() => setForm((f) => ({ ...f, type: path.title }))}
          >
            <span className="text-5xl block mb-5">{path.icon}</span>
            <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors">
              {path.title}
            </h3>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-6">{path.desc}</p>
            <span className="text-[#C9A84C] text-xs uppercase tracking-widest font-inter border-b border-[#C9A84C]/30 pb-0.5 group-hover:border-[#C9A84C] transition-colors">
              {path.cta} →
            </span>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-12 space-y-6">
            <h3 className="font-playfair text-2xl font-bold text-white mb-2">Send an Enquiry</h3>
            <p className="text-white/40 text-sm font-inter mb-6">Our partnerships team responds within 24 hours.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-white/40 text-xs uppercase tracking-widest font-inter block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="text-white/40 text-xs uppercase tracking-widest font-inter block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20"
                  placeholder="john@brand.com"
                />
              </div>
            </div>

            <div>
              <label className="text-white/40 text-xs uppercase tracking-widest font-inter block mb-2">
                Company / Brand
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="text-white/40 text-xs uppercase tracking-widest font-inter block mb-2">
                Enquiry Type *
              </label>
              <select
                required
                value={form.type}
                onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#C9A84C]/50 transition-colors appearance-none"
              >
                <option value="" disabled className="bg-[#1a1a1a]">Select a path...</option>
                <option value="Retail Leasing" className="bg-[#1a1a1a]">Retail Leasing</option>
                <option value="Brand Sponsorship" className="bg-[#1a1a1a]">Brand Sponsorship</option>
                <option value="Event Partnerships" className="bg-[#1a1a1a]">Event Partnerships</option>
              </select>
            </div>

            <div>
              <label className="text-white/40 text-xs uppercase tracking-widest font-inter block mb-2">
                Your Vision
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20 resize-none"
                placeholder="Tell us about your brand and what you'd like to achieve at Dubai Mall..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold w-full text-center justify-center"
            >
              Submit Enquiry
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-2xl p-12 text-center gold-glow"
          >
            <div className="text-6xl mb-6">✨</div>
            <h3 className="font-playfair text-3xl font-bold text-white mb-4">Enquiry Received</h3>
            <p className="text-white/50 font-inter text-sm leading-relaxed mb-2">
              Thank you, <span className="text-[#C9A84C]">{form.name}</span>. Our partnerships team will be in touch within 24 hours.
            </p>
            <p className="text-white/30 text-xs font-inter mt-4">Dubai Mall — Where the World Awaits</p>
          </motion.div>
        )}
      </motion.div>

      {/* Footer */}
      <motion.div variants={itemVariants} className="mt-24 border-t border-white/5 pt-10 text-center">
        <p className="font-playfair text-xl text-gold-gradient mb-2">DUBAI MALL</p>
        <p className="text-white/20 text-xs uppercase tracking-[0.4em] font-inter mb-6">Downtown Dubai, UAE</p>
        <div className="flex gap-8 justify-center text-white/20 text-xs font-inter">
          <span>© 2024 Emaar Malls PJSC</span>
          <span>·</span>
          <span>Privacy Policy</span>
          <span>·</span>
          <span>Terms</span>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
