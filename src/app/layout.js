import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeProvider from "../components/ThemeProvider";
import { DashboardProvider } from "../context/DashboardContext";
import { ToastContainer, toast } from 'react-toastify';
import DashboardPanel from "../components/dashboard/DashboardPanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cat-10 | Pet Adoption",
  description: "Find and adopt your perfect cat companion",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--color-surface)] text-[var(--color-foreground)]">
        <ThemeProvider>
          <DashboardProvider>
            <Navbar />
            <DashboardPanel />
            <main className="flex-1">{children}</main>
            <Footer />
          </DashboardProvider>
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}