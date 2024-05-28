import { Acme } from "next/font/google";
import Navbar from "./comps/Navbar";
import Footer from "./comps/Footer";
import "./globals.css";
import Provider from "./comps/Provider";
import Transition from "./comps/Transition";

const Viju = Acme({ 
  subsets: ["latin"], 
  weight:['400']});

export const metadata = {
  title: "TGN",
  description: "Where Tech Meets Play",
  keywords: "html, cssc tailwindcss, js, javascript, next, vite"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={Viju.className}>
        <Provider>
      <Transition />
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
