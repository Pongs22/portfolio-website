import Image from "next/image";
import HeroBlock from "./blocks/hero/heroBlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroBlock/>
    </main>
  );
}
