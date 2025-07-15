// Inside your existing RootLayout (pages/layout.tsx or app/layout.tsx)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/skal-logo.png" />
        <link rel="shortcut icon" type="image/png" href="/skal-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/skal-logo.png" />
        
        {/* GhostTrace AI Bot Tracker */}
        <Script 
          src="https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/ghosttrace-tracker" 
          strategy="beforeInteractive"
        />
        <Script id="ghosttrace-init" strategy="afterInteractive">
          {`
            window.GhostTrace.init({
              trackingCode: 'f2fc46b6518c600a965b97732ca2e952',
              siteId: '2f82d2b4-ca47-4145-9a1b-abb6f6f9d732',
              userId: '02122bc0-283b-4ea8-bbd0-2ed844a95a9b',
              domain: 'skal.ai'
            });
          `}
        </Script>
      </head>
      <body className={GeistSans.className}>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>

        {children}

        {/* Direct pixel injection */}
        <Script id="pixel-tracker" strategy="afterInteractive">
          {`
            (function() {
              const img = document.createElement('img');
              img.src = 'https://cemoyczgfrsspjdgczys.supabase.co/functions/v1/bright-responder?source=pixel&path=' + encodeURIComponent(window.location.pathname);
              img.width = 1;
              img.height = 1;
              img.style.display = 'none';
              img.alt = '';
              document.body.appendChild(img);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
