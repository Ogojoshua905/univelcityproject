import { Vujahday_Script } from "next/font/google";
import Navbar from "./comps/Navbar";
import Footer from "./comps/Footer";
import "./globals.css";

const Viju = Vujahday_Script({ 
  subsets: ["latin"], 
  weight:['400']});

export const metadata = {
  title: "Blogging Platform",
  description: "My Blogging Platform",
  keywords: "html, cssc tailwindcss, js, javascript, next, vite"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={Viju.className}>
      <Navbar />

        <div className="min-h-[90vh]">
        {children}
        </div>
      
      <Footer />
        </body>
    </html>
  );
}
