import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppealProvider } from "@/lib/appeal-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Votable — Restoring the Right to Vote",
  description:
    "Check your SIR electoral roll status and understand your appeal options. An independent civic-information prototype by Team Coddify.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F7F2EB] text-[#2D2D2D] font-sans">
        <AppealProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppealProvider>
      </body>
    </html>
  );
}
