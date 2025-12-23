import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Cheap Transfers Cabo - Your Journey Starts in Comfort",
  description: "Reliable, Comfortable & Affordable private transportation service in Los Cabos. Airport transfers, hotel rides, and custom tours throughout Southern Baja since 2019.",
  keywords: ["Cabo transfers", "Los Cabos transportation", "airport transfers Cabo", "private transportation Cabo", "Cabo tours", "Baja California Sur"],
  authors: [{ name: "Cheap Transfers Cabo" }],
  openGraph: {
    title: "Cheap Transfers Cabo - Your Journey Starts in Comfort",
    description: "Reliable, Comfortable & Affordable private transportation service in Los Cabos.",
    type: "website",
    locale: "en_US",
  },
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
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}

