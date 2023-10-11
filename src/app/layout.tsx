// This main layout will be for SEO
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scheldt LLC',
  description: 'Next Gen AI Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-black-100 font-poppins'>{children}</body>
    </html>
  );
}
