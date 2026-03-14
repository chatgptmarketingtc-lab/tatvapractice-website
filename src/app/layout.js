import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'TatvaCare — The AI Operating System for Healthcare',
  description: 'From a single prescription to a lifetime of care — TatvaCare builds AI that powers every touchpoint across doctors, patients, pharma, and payors.',
  keywords: 'healthcare AI, EMR, electronic medical records, TatvaPractice, GoodFlip, Evalus, Zyvelor, India healthcare',
  openGraph: {
    title: 'TatvaCare — The AI Operating System for Healthcare',
    description: 'From a single prescription to a lifetime of care — we build the AI that powers every touchpoint across doctors, patients, pharma, and payors.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans text-black bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
