import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ModalProvider from '@/components/ModalProvider';

export const metadata = {
  title: 'TatvaPractice — AI-Powered Practice Management',
  description: 'TatvaPractice is the AI-powered practice management system that helps doctors write prescriptions in seconds, manage appointments, and grow their practice.',
  keywords: 'practice management, AI EMR, electronic medical records, TatvaPractice, VoiceRx, SnapRx, cloud EMR, India healthcare',
  openGraph: {
    title: 'TatvaPractice — AI-Powered Practice Management',
    description: 'The complete AI-first practice management system for doctors, clinics, and hospitals.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans text-black bg-white">
        <ModalProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
