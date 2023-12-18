/* eslint-disable react/no-unescaped-entities */
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Maash Nigeria Limited",
  description:
    "Maash Nigeria Limited is a leading equipment rental company in Nigeria. We offer a comprehensive range of high quality equipment on rental basis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
