import React, { useState } from 'react';

export function PopularCategoriesSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="box-border caret-transparent col-end-[-1] col-start-1 w-full">
      <div className="box-border caret-transparent mb-12 md:mb-[72px]">
        <div className="box-border caret-transparent pb-6">
          <div className="box-border caret-transparent w-full">
            <div className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent w-full overflow-hidden">
              <h3 className="text-[32px] font-bold box-border caret-transparent leading-[38px]">
                <button 
                  type="button" 
                  className="text-2xl font-semibold bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(219,217,212)_0px_-1px_0px_0px_inset] caret-transparent gap-x-6 flex justify-between tracking-[-0.75px] leading-7 gap-y-6 text-left w-full px-0 py-2"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  Popular Categories
                  <div className="text-base box-border caret-transparent shrink-0 h-6 w-6">
                    <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/icon-9.svg" alt="Icon" className="absolute box-border caret-transparent h-6 w-6" />
                  </div>
                </button>
              </h3>
              <div role="region" className="text-neutral-500 box-border caret-transparent hidden overflow-hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
