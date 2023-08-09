import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/context/theme-context";
import AuthProvider from "@/components/AuthProvider/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev",
  description: "Many thanks to Safak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
