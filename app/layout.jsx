import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const technical = JetBrains_Mono({
  variable: "--font-technical",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cúspide — La montaña no negocia",
  description:
    "Cúspide prepara durante meses, física y mentalmente, a quienes están dispuestos a ganarse la cumbre.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${body.variable} ${technical.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/skd2iqi.css" />
      </head>
      <body className="min-h-full flex flex-col bg-bone text-ink font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
