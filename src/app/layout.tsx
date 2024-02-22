import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from './lib/registry'
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Analytics } from "@vercel/analytics/react";
import NextAuthSessionProvider from "@components/NextAuthSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenForge | Find devs and build the next great thing",
  description: "A portal to find like-minded developers to build the next great thing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <NextAuthSessionProvider>
          <StyledComponentsRegistry>
            <Navbar />
              {children}
            <Footer />
          </StyledComponentsRegistry>
        </NextAuthSessionProvider>
          <Analytics/>
      </body>
    </html>
  )
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
