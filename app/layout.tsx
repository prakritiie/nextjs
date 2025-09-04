import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Blogs",
  description: "Exploring the Future of AI",
};

//  Default export must be a React component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
