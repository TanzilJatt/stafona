"use client";

import HomeHeader from "../components/HomeHeader";
import HomeHero from "../components/HomeHero";
import PlatformOverview from "../components/PlatformOverview";
import EmpoweringSection from "../components/EmpoweringSection";
import HomeBgTestimonial from "../components/HomeBgTestimonial";
import LogosMarquee from "../components/LogosMarquee";
import CtaSection from "../components/CtaSection";
import ProductContainer from "../components/ProductContainer";
import PlatformOverviewContainer from "../components/PlatformOverviewContainer";
import FeatureContainer from "../components/FeatureContainer";
import ReviewContainer from "../components/ReviewContainer";
import CustomersContainer from "../components/CustomersContainer";
import SubscribeCard from "../components/SubscribeCard";
import BlogCard from "../components/BlogCard";

export default function HomePage() {
  return (
    <div className="">
      <HomeHeader />
      <div className="md:p-[3.5em] p-[1.5625em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <ProductContainer />
      </div>
      <div className="md:px-[3.5em] px-[1.5625em]">
        <PlatformOverviewContainer />
        <FeatureContainer />
        <ReviewContainer />
        <CustomersContainer />
      </div>
      <div className="flex md:flex-row flex-col gap-[1.5em] md:px-[3.5em] md:pt-[4.1875em] px-[1.5625em] pt-[4.1875em] w-full">
        <SubscribeCard />
        <BlogCard />
      </div>
      {/*  <HomeHero />
      
      <PlatformOverview />
      <EmpoweringSection />
      <HomeBgTestimonial />
      <LogosMarquee />
      <CtaSection /> */}
    </div>
  );
}
