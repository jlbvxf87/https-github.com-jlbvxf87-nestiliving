import React from 'react';
import { featuredArticles } from '../../data/featuredArticles';

export function ArticlesSection() {
  return (
    <section className="box-border caret-transparent col-end-[-1] col-start-1 w-full">
      <div className="box-border caret-transparent mb-12 md:mb-[72px]">
        <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 box-border caret-transparent block justify-center ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] md:flex md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)]">
          <div className="[align-items:normal] bg-transparent box-border caret-transparent flex flex-col max-w-none min-h-0 min-w-0 gap-y-6 py-8 md:items-center md:bg-gradient-to-br md:from-cyan-50 md:via-blue-50 md:to-teal-50 md:justify-items-center md:max-w-[1128px] md:min-h-[auto] md:min-w-[auto] md:gap-y-8 md:py-20">
            <div className="items-start self-stretch box-border caret-transparent gap-x-[normal] flex flex-col justify-between gap-y-4 md:gap-x-[90px] md:flex-row">
              <div className="items-start box-border caret-transparent flex flex-col gap-y-2 px-6 md:px-0">
                <div className="text-[32px] font-bold box-border caret-transparent flex tracking-[-0.75px] leading-[38px] md:text-[40px] md:leading-[44px]">The homeowners guide to home care is here</div>
                <div className="box-border caret-transparent flex leading-[22px]">
                  From average costs to expert advice, get all the answers you need to get your job done.
                </div>
              </div>
              <div className="[align-items:normal] box-border caret-transparent flex flex-row shrink-0 max-h-12 px-6 md:items-stretch md:flex-col md:px-0">
                <a href="https://www.angi.com/articles" className="font-medium items-center bg-white box-border caret-transparent gap-x-2.5 block h-fit justify-center break-words gap-y-2.5 text-center align-top border border-stone-300 px-[31px] py-[11px] rounded-bl rounded-br rounded-tl rounded-tr border-solid hover:text-neutral-500">See all articles</a>
              </div>
            </div>
            <div className="items-start box-border caret-transparent gap-x-6 grid grid-flow-col auto-rows-auto grid-cols-none min-w-60 overflow-x-scroll overflow-y-auto gap-y-6 mt-0 px-6 md:grid-flow-row md:auto-rows-min md:grid-cols-[repeat(12,minmax(0px,1fr))] md:overflow-x-hidden md:overflow-y-hidden md:gap-y-8 md:mt-2 md:px-0">
              {featuredArticles.map((article) => (
                <div key={article.id} className="relative box-border caret-transparent gap-x-6 flex flex-col col-end-[span_3] col-start-[span_3] min-w-60 gap-y-6 snap-center snap-always overflow-visible md:col-end-[span_4] md:col-start-[span_4] md:overflow-hidden">
                  <a href={article.href} className="box-border caret-transparent block underline hover:text-neutral-500 hover:no-underline">
                    <div className="box-border caret-transparent">
                      <img src={article.image} alt={article.imageAlt} className="aspect-video box-border caret-transparent flex shrink-0 max-w-full object-cover" />
                    </div>
                  </a>
                  <div className="box-border caret-transparent">
                    <div className="text-xs box-border caret-transparent flex flex-wrap leading-[18px]">
                      <div className="font-bold box-border caret-transparent flex tracking-[1px] leading-4 text-ellipsis uppercase overflow-hidden">
                        <a href={article.authorHref} className="box-border caret-transparent block text-ellipsis overflow-hidden hover:text-neutral-500">{article.author}</a>
                      </div>
                      <div className="box-border caret-transparent px-2">•</div>
                      <div className="font-bold box-border caret-transparent hidden tracking-[1px] leading-4 min-h-0 min-w-0 uppercase text-nowrap md:flex md:min-h-[auto] md:min-w-[auto]">{article.date}</div>
                      <div className="font-bold box-border caret-transparent flex tracking-[1px] leading-4 min-h-[auto] min-w-[auto] uppercase text-nowrap md:hidden md:min-h-0 md:min-w-0">{article.date}</div>
                    </div>
                    <div className="box-border caret-transparent">
                      <a href={article.href} className="text-xl font-bold box-border caret-transparent flex tracking-[-0.5px] max-w-full break-words mt-4 mb-2 hover:text-neutral-500">{article.title}</a>
                    </div>
                    <div className="box-border caret-transparent leading-6 md:leading-[22px]">{article.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto] px-6 md:hidden md:min-h-0 md:min-w-0">
              <div className="bg-stone-300 box-border caret-transparent block h-3 min-h-[auto] min-w-[auto] w-3 mx-[5px] my-6 rounded-full md:bg-neutral-500 md:hidden md:min-h-0 md:min-w-0"></div>
              <div className="bg-stone-300 box-border caret-transparent block h-3 min-h-[auto] min-w-[auto] w-3 mx-[5px] my-6 rounded-full md:hidden md:min-h-0 md:min-w-0"></div>
              <div className="bg-stone-300 box-border caret-transparent block h-3 min-h-[auto] min-w-[auto] w-3 mx-[5px] my-6 rounded-full md:hidden md:min-h-0 md:min-w-0"></div>
              <div className="bg-stone-300 box-border caret-transparent block h-3 min-h-[auto] min-w-[auto] w-3 mx-[5px] my-6 rounded-full md:hidden md:min-h-0 md:min-w-0"></div>
              <div className="bg-neutral-500 box-border caret-transparent block h-3 min-h-[auto] min-w-[auto] w-3 mx-[5px] my-6 rounded-full md:bg-stone-300 md:hidden md:min-h-0 md:min-w-0"></div>
              <div className="bg-stone-300 box-border caret-transparent block h-3 min-h-[auto] min-w-[auto] w-3 mx-[5px] my-6 rounded-full md:hidden md:min-h-0 md:min-w-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
