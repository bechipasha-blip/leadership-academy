import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership Academy",
  description: "A starter app for leader training, coaching, and skill development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page-bg" />
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
