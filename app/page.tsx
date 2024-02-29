import Image from "next/image";
import HeroBlock from "./blocks/hero/heroBlock";
import navBar from "./blocks/header/headerBlock";
import NavigationBar from "./blocks/header/headerBlock";
import SkillsBlock from "./blocks/skills/skillsBlock";
import WorksBlock from "./blocks/works/works";
import FooterBlock from "./blocks/footer/footer";
import Head from "next/head";
import DesignBlock from "./blocks/design/design";
import QouteBlock from "./blocks/qoute/qoute";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col">
      <NavigationBar/>
      <HeroBlock/>
      <SkillsBlock/>
      <WorksBlock/>
      <DesignBlock/>
      <QouteBlock/>
      <FooterBlock />
    </main>
    </>
  );
}
