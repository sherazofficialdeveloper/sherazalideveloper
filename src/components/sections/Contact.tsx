'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, CheckCircle2, AlertCircle, ShieldCheck, Clock, Send, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/portfolioData';
import { contactData } from '../../data/contactData';

// Recognizable Brand SVGs for Contact Section
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.97.57 3.81 1.558 5.362L2 22l4.764-1.523A10.003 10.003 0 0012.03 22c5.536 0 10.03-4.494 10.03-10.029C22.062 6.494 17.567 2 12.031 2zm0 18.286c-1.636 0-3.18-.465-4.502-1.272l-.323-.198-3.003.96.982-2.923-.21-.336A8.258 8.258 0 013.743 12.03c0-4.57 3.718-8.287 8.288-8.287 4.57 0 8.288 3.717 8.288 8.287 0 4.57-3.718 8.286-8.288 8.286zm4.537-6.208c-.248-.124-1.47-.726-1.698-.809-.228-.083-.394-.124-.56.124-.166.248-.642.809-.787.974-.145.166-.29.186-.539.062-.248-.124-1.047-.386-1.996-1.231-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.383.109-.506.112-.112.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.042-.311-.02-.435-.063-.124-.56-1.349-.767-1.848-.202-.485-.407-.419-.56-.427-.145-.008-.311-.008-.477-.008s-.435.062-.663.311c-.228.248-.871.85-.871 2.074 0 1.223.892 2.406 1.016 2.572.124.166 1.755 2.68 4.252 3.757.594.256 1.058.41 1.42.525.597.19 1.14.163 1.57.099.479-.071 1.47-.601 1.677-1.182.207-.581.207-1.078.145-1.182-.062-.104-.228-.166-.477-.29z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const XTwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const GoogleBusinessIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.35 11.1h-9.17v2.98h5.27c-.23 1.25-.93 2.31-1.98 3.01v2.51h3.2c1.87-1.72 2.95-4.26 2.95-7.3 0-.73-.07-1.43-.27-2.2z" fill="#4285F4"/>
    <path d="M12.18 21c2.65 0 4.88-.88 6.51-2.4l-3.2-2.51c-.88.59-2.01.94-3.31.94-2.55 0-4.71-1.72-5.48-4.04H3.39v2.59C5.03 18.82 8.35 21 12.18 21z" fill="#34A853"/>
    <path d="M6.7 12.99c-.2-.59-.31-1.22-.31-1.87 0-.65.11-1.28.31-1.87V6.66H3.39C2.72 8 2.33 9.52 2.33 11.12s.39 3.12 1.06 4.46l3.31-2.59z" fill="#FBBC05"/>
    <path d="M12.18 5.17c1.44 0 2.74.5 3.76 1.47l2.82-2.82C17.06 2.22 14.83 1.2 12.18 1.2c-3.83 0-7.15 2.18-8.79 5.46l3.31 2.59c.77-2.32 2.93-4.04 5.48-4.04z" fill="#EA4335"/>
  </svg>
);

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'Server failed to deliver email.');
      }

      setSubmittedSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err: any) {
      setServerError(
        err.message || 'Unable to dispatch message at this time. Please reach out directly via email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className=" pt-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <SectionHeading
          category="Contact Now"
          title="Get In Touch With"
          highlight="Sheraz Ali."
          highlightColor="orange"
          description="Ready to discuss project architecture, development timelines, or technical specifications? Reach out directly using the form below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Desix Form Controls (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-11 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
              {submittedSuccess ? (
                /* Success View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-['Lexend'] text-2xl font-bold text-[#18191c] mb-2">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-[15px] text-[#6f7174] max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for reaching out. I review all inquiries personally and will respond promptly.
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setSubmittedSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#e9ecef]">
                    <h3 className="font-['Lexend'] text-[20px] font-bold text-[#18191c]">
                      Send A Message
                    </h3>
                    <span className="text-[12px] font-semibold text-[#6f7174]">
                      Response within 24 hours
                    </span>
                  </div>

                  {serverError && (
                    <div className="mb-6 p-4 rounded-[4px] bg-rose-50 border border-rose-200 text-rose-700 text-[13px] flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block font-['Lexend'] text-[12px] font-bold uppercase tracking-wider text-[#18191c] mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`desix-input ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/30' : ''
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-[12px] text-rose-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-['Lexend'] text-[12px] font-bold uppercase tracking-wider text-[#18191c] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`desix-input ${
                          errors.email ? 'border-rose-400 bg-rose-50/30' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-[12px] text-rose-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-5">
                    <label
                      htmlFor="subject"
                      className="block font-['Lexend'] text-[12px] font-bold uppercase tracking-wider text-[#18191c] mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Web Application / Mobile App Project"
                      className={`desix-input ${
                        errors.subject ? 'border-rose-400 bg-rose-50/30' : ''
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-[12px] text-rose-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label
                      htmlFor="message"
                      className="block font-['Lexend'] text-[12px] font-bold uppercase tracking-wider text-[#18191c] mb-2"
                    >
                      Message Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline project scope, technical requirements, or deadlines..."
                      className={`desix-input resize-none ${
                        errors.message ? 'border-rose-400 bg-rose-50/30' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-[12px] text-rose-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message Now'}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Desix Direct Contact Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-[6px] bg-[#0F286E] bg-gradient-to-b from-[#0F286E] via-[#153B9B] to-[#0A1B4A] text-white shadow-[0_20px_50px_rgba(29,78,216,0.18)] border border-blue-400/25 relative overflow-hidden">
              <span className="absolute top-0 left-0 w-full h-[4px] bg-[#F97316]" />

              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FDBA74] block mb-2">
                // Direct Communication
              </span>
              <h3 className="font-['Lexend'] text-2xl font-bold text-white mb-3">
                Let's Build Together
              </h3>
              <p className="text-[15px] leading-[26px] text-blue-100/90 mb-8 font-normal">
                Seeking a dedicated Full Stack Developer for web platforms, mobile apps, desktop systems, or custom automation bots? Reach out directly.
              </p>

              {/* Direct Email Card */}
              <div className="group/email p-4 rounded-[4px] bg-[#0A1B4A]/90 border border-blue-400/20 hover:border-blue-400/40 hover:bg-[#10245C] hover:translate-x-1 transition-all duration-200 flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-[4px] bg-[#2563EB] text-white flex items-center justify-center shrink-0 group-hover/email:scale-105 group-hover/email:rotate-3 transition-transform duration-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-200/80 block mb-0.5">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="font-['Lexend'] text-[15px] font-bold text-white hover:text-[#F97316] hover:underline transition-colors"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp & Phone Card */}
              {contactData.whatsapp && (
                <div className="group/wa p-4 rounded-[4px] bg-[#0A1B4A]/90 border border-blue-400/20 hover:border-emerald-400/50 hover:bg-[#10245C] hover:translate-x-1 transition-all duration-200 flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-[4px] bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover/wa:scale-105 group-hover/wa:rotate-3 transition-transform duration-200 shadow-lg shadow-emerald-500/10">
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-400 block mb-0.5">
                        WhatsApp / Direct
                      </span>
                      <a
                        href={contactData.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Lexend'] text-[15px] font-bold text-white hover:text-emerald-400 hover:underline transition-colors"
                      >
                        {contactData.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <a
                    href={contactData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-[4px] bg-[#25D366]/20 hover:bg-[#25D366] text-emerald-400 hover:text-white border border-emerald-500/30 text-[12px] font-bold transition-all duration-200 shrink-0 flex items-center gap-1"
                  >
                    <span>Chat</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Availability Box */}
              <div className="group/avail p-4 rounded-[4px] bg-[#0A1B4A]/90 border border-blue-400/20 hover:border-blue-400/40 hover:bg-[#10245C] hover:translate-x-1 transition-all duration-200 flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-[4px] bg-[#F97316] text-white flex items-center justify-center shrink-0 group-hover/avail:scale-105 group-hover/avail:-rotate-3 transition-transform duration-200">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-200/80 block mb-0.5">
                    Turnaround Commitment
                  </span>
                  <span className="font-['Lexend'] text-[14px] font-semibold text-blue-100">
                    Direct response within 24 business hours
                  </span>
                </div>
              </div>

              {/* Verified Workplace Note */}
              <div className="pt-6 border-t border-blue-400/20 flex items-center gap-3 text-[13px] text-blue-200/80 hover:text-white transition-colors cursor-default">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>2+ Years Verified Commercial Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            NEW SEPARATE SECTION: CONNECT ON SOCIAL MEDIA
            (Full-width section below the form + card grid)
            ========================================================================= */}
        <div className="mt-10 sm:mt-12">
          <div className="p-8 sm:p-10 rounded-[6px] bg-[#f8f9fa] border border-[#e9ecef] shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
            <div className="mb-8 pb-5 border-b border-[#e9ecef]">
              <span className="text-[12px] font-['Lexend'] font-bold uppercase tracking-[0.18em] text-[#F97316] block mb-2">
                // Social Presence
              </span>
              <h3 className="font-['Lexend'] text-2xl font-bold text-[#18191c] mb-2">
                Connect With Sheraz Ali
              </h3>
              <p className="text-[14px] text-[#6f7174] leading-relaxed max-w-2xl">
                Follow along, start a conversation, or reach out through any of these official channels.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {/* WhatsApp */}
              {contactData.whatsapp && (
                <a
                  href={contactData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-[6px] bg-white border border-[#e2e8f0] hover:border-emerald-500 hover:shadow-xs transition-all flex items-center gap-3 group/item"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[13px] font-bold text-[#18191c] group-hover/item:text-emerald-600 transition-colors block truncate">
                      WhatsApp
                    </span>
                    <span className="text-[11px] text-[#6f7174] block">Direct Chat</span>
                  </div>
                </a>
              )}

              {/* Email */}
              <a
                href={`mailto:${contactData.email}`}
                className="p-4 rounded-[6px] bg-white border border-[#e2e8f0] hover:border-[#2563EB] hover:shadow-xs transition-all flex items-center gap-3 group/item"
              >
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[13px] font-bold text-[#18191c] group-hover/item:text-[#2563EB] transition-colors block truncate">
                    Email
                  </span>
                  <span className="text-[11px] text-[#6f7174] block">Send Inquiry</span>
                </div>
              </a>

              {/* LinkedIn */}
              {contactData.social.linkedin && (
                <a
                  href={contactData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-[6px] bg-white border border-[#e2e8f0] hover:border-[#0A66C2] hover:shadow-xs transition-all flex items-center gap-3 group/item"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[13px] font-bold text-[#18191c] group-hover/item:text-[#0A66C2] transition-colors block truncate">
                      LinkedIn
                    </span>
                    <span className="text-[11px] text-[#6f7174] block">Connect</span>
                  </div>
                </a>
              )}

              {/* X / Twitter */}
              {contactData.social.x && (
                <a
                  href={contactData.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-[6px] bg-white border border-[#e2e8f0] hover:border-black hover:shadow-xs transition-all flex items-center gap-3 group/item"
                >
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                    <XTwitterIcon className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[13px] font-bold text-[#18191c] group-hover/item:text-black transition-colors block truncate">
                      X (Twitter)
                    </span>
                    <span className="text-[11px] text-[#6f7174] block">Follow</span>
                  </div>
                </a>
              )}

              {/* Facebook */}
              {contactData.social.facebook && (
                <a
                  href={contactData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-[6px] bg-white border border-[#e2e8f0] hover:border-[#1877F2] hover:shadow-xs transition-all flex items-center gap-3 group/item"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[13px] font-bold text-[#18191c] group-hover/item:text-[#1877F2] transition-colors block truncate">
                      Facebook
                    </span>
                    <span className="text-[11px] text-[#6f7174] block">Profile</span>
                  </div>
                </a>
              )}

              {/* Facebook Page */}
              {contactData.social.facebookPage && (
                <a
                  href={contactData.social.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-[6px] bg-white border border-[#e2e8f0] hover:border-[#1877F2] hover:shadow-xs transition-all flex items-center gap-3 group/item"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[13px] font-bold text-[#18191c] group-hover/item:text-[#1877F2] transition-colors block truncate">
                      Facebook Page
                    </span>
                    <span className="text-[11px] text-[#6f7174] block">Official Page</span>
                  </div>
                </a>
              )}

              {/* Instagram */}
              {contactData.social.instagram && (
                <a
                  href={contactData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-[6px] bg-white border border-[#e2e8f0] hover:border-[#E1306C] hover:shadow-xs transition-all flex items-center gap-3 group/item"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[13px] font-bold text-[#18191c] group-hover/item:text-[#E1306C] transition-colors block truncate">
                      Instagram
                    </span>
                    <span className="text-[11px] text-[#6f7174] block">Follow</span>
                  </div>
                </a>
              )}

              {/* Google Business Profile */}
              {contactData.social.googleBusiness && (
                <a
                  href={contactData.social.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-[6px] bg-white border border-[#e2e8f0] hover:border-blue-400 hover:shadow-xs transition-all flex items-center gap-3 group/item"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                    <GoogleBusinessIcon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[13px] font-bold text-[#18191c] group-hover/item:text-[#2563EB] transition-colors block truncate">
                      Google Business
                    </span>
                    <span className="text-[11px] text-[#6f7174] block">Profile</span>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};