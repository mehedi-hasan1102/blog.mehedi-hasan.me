import type { Metadata } from "next";
import "./globals.css";
// import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Mehedi Hasan | Developer, Storyteller & Technical Writer",
  description: "Discover Mehedi Hasan’s portfolio of Next.js and React projects, case studies, and technical writing. Learn through stories and code.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          {/* <ThemeToggle /> */}
          {children}
          <Contact />
        </SmoothScroll>
      </body>
    </html>
  );
}
