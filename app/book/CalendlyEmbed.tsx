'use client';

import Script from 'next/script';

type Props = {
  url: string;
};

export default function CalendlyEmbed({ url }: Props) {
  const embedUrl = `${url}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=009bd7`;

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={embedUrl}
        style={{ minWidth: '320px', height: '720px' }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
