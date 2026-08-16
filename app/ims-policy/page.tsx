
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
    <main className="min-h-screen bg-paper">
      <Navbar />

      {/* Header */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-14">
        <div className="shell">
          <div className="max-w-[58ch]">
            <div className="mb-6">
              <span className="text-signal text-sm font-bold tracking-wider">POLICY</span>
            </div>

            <h1 className="font-display t-hero text-ink mb-4 max-w-[18ch]">
              Quality &amp; Information Security Management System Policy
            </h1>
            <p className="text-lg text-ink-2">
              Aligned to ISO 9001 and ISO 27001 international standards.
            </p>
            <p className="mt-4 text-sm text-ink-3">Last updated: 27 April 2026</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 lg:py-16 relative bg-surface">
        <div className="shell">
          <div className="shell-tight prose-skal">
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
