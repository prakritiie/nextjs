import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


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
      <body className="min-h-screen flex flex-col">
        {/* Navbar on top */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>

        {/* Footer at bottom */}
        <Footer />
      </body>
    </html>
  );
}
