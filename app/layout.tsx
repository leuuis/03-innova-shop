import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./config/fonts";

export const metadata: Metadata = {
  title: "Innova Shopping App",
  description: "A shopping app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
