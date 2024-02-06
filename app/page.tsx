import Image from "next/image";
import { SectionHero } from "./components/section-hero";
import { SectionServices } from "./components/section-services";

export default function Home() {
  return (
    <main>
      <SectionHero />
      <SectionServices />
    </main>
  );
}
