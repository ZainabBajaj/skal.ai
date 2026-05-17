import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stories | SKAL',
  description: 'Field notes, case studies, and essays from the SKAL team on building AI systems and operational infrastructure that actually ship.',
  keywords: ['SKAL stories', 'AI case studies', 'AI implementation', 'operational AI essays'],
  alternates: {
    canonical: 'https://skal.ai/stories',
  },
  openGraph: {
    title: 'Stories | SKAL',
    description: 'Field notes, case studies, and essays from the SKAL team on building AI systems that actually ship.',
    url: 'https://skal.ai/stories',
    type: 'website',
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "SKAL Stories",
  "url": "https://skal.ai/stories",
  "description": "Field notes, case studies, and essays from the SKAL team.",
  "publisher": { "@id": "https://skal.ai/#organization" },
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {children}
    </>
  );
}
