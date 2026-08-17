import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingThemeToggle from '../components/FloatingThemeToggle';

export const metadata: Metadata = {
  title: 'Privacy Policy | SKAL',
  description: 'How SKAL collects, uses, and protects your information.',
  alternates: { canonical: 'https://skal.ai/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <section className="pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm font-semibold text-[#009bd7] dark:text-[#00E1FF] mb-4">
              Privacy
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] dark:text-white mb-6 leading-tight">
              How SKAL handles your information.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              The short version: we collect what we need to run the site and follow up with you, nothing more. Last updated 27 April 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-10 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4">What we collect</h2>
              <p className="mb-4">
                When you submit a form on this site (contact form, chat widget, or waitlist), we collect the details you provide. That typically means your name, email, phone number if you choose to share it, and the message or context you send. This information is stored in our Supabase database and used by our team to follow up with you.
              </p>
              <p>
                When you browse the site with cookies accepted, we collect basic usage data through Google Analytics and our own analytics tooling. This includes pages visited, referral source, browser and device details, and rough location based on IP. None of this is tied to your name unless you also submit a form.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4">When you apply for a role</h2>
              <p>
                When you apply for a role at SKAL, either through{' '}
                <Link href="/careers" className="font-semibold text-[#009bd7] dark:text-[#00E1FF] underline decoration-1 underline-offset-2 hover:no-underline">
                  /careers
                </Link>
                {' '}or directly by email, we collect the information you choose to send us. That typically means your name, contact details, location, and the resume, cover letter, or work samples you share. We use that information only to evaluate your application and follow up with you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4">What we do not do</h2>
              <p>
                We do not sell your data. We do not share it with advertisers. We do not run retargeting campaigns. The only third parties that see your information are the platforms we use to run the site and respond to you: Google Analytics for usage stats, Supabase for storage and analytics, and Calendly when you book a call.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4">Your choices</h2>
              <p className="mb-4">
                You can reject analytics cookies from the banner the first time you visit. If you change your mind later, the{' '}
                <Link href="/cookie-policy" className="font-semibold text-[#009bd7] dark:text-[#00E1FF] underline decoration-1 underline-offset-2 hover:no-underline">
                  cookie policy page
                </Link>{' '}
                has a button to reset your choice.
              </p>
              <p>
                If you have submitted a form and want your data removed from our records, email{' '}
                <a href="mailto:info@skal.ai" className="font-semibold text-[#009bd7] dark:text-[#00E1FF] underline decoration-1 underline-offset-2 hover:no-underline">
                  info@skal.ai
                </a>{' '}
                and we will delete it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4">How long we keep it</h2>
              <p>
                We keep your information only as long as we need it for the purpose it was given. Form submissions stay in our records while we are following up with you and for a reasonable period after, in case you reach out again. Analytics data follows Google Analytics retention defaults (typically 14 months). When you ask us to delete your information, we will.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4">When we may share it</h2>
              <p className="mb-4">There are a few narrow cases where we may disclose your information beyond the platforms listed above:</p>
              <ul className="list-disc list-outside pl-6 space-y-2">
                <li>To establish, protect, or exercise our legal rights, or to defend against a legal claim.</li>
                <li>To investigate, prevent, or take action regarding illegal activity, suspected fraud, violations of our terms, or threats to the safety of any person.</li>
                <li>To comply with applicable laws, court orders, subpoenas, or lawful requests from government or law enforcement.</li>
                <li>To facilitate a merger, acquisition, or sale of all or part of SKAL&apos;s business. We will notify you on the site or by email before any transfer of your information, and explain the choices you have.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4">Children&apos;s privacy</h2>
              <p>
                This site is not directed at children under 18 and we do not knowingly collect personal information from anyone under 18. If you believe a child has shared information with us, email{' '}
                <a href="mailto:info@skal.ai" className="font-semibold text-[#009bd7] dark:text-[#00E1FF] underline decoration-1 underline-offset-2 hover:no-underline">
                  info@skal.ai
                </a>{' '}
                and we will remove it from our systems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4">Changes to this policy</h2>
              <p>
                We update this policy when our practices change or when the law requires it. The &quot;last updated&quot; date at the top of the page reflects any change. If a change is substantial, we will flag it on the site so you have a chance to review before continuing to use SKAL.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] dark:text-white mb-4">How to reach us</h2>
              <p>
                SKAL is registered in Dubai, UAE. License No: 262305646888. For any privacy question, email{' '}
                <a href="mailto:info@skal.ai" className="font-semibold text-[#009bd7] dark:text-[#00E1FF] underline decoration-1 underline-offset-2 hover:no-underline">
                  info@skal.ai
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingThemeToggle />
    </main>
  );
}
