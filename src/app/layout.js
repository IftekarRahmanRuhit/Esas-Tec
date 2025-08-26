import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Shared/navbar";
import Footer from "./components/Shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Esas Tec - Professional Technology Solutions",
  description: "Esas Tec is a leading technology solutions company specializing in web development, mobile applications, UI/UX design, and digital transformation services.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
