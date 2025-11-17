import Header from "@/components/base/header/header";
import SubHeader from "@/components/base/header/sub_header";
import { Topheader } from "@/components/base/header/top_header";
import { Sections } from "@/components/HomeSections/Sections";
import StickyBanner from "@/components/HomeSections/StickyBanner/StickyBanner";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Topheader />
      <Header />
      <SubHeader />
      <StickyBanner />
      <main className="bg-[var(--body-color-bg)]">
        <Sections />
      </main>
    </>
  );
}
