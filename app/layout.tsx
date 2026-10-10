import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just Married Moments | Wedding Day Content Creator",
  description:
    "Independent website concept for Kelly of Just Married Moments, a wedding day content creator based in Erie, Pennsylvania.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}