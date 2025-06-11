import type React from 'react';
import '@/app/globals.css';

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
      <body>{children}</body>
    </html>
  );
}
