export const metadata = { title: 'Privacy Policy — TatvaPractice' };

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-transparent" />
        <div className="relative max-w-container mx-auto px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">

            {/* Intro */}
            <div>
              <p>
                Digicare Health Solutions Pvt. Ltd. (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the TatvaPractice platform and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Services. We are committed to protecting the privacy and security of our users and their patients.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">HIPAA Compliant</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">ABDM Certified</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">ISO 27001 Accredited</span>
              </div>
            </div>

            {/* 1 */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="mb-3">
                We collect information you provide directly to us when using TatvaPractice, as well as information generated through your use of the Services.
              </p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Name, email address, phone number, and professional credentials during account registration.</li>
                <li>Clinic or hospital name, address, and practice details.</li>
                <li>Billing information and payment details for subscription services.</li>
              </ul>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Clinical Data</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Patient records, prescriptions, and medical notes created using VoiceRx, SnapRx, AmbientRx, and other platform features.</li>
                <li>Appointment schedules, billing records, and diagnostic information.</li>
                <li>Voice recordings (processed for transcription and deleted after processing unless explicitly saved).</li>
              </ul>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Usage Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information, browser type, IP address, and operating system.</li>
                <li>Feature usage patterns, session duration, and interaction logs.</li>
                <li>Error reports and performance metrics to improve the Services.</li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">2. How We Use Information</h2>
              <p className="mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, operate, and maintain the TatvaPractice platform and its features.</li>
                <li>To process and manage prescriptions, appointments, and clinical workflows.</li>
                <li>To power AI-assisted features such as VoiceRx transcription, the DDx Engine, and SmartSync integrations.</li>
                <li>To improve, personalize, and expand the Services based on usage patterns.</li>
                <li>To communicate with you, including sending service updates, security alerts, and support messages.</li>
                <li>To comply with legal obligations and enforce our terms of service.</li>
                <li>To detect, prevent, and address technical issues and security threats.</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">3. Data Storage &amp; Security</h2>
              <p className="mb-3">
                We implement industry-leading security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
                <li><strong>Access Controls:</strong> Role-based access controls (RBAC) ensure that only authorized personnel can access sensitive data.</li>
                <li><strong>Infrastructure:</strong> Data is hosted on ISO 27001 certified cloud infrastructure with redundant backups across geographically separated data centers in India.</li>
                <li><strong>Audit Trails:</strong> Comprehensive logging of all data access and modifications for compliance and security monitoring.</li>
                <li><strong>Regular Audits:</strong> We conduct periodic security assessments, penetration testing, and vulnerability scans.</li>
              </ul>
              <p>
                While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">4. ABDM Compliance</h2>
              <p className="mb-3">
                TatvaPractice is fully compliant with the Ayushman Bharat Digital Mission (ABDM) framework. Our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Supports ABHA (Ayushman Bharat Health Account) ID verification and linking.</li>
                <li>Enables creation and sharing of health records conforming to ABDM data standards.</li>
                <li>Integrates with the Health Information Exchange &amp; Consent Manager (HIE-CM) for consent-based data sharing.</li>
                <li>Follows all ABDM guidelines for data privacy, consent management, and interoperability.</li>
                <li>Supports Health Facility Registry (HFR) and Healthcare Professionals Registry (HPR) integration.</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">5. Third-Party Services</h2>
              <p className="mb-3">
                We may employ third-party companies and services to facilitate our Services. These third parties have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Categories of third-party services:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cloud Infrastructure:</strong> For secure data hosting and processing.</li>
                <li><strong>Payment Processing:</strong> For handling subscription billing securely (we do not store full payment card details).</li>
                <li><strong>Analytics:</strong> For understanding usage patterns and improving the Services (anonymized and aggregated data only).</li>
                <li><strong>Communication:</strong> For sending transactional emails, SMS notifications, and WhatsApp messages.</li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="mb-3">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> You can request correction of any inaccurate or incomplete personal data.</li>
                <li><strong>Deletion:</strong> You can request deletion of your personal data, subject to legal retention requirements.</li>
                <li><strong>Data Portability:</strong> You can request your data in a structured, machine-readable format.</li>
                <li><strong>Withdrawal of Consent:</strong> You can withdraw consent for data processing at any time, though this may affect your ability to use certain features.</li>
                <li><strong>Objection:</strong> You can object to processing of your personal data for direct marketing purposes.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at <a href="mailto:privacy@tatvacare.in" className="text-brand-500 hover:underline">privacy@tatvacare.in</a>.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="mb-3">
                We retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Data:</strong> Retained for the duration of your account and up to 90 days after account deletion.</li>
                <li><strong>Clinical Records:</strong> Retained in accordance with applicable medical record retention laws (minimum 3 years from last consultation, or as required by law).</li>
                <li><strong>Usage Logs:</strong> Retained for up to 12 months for analytics and security purposes.</li>
                <li><strong>Billing Records:</strong> Retained for up to 7 years as required by Indian tax and accounting regulations.</li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="mb-3">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date at the top.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. Continued use of the Services after any modifications constitutes your acknowledgment of the modified Privacy Policy.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="mb-3">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 space-y-1 text-sm">
                <p className="font-bold text-gray-900">Digicare Health Solutions Pvt. Ltd.</p>
                <p>Bangalore &amp; Ahmedabad, India</p>
                <p>Email: <a href="mailto:privacy@tatvacare.in" className="text-brand-500 hover:underline">privacy@tatvacare.in</a></p>
                <p className="mt-3 text-gray-400 text-xs">
                  For data protection inquiries, please allow up to 30 business days for a response.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
