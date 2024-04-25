import Nav from '@/components/Nav/Nav';
import { ReactNode } from 'react';
import Footer from '@/components/Footer/Footer';
import { NavUserPageElements } from '@/constants/NavElements';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav navElements={NavUserPageElements} />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
