import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Turki Aziz — Full-Stack Engineer',
  description:
    'Portfolio of Turki Aziz, a Full-Stack Engineer specializing in scalable APIs, modern technologies, and clean architecture.',
  keywords: ['Turki Aziz', 'Full-Stack Engineer', 'Portfolio', 'React', 'Next.js', 'Node.js'],
  authors: [{ name: 'Turki Aziz' }],
  openGraph: {
    title: 'Turki Aziz — Full-Stack Engineer',
    description: 'Portfolio of Turki Aziz, a Full-Stack Engineer specializing in scalable APIs.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
