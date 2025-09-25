import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import type { Metadata } from "next";
import 'aos/dist/aos.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "Clay Girls | Pottery Workshops & Classes",
  description: "Join Clay Girls for hands-on pottery workshops and classes. Learn hand-building techniques in a creative, supportive environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="bg-gray-50">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
