import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";


export const metadata: Metadata = {
  title: "Naruto",
  description: "Sitio hecho por fan de Naruto con el fin de mostrar sus personajes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
