import Nav from '@/components/Nav/Nav';
import { ReactNode } from 'react';
import Footer from '@/components/Footer/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav navEl1="Strona główna" />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer></Footer>
    </>
  );
}
