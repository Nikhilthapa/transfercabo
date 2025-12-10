import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Cheap Transfers Cabo - Your Journey Starts in Comfort",
  description: "Reliable, Comfortable & Affordable private transportation service in Los Cabos. Airport transfers, hotel rides, and custom tours throughout Southern Baja since 2019.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat antialiased">
        {children}
      </body>
    </html>
  );
}

