import { ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IMS Policy | SKAL',
  description: "SKAL's Information Management System Policy: how we handle data, security, and quality across our engagements.",
};

export default function IMSPolicyPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#009bd7]/10 to-[#00E1FF]/10 dark:from-[#009bd7]/20 dark:to-[#00E1FF]/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-[#009bd7]/20 dark:border-[#00E1FF]/30">
              <ShieldCheck className="w-4 h-4 text-[#009bd7] dark:text-[#00E1FF]" />
              <span className="text-[#009bd7] dark:text-[#00E1FF] text-sm font-bold tracking-wider">POLICY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] dark:text-white mb-4 leading-snug pb-1">
              IMS Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              How SKAL manages information across our engagements: security, quality, and the data you trust us with.
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Last updated: 27 April 2026</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 lg:py-16 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-[#0f172a] dark:prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-[#009bd7] dark:prose-a:text-[#00E1FF] prose-strong:text-[#0f172a] dark:prose-strong:text-white">
            <h2>Scope</h2>
            <p>
              This policy applies to all information SKAL collects, processes, or stores in the course of operating skal.ai and delivering services to clients. It covers employees, contractors, and any third party acting on SKAL&apos;s behalf.
            </p>

            <h2>Principles</h2>
            <p>
              SKAL handles information under four principles: <strong>confidentiality</strong> (only those who need to see it can), <strong>integrity</strong> (data is accurate and not tampered with), <strong>availability</strong> (authorised users can reach what they need), and <strong>accountability</strong> (every change has a clear owner).
            </p>

            <h2>Governance</h2>
            <p>
              The SKAL leadership team owns this policy and reviews it at least annually. Changes are versioned and communicated to all staff. The policy is aligned to industry-standard frameworks; specific certifications are referenced when achieved.
            </p>

            <h2>Data classification</h2>
            <p>
              Information is classified into four tiers: <strong>public</strong> (marketing, blog posts), <strong>internal</strong> (operations docs, finance), <strong>confidential</strong> (client data, signed NDAs), and <strong>restricted</strong> (credentials, secrets, personal data of identifiable individuals). Each tier has handling, storage, and retention rules.
            </p>

            <h2>Access control</h2>
            <p>
              Access to client data and production systems follows least-privilege. Multi-factor authentication is required on all accounts that touch client data, source code, or cloud infrastructure. Access is reviewed quarterly and revoked the same day a person stops needing it.
            </p>

            <h2>Security operations</h2>
            <p>
              Production systems run with logging enabled and monitored alerts. Patches are applied on a defined cadence. Backups are tested. Encryption in transit and at rest is the default for all client data we hold.
            </p>

            <h2>Incident response</h2>
            <p>
              SKAL maintains an incident response plan. Suspected breaches are triaged within hours, communicated to affected clients without delay, and remediated with a written post-mortem. Lessons feed back into the controls above.
            </p>

            <h2>Third parties</h2>
            <p>
              SKAL uses third-party providers (cloud, email, analytics, payment) under written agreements that match or exceed this policy. A current list is available to clients on request.
            </p>

            <h2>Continuous improvement</h2>
            <p>
              This policy is a starting point, not a stopping point. SKAL reviews controls in light of incidents, audits, regulatory change, and the realities of running production AI systems for our clients.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy or how we handle your data? Email <a href="mailto:hi@skal.ai">hi@skal.ai</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
