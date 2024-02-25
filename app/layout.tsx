import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter( { subsets: ["latin"] } );

export const metadata: Metadata = {
  title: "Jun Mar Manuel - Portfolio",
  description: "Hi, Nice to meet you! I am Jun Mar Manuel. A skilled front end developer and currently working awesome projects at Greydient Lab",
  openGraph: {
    images: ['/assets/portfolio-social-share.jpg'],
  },
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
