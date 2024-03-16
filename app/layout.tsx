import { ReactNode } from 'react';
import './globals.css';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className='h-screen'>
        <div className='container m-auto pt-4'>
          <header>
            <Nav />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
