import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { BookingFormData, UserProfile } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, profile }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState<BookingFormData>({
    service: 'Product Design Sprint',
    name: '',
    email: '',
    company: '',
    date: '2026-10-15',
    timeSlot: '10:00 AM PST',
    projectBudget: '$15k - $30k',
    notes: '',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const services = [
    { title: 'Product Design Sprint', desc: 'Rapid prototype & core UX flows' },
    { title: 'Design System Architecture', desc: 'Tokenized system for scaled web & mobile' },
    { title: 'Full Product Overhaul', desc: 'End-to-end design & frontend alignment' },
    { title: 'Fractional Design Advisory', desc: 'Strategic weekly leadership & critiques' },
  ];

  const timeSlots = ['09:30 AM PST', '11:00 AM PST', '02:00 PM PST', '04:00 PM PST'];
  const budgetTiers = ['< $10,000', '$10k - $25k', '$25k - $50k', '$50k+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-3xl shadow-2xl z-10 overflow-hidden my-auto text-[#111111]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-neutral-100 bg-[#FAFAFC]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-neutral-800" />
            <h3 className="text-base font-semibold text-[#111111] font-display">
              Schedule A Discovery Call
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Service Selection */}
            <div>
              <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2.5">
                1. Select Engagement Focus
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((srv) => {
                  const isSelected = formData.service === srv.title;
                  return (
                    <button
                      key={srv.title}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: srv.title })}
                      className={`p-3 rounded-2xl border text-left transition-all text-xs ${
                        isSelected
                          ? 'border-[#111111] bg-[#111111] text-white shadow-xs'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <span className={`font-semibold block mb-0.5 ${isSelected ? 'text-white' : 'text-[#111111]'}`}>
                        {srv.title}
                      </span>
                      <span className={`text-[11px] ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {srv.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-[#111111] focus:outline-none focus:border-black"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-[#111111] focus:outline-none focus:border-black"
                >
                  {timeSlots.map((ts) => (
                    <option key={ts} value={ts}>{ts}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-black"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-black"
                  required
                />
              </div>
            </div>

            {/* Company & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Halo Agency"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                  Budget Allocation
                </label>
                <select
                  value={formData.projectBudget}
                  onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-[#111111] focus:outline-none focus:border-black"
                >
                  {budgetTiers.map((tier) => (
                    <option key={tier} value={tier}>{tier}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Notes */}
            <div>
              <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                Project Overview & Goals
              </label>
              <textarea
                rows={3}
                placeholder="Tell me what you are looking to build or redesign..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-black"
              />
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex items-center justify-between gap-4">
              <span className="text-[11px] text-neutral-500">
                Direct reply to {profile.email} within 24 hours
              </span>

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#111111] hover:bg-black rounded-full transition-all shadow-sm hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span>Confirm Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-2xl font-normal text-[#111111] font-display mb-2">
                Consultation Reserved!
              </h4>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. A calendar invite has been drafted for <span className="font-semibold text-black">{formData.date} at {formData.timeSlot}</span>.
              </p>
            </div>

            <div className="bg-[#F6F6F8] rounded-2xl p-4 max-w-sm mx-auto text-left text-xs space-y-1.5 font-mono text-neutral-700">
              <div className="flex justify-between">
                <span className="text-neutral-500">Service:</span>
                <span className="text-black font-medium">{formData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Recipient:</span>
                <span className="text-black font-medium">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Reference:</span>
                <span className="text-black font-semibold">#NOVA-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-[#111111] hover:bg-black rounded-full transition-colors"
            >
              Return to Portfolio
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
