'use client';
import { useState, useEffect, useRef } from 'react';

const EXPERIENCE_OPTIONS = [
  '0-1 years',
  '1-3 years',
  '3-5 years',
  '5+ years',
];

export default function CareerFormModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentRole: '',
    experience: '',
    linkedin: '',
  });
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      setForm({ fullName: '', email: '', phone: '', currentRole: '', experience: '', linkedin: '' });
      setFileName('');
      setFileError('');
      setSubmitted(false);
    }
  }, [isOpen]);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    setFileError('');
    if (!file) {
      setFileName('');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setFileError('File size must be under 5 MB.');
      setFileName('');
      e.target.value = '';
      return;
    }
    setFileName(file.name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const entry = {
      ...form,
      resumeFileName: fileName || null,
      timestamp: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem('careerSubmissions') || '[]');
    existing.push(entry);
    localStorage.setItem('careerSubmissions', JSON.stringify(existing));
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
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 sm:p-10 z-10 max-h-[90vh] overflow-y-auto">
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
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Application Sent!</h3>
            <p className="text-gray-500">Thanks for your interest. We&apos;ll review your application and get back to you.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">Join Our Team</h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              We&apos;re always looking for talented people. Upload your resume and we&apos;ll be in touch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
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

              {/* Current Role */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Current Role</label>
                <input
                  type="text"
                  name="currentRole"
                  required
                  value={form.currentRole}
                  onChange={handleChange}
                  placeholder="Frontend Developer"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Experience</label>
                <select
                  name="experience"
                  required
                  value={form.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition appearance-none"
                >
                  <option value="">Select experience</option>
                  {EXPERIENCE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  LinkedIn URL <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={form.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition"
                />
              </div>

              {/* Resume / CV */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Resume / CV</label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="w-full rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 hover:border-indigo-400 hover:bg-indigo-50/30 transition-colors cursor-pointer px-4 py-6 text-center"
                >
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {fileName ? (
                    <p className="text-sm text-gray-700 font-medium">{fileName}</p>
                  ) : (
                    <>
                      <p className="text-sm text-gray-500 mb-1">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-400">PDF, DOC, or DOCX (max 5 MB)</p>
                    </>
                  )}
                </div>
                {fileError && <p className="text-xs text-red-500 mt-1">{fileError}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl text-white font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #5046E5, #1E1B4B)' }}
              >
                Submit Application
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
