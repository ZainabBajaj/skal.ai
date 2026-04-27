import Link from 'next/link';
import { Briefcase, ArrowRight, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | SKAL',
  description: 'Open roles at SKAL. Practitioners who ship AI systems for real businesses, in Dubai and Lahore.',
};

interface Role {
  title: string;
  type: string;
  location: string;
  description: string;
}

const openRoles: Role[] = [
  // Add roles here. Example:
  // {
  //   title: 'AI Engineer',
  //   type: 'Full-time',
  //   location: 'Dubai or Lahore (hybrid)',
  //   description: 'You will design and ship production AI systems for our clients...',
  // },
];

const values = [
  {
    title: 'Practitioners only.',
    body: 'Everyone here ships. No layer of people who only review the work of people who do the work.',
  },
  {
    title: 'Small teams. Real outcomes.',
    body: 'You will own a problem end to end and answer for what you ship. Tight loops, no committees.',
  },
  {
    title: 'AI-native by default.',
    body: 'We do not staple AI onto old workflows. We rebuild around it. Your tools should match.',
  },
];

export default function CareersPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
            <Briefcase className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
            <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">CAREERS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0f172a] dark:text-white mb-6 leading-snug pb-1">
            Build with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009bd7] via-[#00E1FF] to-[#1DB5C5]">
              practitioners.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We are a small team in Dubai and Lahore that ships AI systems into real businesses.
            If you do your best work in tight loops with people who care about the outcome, we want to talk.
          </p>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-14 lg:py-20 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white mb-8 leading-snug pb-1">
              Open roles
            </h2>

            {openRoles.length === 0 ? (
              <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-900/40 dark:to-gray-800/40 p-8 sm:p-10">
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
                  No specific roles open right now.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We hire ahead of need when we meet the right person. If you ship AI systems, design agentic workflows,
                  or write code that lands in production on day one, send us a note. Tell us what you have built and what
                  you want to build next.
                </p>
                <a
                  href="mailto:hi@skal.ai?subject=Working%20at%20SKAL"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#009bd7] to-[#00E1FF] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#009bd7]/25 hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  Send us a note
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ) : (
              <ul className="space-y-4">
                {openRoles.map((role) => (
                  <li
                    key={role.title}
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:border-[#009bd7]/40"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white">{role.title}</h3>
                      <div className="flex flex-wrap gap-2 text-xs font-bold tracking-wider">
                        <span className="px-3 py-1 rounded-full bg-[#009bd7]/10 dark:bg-[#009bd7]/20 text-[#009bd7] dark:text-[#00E1FF] border border-[#009bd7]/20">
                          {role.type.toUpperCase()}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                          {role.location.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">{role.description}</p>
                    <a
                      href={`mailto:hi@skal.ai?subject=Application%3A%20${encodeURIComponent(role.title)}`}
                      className="inline-flex items-center gap-2 text-[#009bd7] dark:text-[#00E1FF] font-semibold hover:gap-3 transition-all"
                    >
                      Apply
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* What we value */}
      <section className="py-14 lg:py-20 relative bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white mb-8 leading-snug pb-1 text-center">
              How we work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl bg-white/80 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-bold text-[#0f172a] dark:text-white mb-3">{v.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{v.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#009bd7] dark:text-[#00E1FF] font-semibold hover:gap-3 transition-all"
              >
                More about the team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
