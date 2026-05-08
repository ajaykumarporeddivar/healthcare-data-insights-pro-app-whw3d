import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export function Layout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-zinc-50 antialiased">
        <div className="fixed top-0 z-50 bg-zinc-900 text-zinc-100 text-xs px-4 py-2 flex justify-between items-center">
          <span>⚡ Demo Mode — Healthcare Data Insights Pro · Built with NEXUS OS</span>
          <a href="/dashboard" className="text-zinc-100">Open Dashboard →</a>
        </div>
        <div className="pt-9">{children}</div>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Healthcare Data Insights Pro — Simplifying Healthcare Analytics',
  description: 'A micro-SaaS product designed for healthcare professionals and organizations to analyze and understand complex healthcare data.',
};