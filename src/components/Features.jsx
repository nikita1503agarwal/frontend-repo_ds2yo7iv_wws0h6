import { ShieldCheck, Video, Users, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Liveness Detection',
    desc: 'Cegah spoofing dengan verifikasi gerak dan kedipan, memastikan kehadiran asli. ',
  },
  {
    icon: Video,
    title: 'Berbasis Kamera',
    desc: 'Jalankan langsung dari browser perangkat tanpa instal aplikasi tambahan.',
  },
  {
    icon: Users,
    title: 'Autentikasi Supabase',
    desc: 'Login aman menggunakan email dan password dengan manajemen sesi modern.',
  },
  {
    icon: CheckCircle2,
    title: 'Absensi Real‑time',
    desc: 'Proses check‑in/out cepat dan tersimpan otomatis di database.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Fitur Unggulan</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Dirancang untuk akurasi, keamanan, dan kemudahan penggunaan di lingkungan kampus maupun kantor.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
