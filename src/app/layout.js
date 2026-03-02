import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Innovate Engineering | CNC Machining & Precision Components",
  description: "ISO 9001:2015 certified manufacturer of CNC machined components for Automobile, Pump, and General Engineering Industries. Located in Coimbatore, India.",
  keywords: "CNC machining, precision components, engineering, manufacturing, Coimbatore, India, ISO certified",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
