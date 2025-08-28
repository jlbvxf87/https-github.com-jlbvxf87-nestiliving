import React from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ServiceCategories } from './components/sections/ServiceCategories';
import { PopularProjects } from './components/sections/PopularProjects';
import { NewsletterSignup } from './components/sections/NewsletterSignup';
import { PopularHomeProjects } from './components/sections/PopularHomeProjects';
import { HomeCareSection } from './components/sections/HomeCareSection';
import { ArticlesSection } from './components/sections/ArticlesSection';
import { PopularCategoriesSection } from './components/sections/PopularCategoriesSection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto text-start indent-[0px] normal-case visible border-separate font-national">
      <a href="#" className="absolute box-border caret-transparent block h-[22px] opacity-[0.01] underline w-[54px] z-[-999] hover:text-neutral-500 hover:no-underline">___</a>
      <div className="absolute box-border caret-transparent h-[22px] opacity-[0.01] w-[54px] z-[-1000]"></div>
      <div className="box-border caret-transparent">
        <Header />
        <main className="box-border caret-transparent">
          <div className="box-border caret-transparent flex justify-center w-full pb-[72px] px-6 md:pb-24 md:px-12">
            <div className="items-center box-border caret-transparent gap-x-6 grid grid-cols-[repeat(4,minmax(0px,1fr))] justify-items-center w-full md:grid-cols-[repeat(12,minmax(0px,1fr))] md:w-[1128px]">
              <HeroSection />
              <ServiceCategories />
              <PopularProjects />
              <NewsletterSignup />
              <PopularHomeProjects />
              <HomeCareSection />
              <ArticlesSection />
              <PopularCategoriesSection />
              <section className="box-border caret-transparent col-end-[-1] col-start-1 w-full">
                <div className="box-border caret-transparent mb-12 md:mb-[72px]"></div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <div className="absolute box-border caret-transparent block"></div>
    </div>
  );
}

export default App;
