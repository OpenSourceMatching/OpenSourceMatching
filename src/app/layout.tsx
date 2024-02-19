import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from './lib/registry'
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import NextAuthSessionProvider from "@components/NextAuthSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Source Match | Find a dev to build the next great thing",
  description: "Find like-minded developers to build the next great thing",
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
          {/* <Analytics/>
          <SpeedInsights/> */}
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
