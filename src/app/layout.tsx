import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bruno Larraín E. (brularre)',
  description:
    'Bruno Larraín is a chilean software engineer who strives to build big and bold inclusive digital experiences online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`leading-relaxed text-slate-400 selection:bg-pink-800 selection:text-neutral-200 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
