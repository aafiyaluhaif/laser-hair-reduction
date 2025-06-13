import type React from 'react';
import '@/app/globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'GlowLaser - Advanced Laser Hair Reduction Treatments',
  description:
    'Experience smooth, hair-free skin with our state-of-the-art laser hair reduction treatments. Safe, effective, and long-lasting results.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-V3VZ89SJ9Z'
          strategy='afterInteractive'
        />
        <Script id='gtag-init' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V3VZ89SJ9Z');
        `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
