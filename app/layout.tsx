import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../public/fonts/ClashDisplay-Variable.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Frans | Inagata Final Report',
  description:
    'Frans is a front end developer who specializes in building digital products powered with popular technologies.',
  icons: '/icons/face.svg',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
