import React, { useState } from 'react';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [zipCode, setZipCode] = useState('97818');

  return (
    <section className="box-border caret-transparent col-end-[-1] col-start-1 w-screen">
      <div className="box-border caret-transparent mb-12 md:mb-[72px]">
        <div title="Find top-rated pros in your area." className="box-border caret-transparent">
          <div className="box-border caret-transparent h-[382px] md:h-[416px]">
            <div className="relative box-border caret-transparent flex h-full justify-center w-full">
              <div className="items-center box-border caret-transparent gap-x-6 grid grid-cols-[repeat(4,minmax(0px,1fr))] h-full justify-items-center w-full md:grid-cols-[repeat(12,minmax(0px,1fr))]">
                <div className="absolute box-border caret-transparent flex col-end-[-1] col-start-1 h-full w-full">
                  <div className="box-border caret-transparent h-full text-nowrap w-screen overflow-hidden left-0">
                    <div className="absolute items-center box-border caret-transparent h-full justify-center text-nowrap w-full">
                      <img 
                        src="https://c.animaapp.com/meutrjubuG3nXl/assets/flooing_ML_copy.jpg" 
                        alt="Man finishing floors" 
                        className="relative box-border caret-transparent h-[382px] max-w-full object-cover text-nowrap w-full md:h-[416px]" 
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute items-center bg-gradient-to-br from-cyan-500/90 to-blue-600/90 backdrop-blur-sm box-border caret-transparent flex flex-col col-end-[-1] col-start-1 justify-self-start w-fit mx-6 px-4 py-6 rounded-lg shadow-2xl border border-white/20 md:w-[689px] md:ml-20 md:mr-0 md:p-8">
                  <div className="relative content-center box-border caret-transparent flex flex-col leading-[22px] text-center w-full">
                    <h1 className="text-white text-[32px] font-bold self-center box-border caret-transparent tracking-[-0.75px] leading-[38px] break-words text-center drop-shadow-lg md:text-5xl md:leading-[62px] md:text-start">Find top-rated pros in your area.</h1>
                  </div>
                  <div className="box-border caret-transparent w-full mt-6 md:mt-8">
                    <search className="box-border caret-transparent block">
                      <div className="static box-content caret-black md:relative md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="[align-items:normal] bg-transparent box-content caret-black block h-auto rounded-none md:items-center md:aspect-auto md:bg-white md:box-border md:caret-transparent md:flex md:h-14 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:border md:border-stone-300 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:border-solid">
                          <div className="box-content caret-black block h-auto visible w-auto md:aspect-auto md:box-border md:caret-transparent md:hidden md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:invisible md:w-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/icon-3.svg" alt="Icon" className="box-content caret-black block h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:hidden md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                          </div>
                          <div className="box-content caret-black block h-auto min-h-0 min-w-0 w-auto pl-0 rounded-none md:aspect-auto md:box-border md:caret-transparent md:flex md:h-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:border md:[mask-position:0%] md:bg-left-top md:pl-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:border-solid md:border-transparent">
                            <input 
                              type="text" 
                              placeholder="What can we help you with?" 
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="bg-white box-content caret-black inline-block h-auto min-h-0 min-w-0 outline-black outline-offset-0 outline-0 text-clip text-wrap w-auto px-0.5 py-px md:appearance-none md:aspect-auto md:bg-transparent md:box-border md:caret-transparent md:block md:h-full md:min-h-[auto] md:min-w-[auto] md:outline-transparent md:outline-offset-2 md:outline md:outline-2 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:pl-0 md:pr-2 md:py-0 md:scroll-m-0 md:scroll-p-[auto]" 
                            />
                          </div>
                          <div className="box-content caret-black h-auto min-h-0 min-w-0 border-l-0 md:aspect-auto md:box-border md:caret-transparent md:h-8 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:border-stone-300 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:border-l md:border-solid"></div>
                          <div className="box-content caret-black block min-h-0 min-w-0 rounded-none md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:border md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:border-solid md:border-transparent">
                            <span className="box-content caret-black inline min-h-0 min-w-0 rounded-none md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:border md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-full md:border-solid md:border-transparent">
                              <div className="[align-items:normal] box-content caret-black block min-h-0 min-w-0 w-auto pl-0 md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[110px] md:[mask-position:0%] md:bg-left-top md:pl-2 md:scroll-m-0 md:scroll-p-[auto]">
                                <button type="button" aria-label="Location icon" className="bg-zinc-100 caret-black inline-block min-h-0 min-w-0 text-center md:aspect-auto md:bg-transparent md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto]">
                                  <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/icon-4.svg" alt="Icon" className="box-content caret-black w-auto md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                                </button>
                                <div className="box-content caret-black min-h-0 min-w-0 md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  <input 
                                    placeholder="Zip Code" 
                                    type="number" 
                                    name="zip" 
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    className="box-content caret-black max-w-none md:aspect-auto md:box-border md:caret-transparent md:max-w-[65px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto]" 
                                  />
                                </div>
                              </div>
                            </span>
                            <div className="box-content caret-black block min-h-0 min-w-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <button type="button" aria-label="Search" className="static self-auto bg-zinc-100 caret-black inline-block min-h-0 min-w-0 text-center mr-0 rounded-none md:relative md:self-center md:aspect-auto md:bg-transparent md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-2 md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-full">
                                <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/icon-5.svg" alt="Icon" className="text-black bg-transparent box-content caret-black w-auto rounded-none md:text-[color(srgb_1_1_1)] md:aspect-auto md:bg-[color(srgb_0.988235_0.337255_0.278431)] md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[42px] md:[mask-position:0%] md:bg-left-top md:p-[9px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-full" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </search>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
