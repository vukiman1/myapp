'use client';

import React from 'react';
import Header from "@/components/base/header/header";
import SubHeader from "@/components/base/header/sub_header";
import { Topheader } from "@/components/base/header/top_header";
import Footer from "@/components/base/footer/Footer";
import StickyBanner from "@/components/HomeSections/StickyBanner/StickyBanner";

interface MainLayoutProps {
  children: React.ReactNode;
  showStickyBanner?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showStickyBanner = true
}) => {
  return (
    <>
      <Topheader />
      <Header />
      <SubHeader />
      {showStickyBanner && <StickyBanner />}
      <main className="bg-[var(--body-color-bg)] flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;