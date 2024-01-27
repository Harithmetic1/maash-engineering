/* eslint-disable react/no-unescaped-entities */
import { Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Maash Nigeria Limited",
  description:
    "Maash Nigeria Limited is a leading equipment rental company in Nigeria. We offer a comprehensive range of high quality equipment on rental basis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
