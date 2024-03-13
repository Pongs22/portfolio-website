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
        <meta property="og:image" content="https://portfolio-website-nine-ashen.vercel.app/assets/social-share-image.png"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
        <meta property="og:image:type" content="image/svg"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Jun Mar Manuel - Portfolio"></meta>
        <meta name="twitter:description" content="Hi, Nice to meet you! I am Jun Mar Manuel. A skilled front end developer and currently working awesome projects at Greydient Lab"></meta>
        <meta name="twitter:image" content="https://portfolio-website-nine-ashen.vercel.app/assets/social-share-image.png"></meta>
      </head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
