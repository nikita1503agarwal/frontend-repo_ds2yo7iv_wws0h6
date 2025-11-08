import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} FaceAttend. All rights reserved.</p>
        <div className="text-sm text-slate-600 dark:text-slate-400">
          Dibangun dengan React, Tailwind, dan Spline.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}
