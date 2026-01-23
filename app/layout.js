import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "City News - JNews - Premium News, Blog & Magazine.",
  description: "City News - JNews - Premium News, Blog & Magazine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable} font-roboto-condensed antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
