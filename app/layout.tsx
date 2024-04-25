import { ReactNode } from 'react';
import './globals.css';
import localFont from 'next/font/local';
import { PawLogo } from '@/public/Icons';

const madimiFont = localFont({
  src: '../public/fonts/MadimiOne-Regular.ttf',
  display: 'swap',
  variable: '--font-madimi',
});

export const metadata = {
  title: 'Samo Szczęście ',
  description:
    'Odwiedź hodowlę kotów brytyjskich Samo Szczęście i odkryj niezrównaną przyjaźń i urok tych uroczych futrzaków. Z naszą pasją i troską, wprowadź do swojego życia odrobinę kociej magii. Zapraszamy do poznania naszych pięknych kotów brytyjskich, którzy przynoszą radość i miłość w każdy kąt twojego domu.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning className={`${madimiFont.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
