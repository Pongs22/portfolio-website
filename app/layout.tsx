import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter( { subsets: ["latin"] } );

export const metadata: Metadata = {
  title: "Jun Mar Manuel - Portfolio",
  description: "Hi, Nice to meet you! I am Jun Mar Manuel. A skilled front end developer and currently working awesome projects at Greydient Lab",
  icons: {
    icon: '/logoooo.svg',
    shortcut: '/logoooo.svg',
    apple: '/logoooo.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logoooo.svg',
    } },
    twitter: {
      card: 'app',
      title: 'Jun Mar Manuels - Portfolio',
      description: 'Hi, Nice to meet you! I am Jun Mar Manuel. A skilled front end developer and currently working awesome projects at Greydient Lab',
      siteId: '1467726470533754880',
      creator: 'jM',
      creatorId: '1467726470533754880',
      images: {
        url: 'assets/portfolio-social-share.png',
        alt: 'Social Share Image',
      },
      app: {
        name: 'twitter_app',
        id: {
          iphone: 'twitter_app://iphone',
          ipad: 'twitter_app://ipad',
          googleplay: 'twitter_app://googleplay',
        },
        url: {
          iphone: 'https://iphone_url',
          ipad: 'https://ipad_url',
        },
      },
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
