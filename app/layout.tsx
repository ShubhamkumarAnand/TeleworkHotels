import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "Telework",
  description: "Hotels Designed to Work From Anywhere",
};

import { Nunito } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font.className`}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
