import React from 'react';

interface MobileNavigationProps {
  onMenuToggle: () => void;
}

export function MobileNavigation({ onMenuToggle }: MobileNavigationProps) {
  return (
    <div className="box-border caret-transparent block md:hidden">
      <div className="box-border caret-transparent">
        <div className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_3px_4px_-1px] box-border caret-transparent w-full">
          <div className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_3px_4px_-1px] box-border caret-transparent w-full">
            <div className="items-center box-border caret-transparent flex justify-between min-h-16 px-[25px] py-3">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                <a href="https://angi.com/" className="box-border caret-transparent underline hover:text-neutral-500 hover:no-underline">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-lg px-2 py-1 rounded-lg shadow-lg">
                    HomeHub
                  </div>
                </a>
              </div>
              <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                  <a href="https://signup.angi.com/pro" className="text-[color(srgb_0.156863_0.156863_0.152941)] text-sm font-medium box-border caret-transparent leading-5 hover:text-neutral-500">
                    Join as a Pro
                  </a>
                </div>
                <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] ml-4 py-2 md:min-h-0 md:min-w-0">
                  <button type="button" className="bg-transparent caret-transparent block min-h-[auto] min-w-[auto] text-center p-0 md:min-h-0 md:min-w-0">
                    <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/search.svg" alt="Search" className="box-border caret-transparent h-6 max-w-full w-6" />
                  </button>
                  <button type="button" className="bg-transparent caret-transparent block min-h-[auto] min-w-[auto] text-center ml-4 p-0 md:min-h-0 md:min-w-0" onClick={onMenuToggle}>
                    <div className="box-border caret-transparent">
                      <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/hamburger.svg" alt="Open Menu" className="box-border caret-transparent h-4 max-w-full w-4" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
