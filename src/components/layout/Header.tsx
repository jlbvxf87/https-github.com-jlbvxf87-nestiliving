import React, { useState } from 'react';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { MobileMenu } from './MobileMenu';
import { navigationData } from '../../data/navigationData';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent col-end-[-1] col-start-1 max-w-[375px] md:max-w-screen-xl">
          <div className="relative box-border caret-transparent z-10">
            <DesktopNavigation />
            <div className="box-border caret-transparent">
              <div className="relative bg-white shadow-none box-border caret-transparent flex w-full z-40 mt-1 mb-[3px] md:shadow-[rgba(0,0,0,0.08)_0px_3px_4px_-1px]">
                <div className="box-border caret-transparent flex justify-center min-h-0 min-w-0 w-full px-6 md:min-h-[auto] md:min-w-[auto] md:px-12">
                  <div className="items-center box-border caret-transparent gap-x-0 grid grid-cols-[repeat(4,minmax(0px,1fr))] justify-items-center min-h-0 min-w-0 gap-y-0 w-full md:grid-cols-[repeat(12,minmax(0px,1fr))] md:min-h-[auto] md:min-w-[auto] md:w-[1128px]">
                    <div className="items-center box-border caret-transparent flex col-end-[-1] col-start-1 min-h-0 min-w-0 w-full md:min-h-[30px] md:min-w-[auto]">
                      <div className="font-medium box-border caret-transparent gap-x-3 hidden min-h-0 min-w-0 gap-y-3 md:flex md:min-h-[auto] md:min-w-[auto]">
                        {navigationData.mainCategories.map((category) => (
                          <div key={category.id} className="box-border caret-transparent gap-x-2.5 min-h-0 min-w-0 gap-y-2.5 pb-2.5 px-1 md:min-h-[auto] md:min-w-[auto]">
                            <span className="box-border caret-transparent">
                              <a href={category.href} className="text-[color(srgb_0.156863_0.156863_0.152941)] text-sm box-border caret-transparent leading-5">
                                {category.label}
                              </a>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent flex justify-center">
                <div className="absolute bg-white shadow-none box-border caret-transparent hidden justify-center max-w-none w-full z-30 mt-auto mb-2 mx-auto px-6 top-[100px] md:shadow-[rgba(0,0,0,0.08)_3px_3px_4px_-1px,rgba(0,0,0,0.08)_-3px_3px_4px_-1px] md:max-w-[1224px] md:px-12">
                  <div className="items-center box-border caret-transparent gap-x-6 grid grid-cols-[repeat(4,minmax(0px,1fr))] justify-items-center w-full md:grid-cols-[repeat(12,minmax(0px,1fr))] md:w-[1128px]"></div>
                </div>
                <div className="absolute bg-white shadow-none box-border caret-transparent hidden justify-center max-w-none w-full z-30 mt-auto mb-2 mx-auto px-6 top-[100px] md:shadow-[rgba(0,0,0,0.08)_3px_3px_4px_-1px,rgba(0,0,0,0.08)_-3px_3px_4px_-1px] md:max-w-[1224px] md:px-12">
                  <div className="items-center box-border caret-transparent gap-x-6 grid grid-cols-[repeat(4,minmax(0px,1fr))] justify-items-center w-full md:grid-cols-[repeat(12,minmax(0px,1fr))] md:w-[1128px]"></div>
                </div>
                <div className="absolute bg-white shadow-none box-border caret-transparent hidden justify-center max-w-none w-full z-30 mt-auto mb-2 mx-auto px-6 top-[100px] md:shadow-[rgba(0,0,0,0.08)_3px_3px_4px_-1px,rgba(0,0,0,0.08)_-3px_3px_4px_-1px] md:max-w-[1224px] md:px-12">
                  <div className="items-center box-border caret-transparent gap-x-6 grid grid-cols-[repeat(4,minmax(0px,1fr))] justify-items-center w-full md:grid-cols-[repeat(12,minmax(0px,1fr))] md:w-[1128px]"></div>
                </div>
                <div className="absolute bg-white shadow-none box-border caret-transparent hidden justify-center max-w-none w-full z-30 mt-auto mb-2 mx-auto px-6 top-[100px] md:shadow-[rgba(0,0,0,0.08)_3px_3px_4px_-1px,rgba(0,0,0,0.08)_-3px_3px_4px_-1px] md:max-w-[1224px] md:px-12">
                  <div className="items-center box-border caret-transparent gap-x-6 grid grid-cols-[repeat(4,minmax(0px,1fr))] justify-items-center w-full md:grid-cols-[repeat(12,minmax(0px,1fr))] md:w-[1128px]"></div>
                </div>
                <div className="absolute bg-white shadow-none box-border caret-transparent hidden justify-center max-w-none w-full z-30 mt-auto mb-2 mx-auto px-6 top-[100px] md:shadow-[rgba(0,0,0,0.08)_3px_3px_4px_-1px,rgba(0,0,0,0.08)_-3px_3px_4px_-1px] md:max-w-[1224px] md:px-12">
                  <div className="items-center box-border caret-transparent gap-x-6 grid grid-cols-[repeat(4,minmax(0px,1fr))] justify-items-center w-full md:grid-cols-[repeat(12,minmax(0px,1fr))] md:w-[1128px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileNavigation 
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>
      
      {/* Mobile Menus */}
      <MobileMenu 
        isOpen={isUserMenuOpen}
        onClose={() => setIsUserMenuOpen(false)}
        type="user"
      />
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        type="navigation"
      />
    </nav>
  );
}
