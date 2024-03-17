import { ReactNode } from 'react';
import Nav from '@/components/Nav';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className='container m-auto pt-4'>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  );
}
