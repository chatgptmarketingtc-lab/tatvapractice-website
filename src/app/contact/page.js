'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const entry = { ...form, timestamp: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    existing.push(entry);
    localStorage.setItem('contactSubmissions', JSON.stringify(existing));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  }

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-transparent" />
        <div className="relative max-w-container mx-auto px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Get in Touch</h1>
          <p className="text-white/50 text-sm">We&apos;d love to hear from you. Reach out with questions, feedback, or partnership inquiries.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="text-center py-16 bg-gray-50 rounded-3xl">
                  <div className="text-5xl mb-4">&#10003;</div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl text-white font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
                    style={{ background: 'linear-gradient(135deg, #5046E5, #1E1B4B)' }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Company Info */}
            <div className="lg:pt-12">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Company Information</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Digicare Health Solutions Pvt. Ltd.</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <div>
                        <p>Bangalore, Karnataka, India</p>
                        <p>Ahmedabad, Gujarat, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Email Us</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <div>
                        <p>General: <a href="mailto:contact@tatvacare.in" className="text-brand-500 hover:underline">contact@tatvacare.in</a></p>
                        <p>Privacy: <a href="mailto:privacy@tatvacare.in" className="text-brand-500 hover:underline">privacy@tatvacare.in</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Quick Links</h3>
                  <div className="flex flex-wrap gap-2">
                    <a href="/terms" className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors no-underline">
                      Terms &amp; Conditions
                    </a>
                    <a href="/privacy" className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors no-underline">
                      Privacy Policy
                    </a>
                    <a href="/about" className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors no-underline">
                      About Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
