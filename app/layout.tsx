import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Suraj Silwal - Full Stack Web Developer',
  description: 'Portfolio of Suraj Silwal, a passionate full stack web developer specializing in React, Next.js, Node.js, and modern web technologies.',
  keywords: 'web developer, full stack developer, React, Next.js, Node.js, TypeScript, portfolio',
  authors: [{ name: 'Suraj Silwal' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: './profile.png', // your custom favicon
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}