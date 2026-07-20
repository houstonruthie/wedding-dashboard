import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const droidSerif = localFont({
  src: [
    { path: "./fonts/droid-serif-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/droid-serif-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-droid-serif",
  display: "swap",
});

const luxuriousScript = localFont({
  src: "./fonts/luxurious-script.ttf",
  variable: "--font-luxurious-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${droidSerif.variable} ${luxuriousScript.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
