import { Fingerprint, Camera, HardDriveDownload, Clock8 } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Cara Kerja</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Empat langkah sederhana untuk pengalaman absensi yang mulus.</p>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          <li className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">1</div>
            <h3 className="mt-4 font-semibold text-slate-900 dark:text-white flex items-center gap-2"><Fingerprint size={18}/> Autentikasi</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Masuk menggunakan akun email dan password dengan Supabase Auth.</p>
          </li>
          <li className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">2</div>
            <h3 className="mt-4 font-semibold text-slate-900 dark:text-white flex items-center gap-2"><Camera size={18}/> Daftarkan Wajah</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Ambil sampel wajah melalui kamera lalu simpan ke penyimpanan aman.</p>
          </li>
          <li className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">3</div>
            <h3 className="mt-4 font-semibold text-slate-900 dark:text-white flex items-center gap-2"><HardDriveDownload size={18}/> Verifikasi</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Sistem mencocokkan wajah real‑time dengan profil yang telah terdaftar.</p>
          </li>
          <li className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">4</div>
            <h3 className="mt-4 font-semibold text-slate-900 dark:text-white flex items-center gap-2"><Clock8 size={18}/> Catat Kehadiran</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Check‑in/out tersimpan otomatis dan siap dipantau di dashboard.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
