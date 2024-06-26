import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "AR23 | TODO",
  description: "TODO app for scheduling tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} flex flex-col justify-between px-3 py-6 lg:px-24 lg:py-12 min-h-screen bg-neutral-100`}>
        <Header />
        <main className="my-12 tracking-wide">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
