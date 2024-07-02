import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainDrawer, MainFooter, MainHeader } from "@/components";
import { StoreProvider } from "@/zustand";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sample Next App",
  description: "A simple next app to demonstrate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <MainDrawer>
            <MainHeader />
            {children}
            <MainFooter />
          </MainDrawer>
        </StoreProvider>
      </body>
    </html>
  );
}
