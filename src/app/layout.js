import "./globals.css";
import { inter } from "@/utils/fonts";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ScrollProvider } from "@/context/ScrollContext";

export const metadata = {
  title: "Maschtek",
  description: "Designing the world we envision through engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="container">
          <ScrollProvider>
            <Navbar />
            {children}
            <Footer />
          </ScrollProvider>
        </div>
      </body>
    </html>
  );
}
