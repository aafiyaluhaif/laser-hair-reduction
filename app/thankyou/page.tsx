import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import Script from 'next/script';

export default function ThankYouPage() {
  return (
    <>
      <Script id='google-ads-conversion' strategy='afterInteractive'>
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-16530903646/C3uSCJXq5NkaEN6kxso9',
            'value': 1.0,
            'currency': 'INR'
          });
        `}
      </Script>

      <div className='min-h-screen flex flex-col items-center justify-center bg-[#fff9f4] text-center px-4 py-10'>
        <CheckCircle className='text-green-500 w-20 h-20 mb-6' />
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
          Thank You!
        </h1>
        <p className='text-gray-600 max-w-xl mb-6'>
          Your request for a consultation has been received. Our team will
          contact you shortly to confirm your appointment and guide you through
          the next steps.
        </p>

        <Link
          href='/'
          className='inline-block bg-[#c6993e] hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all'
        >
          Back to Home
        </Link>

        <div className='mt-10 text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} SKINSIMA. All rights reserved.
        </div>
      </div>
    </>
  );
}
