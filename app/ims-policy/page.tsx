import { ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality & Information Security Management System Policy | SKAL',
  description: "SKAL's Quality & Information Security Management System Policy, aligned to ISO 9001 and ISO 27001 international standards.",
  alternates: { canonical: 'https://skal.ai/ims-policy' },
  robots: { index: true, follow: true },
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
              Quality &amp; Information Security Management System Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Aligned to ISO 9001 and ISO 27001 international standards.
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Last updated: 27 April 2026</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 lg:py-16 relative bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-[#0f172a] dark:prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-[#009bd7] dark:prose-a:text-[#00E1FF] prose-strong:text-[#0f172a] dark:prose-strong:text-white prose-li:text-gray-700 dark:prose-li:text-gray-300">
            <p>
              SKAL helps companies build innovative AI systems and software with a team of world-class engineers and an opinionated approach to each project, so clients can be confident in their success with SKAL. Our comprehensive Quality &amp; Information Security Management System, in compliance with ISO 9001 and ISO 27001 international standards, ensures that your business is protected.
            </p>

            <p>
              SKAL aims to maintain and continually improve its Integrated Management System (ISMS &amp; QMS) by implementing quality and information security policies including access control, acceptable use, clear desk and clear screen, anti-malware, password protection, and others. SKAL adheres to best IMS practices that are in complete alignment with industry standards while providing AI systems, custom software, and development services.
            </p>

            <p>
              SKAL works in accordance with national and international client requirements within the jurisdictions where it operates, as well as fulfilling its contractual obligations. This is to ensure the protection of all information assets from all threats, internal or external, deliberate or accidental, and natural disasters.
            </p>

            <p>To achieve these objectives SKAL will ensure that:</p>

            <ul>
              <li>Business and client requirements for quality, security, and privacy are met.</li>
              <li>At all times, the confidentiality, integrity, and availability of information is maintained throughout the process flow.</li>
              <li>All corporate assets (tangible and intangible) are held in a physically and logically secure environment.</li>
              <li>The risks to all corporate assets (tangible and intangible) are assessed, and against those risks, appropriate contingency and mitigation plans are defined.</li>
              <li>Employees are provided with safe working environments in compliance with best industry practices.</li>
              <li>All personnel are well-trained on information security procedures.</li>
              <li>Physical, logical, and remote access to all corporate assets is monitored and controlled.</li>
              <li>Business continuity plans are established, maintained, and tested as needed.</li>
            </ul>

            <p>
              This policy was approved by the SKAL Chief Executive and will be reviewed at regular management review meetings by senior management.
            </p>

            <p>
              For any queries, drop a message at <a href="mailto:info@skal.ai">info@skal.ai</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
