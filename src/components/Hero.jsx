import Spline from '@splinetool/react-spline';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-14 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
            Modern • Aman • Real‑time
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Absensi Wajah dengan Liveness Detection
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Sistem absensi berbasis kamera yang memverifikasi identitas dan kehadiran secara otomatis. Integrasi dengan Supabase untuk autentikasi, penyimpanan, dan database.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3" id="cta">
            <a href="/login" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 font-medium shadow hover:shadow-lg transition-shadow">
              Mulai Login
              <ChevronRight size={18} />
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-800 px-5 py-3 font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Lihat Cara Kerja
            </a>
          </div>
        </div>
        <div className="relative h-[360px] sm:h-[420px] md:h-[480px] rounded-2xl">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-blue-500/10 dark:from-slate-900/30 dark:to-indigo-600/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
