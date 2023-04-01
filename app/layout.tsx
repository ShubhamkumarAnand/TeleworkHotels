import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "Telework",
  description: "Hotels Designed to Work From Anywhere",
};

import { Nunito } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import Model from "./components/model/Model";
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
          <Model actionLabel="Submit" isOpen title="Login Please"/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
