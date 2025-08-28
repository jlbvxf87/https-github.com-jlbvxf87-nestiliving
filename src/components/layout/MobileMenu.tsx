import React from 'react';
import { navigationData } from '../../data/navigationData';
import { serviceProData } from '../../data/serviceProData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'user' | 'navigation';
}

export function MobileMenu({ isOpen, onClose, type }: MobileMenuProps) {
  if (!isOpen) return null;

  if (type === 'user') {
    return (
      <div className="fixed bg-white box-border caret-transparent h-[1000px] min-w-[375px] translate-x-[100.0%] w-full z-[70] overflow-hidden right-0 top-0 md:w-[600px]">
        <div className="items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_3px_4px_-1px] box-border caret-transparent flex justify-between min-h-16 mb-3 pl-[25px] pr-6 py-3 md:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px]">
          <div className="box-border caret-transparent">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-lg px-2 py-1 rounded-lg shadow-lg">
              HomeHub
            </div>
          </div>
          <button type="button" className="bg-transparent caret-transparent block text-center p-0" onClick={onClose}>
            <div className="box-border caret-transparent">
              <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/close.svg" alt="Close Menu" className="box-border caret-transparent h-full" />
            </div>
          </button>
        </div>
        <div className="box-border caret-transparent flex left-[156px]">
          <div className="items-center bg-white box-border caret-transparent flex w-full pb-4">
            <div className="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[327px] w-full px-6 md:hidden md:min-h-0">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                <div className="items-center box-border caret-transparent gap-x-3 flex h-full gap-y-3 align-middle w-full pt-3 pb-6">
                  <div className="box-border caret-transparent h-8 min-h-[auto] min-w-[auto] w-8 md:min-h-0 md:min-w-0">
                    <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/icon-1.svg" alt="Icon" className="box-border caret-transparent" />
                  </div>
                  <div className="text-2xl font-bold box-border caret-transparent h-full tracking-[-0.75px] leading-7 min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">Welcome Back</div>
                </div>
                {navigationData.userMenuItems.map((item) => (
                  <div key={item.id} className="items-center box-border caret-transparent flex w-full border-stone-300 py-4 border-b border-solid">
                    <a href={item.href} className="text-[color(srgb_0.156863_0.156863_0.152941)] font-medium box-border caret-transparent block leading-[22px] min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0">{item.label}</a>
                    <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/icon-2.svg" alt="Icon" className="text-[color(srgb_0.156863_0.156863_0.152941)] box-border caret-transparent h-8 right-0" />
                  </div>
                ))}
                <button type="button" name="Log out" className="text-[color(srgb_0.156863_0.156863_0.152941)] font-bold items-center bg-[color(srgb_1_1_1)] caret-transparent gap-x-2.5 flex h-fit justify-center leading-[22px] break-words gap-y-2.5 text-center align-top w-full border mt-8 mb-2 px-8 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[color(srgb_0.858824_0.85098_0.831373)]">
                  Log out
                </button>
              </div>
            </div>
            <div className="absolute bg-white box-border caret-transparent min-h-[1000px] min-w-[375px] translate-x-[100.0%] w-full z-[90] mb-5 top-0"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bg-white box-border caret-transparent h-[1000px] min-w-[375px] translate-x-[100.0%] w-full z-[70] overflow-hidden right-0 top-0 md:w-[600px]">
      <div className="items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_3px_4px_-1px] box-border caret-transparent flex justify-between min-h-16 mb-3 pl-[25px] pr-6 py-3 md:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px]">
        <div className="box-border caret-transparent">
          <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/Angi-logo-Orange.svg" alt="Angi Logo" className="box-border caret-transparent h-7 max-w-full min-h-7 min-w-12 w-12 md:h-12 md:min-h-12 md:min-w-[81px] md:w-20" />
        </div>
        <button type="button" className="bg-transparent caret-transparent block text-center p-0" onClick={onClose}>
          <div className="box-border caret-transparent">
            <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/close.svg" alt="Close Menu" className="box-border caret-transparent h-full" />
          </div>
        </button>
      </div>
      <div className="box-border caret-transparent flex left-[156px]">
        <div className="items-center bg-white box-border caret-transparent flex w-full pb-4">
          <div className="bg-white box-border caret-transparent flex flex-col min-h-[auto] min-w-[327px] w-full px-6 md:hidden md:min-h-0">
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
              {navigationData.mainCategories.map((category) => (
                <div key={category.id} className="items-center box-border caret-transparent flex w-full border-stone-300 py-4 border-b border-solid">
                  <a href={category.href} className="text-[color(srgb_0.156863_0.156863_0.152941)] font-medium box-border caret-transparent block leading-[22px] min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0">{category.label}</a>
                  <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/icon-2.svg" alt="Icon" className="text-[color(srgb_0.156863_0.156863_0.152941)] box-border caret-transparent h-8 right-0" />
                </div>
              ))}
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent py-6">
                  <a href="https://www.angi.com/nearme" className="text-[color(srgb_0.156863_0.156863_0.152941)] font-medium box-border caret-transparent leading-[22px] w-full">
                    Find Services Near Me
                  </a>
                </div>
                <div className="box-border caret-transparent">
                  <button type="button" name="Log In" className="text-[color(srgb_0.156863_0.156863_0.152941)] font-bold items-center bg-[color(srgb_1_1_1)] caret-transparent gap-x-2.5 flex h-fit justify-center leading-[22px] break-words gap-y-2.5 text-center align-top w-full border my-2 px-8 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[color(srgb_0.858824_0.85098_0.831373)]">
                    Log In
                  </button>
                  <button type="button" name="Sign Up" className="text-white font-bold items-center bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 transition-all duration-200 shadow-lg caret-transparent gap-x-2.5 flex h-fit justify-center leading-5 break-words gap-y-2.5 text-center align-top w-full my-2 px-8 py-3 rounded-bl rounded-br rounded-tl rounded-tr">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white box-border caret-transparent min-h-[1000px] min-w-[375px] translate-x-[100.0%] w-full z-[90] mb-5 top-0">
            <div className="box-border caret-transparent hidden">
              <div className="bg-white box-border caret-transparent max-h-[970px] overflow-auto px-6 md:max-h-[915px]">
                {serviceProData.categories.map((category) => (
                  <div key={category.id} className="relative bg-white box-border caret-transparent flex flex-col col-end-[-1] col-start-1 h-full w-full z-20 mt-1 mb-2">
                    <div className="text-2xl font-semibold box-border caret-transparent col-end-[-1] col-start-1 tracking-[-0.75px] leading-7 w-full border-stone-300 pr-4 pt-5 pb-6 border-b border-solid">{category.title}</div>
                    <div className="box-border caret-transparent">
                      <ul className="box-border caret-transparent columns-1 gap-x-4 grid-flow-col grid-rows-[repeat(8,auto)] list-none gap-y-5 pl-0 pt-0 md:gap-x-5 md:pt-5">
                        {category.services.map((service) => (
                          <li key={service.id} className="box-border caret-transparent justify-center min-w-max text-left py-5 border-b border-solid border-[color(srgb_0.858824_0.85098_0.831373)]">
                            <a href={service.href} title={service.title} className="font-medium box-border caret-transparent leading-5 hover:text-neutral-500">
                              {service.title}
                            </a>
                          </li>
                        ))}
                        <li className="box-border caret-transparent justify-center min-w-max text-left py-5">
                          <a href={category.viewAllHref} title="View all" className="font-medium box-border caret-transparent leading-[22px] underline hover:text-neutral-500 hover:no-underline">
                            View all
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
