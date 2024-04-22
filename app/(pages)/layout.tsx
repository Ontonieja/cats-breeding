import Nav from '@/components/Nav/Nav';
import { ReactNode } from 'react';
import Footer from '@/components/Footer/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav navEl1="Strona główna" />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
