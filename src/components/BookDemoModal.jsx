'use client';
import { useState, useEffect } from 'react';

const SPECIALTIES = [
  'General Practice',
  'Cardiology',
  'Dermatology',
  'Pediatrics',
  'Orthopedics',
  'Gynecology',
  'ENT',
  'Ophthalmology',
  'Psychiatry',
  'Other',
];

const SLOTS = [
  'Morning 9-12',
  'Afternoon 12-3',
  'Evening 3-6',
  'Any Time',
];

export default function BookDemoModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', specialty: '', city: '', slot: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setForm({ name: '', phone: '', specialty: '', city: '', slot: '' });
      setSubmitted(false);
    }
  }, [isOpen]);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const entry = { ...form, timestamp: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem('bookDemoSubmissions') || '[]');
    existing.push(entry);
    localStorage.setItem('bookDemoSubmissions', JSON.stringify(existing));
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ animation: 'fadeIn 0.25s ease' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 sm:p-10 z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-800 text-lg font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">&#10003;</div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-500">We&apos;ll reach out shortly to schedule your demo.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">Book a Demo</h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              See TatvaPractice in action. Fill in your details and we&apos;ll schedule a personalized demo.
            </p>

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
                  placeholder="Dr. Sharma"
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

              {/* Specialty */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Specialty</label>
                <select
                  name="specialty"
                  required
                  value={form.specialty}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition appearance-none"
                >
                  <option value="">Select your specialty</option>
                  {SPECIALTIES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">City</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Bangalore"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition"
                />
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Slot</label>
                <select
                  name="slot"
                  required
                  value={form.slot}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition appearance-none"
                >
                  <option value="">Select a time slot</option>
                  {SLOTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl text-white font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #5046E5, #1E1B4B)' }}
              >
                Request Demo
              </button>
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
