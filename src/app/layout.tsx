// This main layout will be for SEO
import { ThemeProvider } from '@/components/theme-provider';
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
    <html
      lang='en'
      className=''
    >
      <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem={true}
      disableTransitionOnChange={true}
      >
        <body className='min-h-screen font-poppins '>{children}</body>
      </ThemeProvider>
    </html>
  );
}
