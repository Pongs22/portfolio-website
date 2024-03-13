import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter( { subsets: ["latin"] } );

export const metadata: Metadata = {
  title: "Jun Mar Manuel - Portfolio",
  description: "Hi, Nice to meet you! I am Jun Mar Manuel. A skilled front end developer and currently working awesome projects at Greydient Lab",
  metadataBase: new URL( 'https://portfolio-website-nine-ashen.vercel.app/?fbclid=IwAR2dRyqyoMjxKsY_EzyIOzJtwmC4a8TortRVBwI1lLGvOTfB3xzjgI6vAuk' ),
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <>
      <head>
        <link rel="icon" href="https://portfolio-website-nine-ashen.vercel.app/assets/jm-logo.svg"></link>
        <meta property="og:image" content="https://portfolio-website-nine-ashen.vercel.app/assets/portfolio-social-share.jpg"></meta>
        <meta property="og:image:width" content="2401"></meta>
        <meta property="og:image:height" content="1260"></meta>
        <meta property="og:image:type" content="image/svg"></meta>
      </head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
