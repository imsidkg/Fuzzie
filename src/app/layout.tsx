import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider"
import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css";
import ModalProvider from "@/providers/ModalProvider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fuzzy",
  description: "Automate your work with Fuzzy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={font.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider> {children}</ModalProvider>
       
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
