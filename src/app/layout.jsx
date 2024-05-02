import { Acme } from "next/font/google";
import Navbar from "./comps/Navbar";
import Footer from "./comps/Footer";
import "./globals.css";
import Provider from "./comps/Provider";

const Viju = Acme({ 
  subsets: ["latin"], 
  weight:['400']});

export const metadata = {
  title: "GamingNow",
  description: "My Blogging Platform",
  keywords: "html, cssc tailwindcss, js, javascript, next, vite"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={Viju.className}>
        <Provider>

      <Navbar />
      

        <div className="min-h-[90vh]">
        {children}
        </div>
      
      <Footer />
      
        </Provider>
        </body>
    </html>
  );
}
