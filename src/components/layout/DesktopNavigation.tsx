import React from 'react';

export function DesktopNavigation() {
  return (
    <div className="box-border caret-transparent hidden md:block">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent flex justify-center w-full px-6 md:px-12">
          <div className="items-center box-border caret-transparent gap-x-0 grid grid-cols-[repeat(4,minmax(0px,1fr))] justify-items-center min-h-0 min-w-0 gap-y-0 w-full md:grid-cols-[repeat(12,minmax(0px,1fr))] md:min-h-[auto] md:min-w-[auto] md:w-[1128px]">
            <div className="box-border caret-transparent col-end-[-1] col-start-1 min-h-0 min-w-0 w-full md:min-h-[auto] md:min-w-[auto]">
              <div className="items-center box-border caret-transparent flex justify-between py-3">
                <div className="items-center box-border caret-transparent flex basis-[0%] grow shrink-0 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                  <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                    <a href="https://angi.com/" className="box-border caret-transparent underline hover:text-neutral-500 hover:no-underline">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-xl px-3 py-2 rounded-lg shadow-lg">
                          HomeHub
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                  <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                    <a href="https://signup.angi.com/pro" className="box-border caret-transparent text-nowrap hover:text-neutral-500">
                      <span className="text-[color(srgb_0.156863_0.156863_0.152941)] text-sm font-medium box-border caret-transparent leading-5 text-nowrap">Join as a Pro</span>
                    </a>
                  </div>
                  <div className="items-center box-border caret-transparent flex min-h-0 min-w-0 ml-6 md:min-h-[auto] md:min-w-[auto]">
                    <a href="https://www.angi.com/oauth2/start" className="font-medium box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto] hover:text-neutral-500">
                      <button type="button" name="Log In" className="text-[color(srgb_0.156863_0.156863_0.152941)] font-bold items-center bg-[color(srgb_1_1_1)] caret-transparent gap-x-2.5 flex h-fit justify-center leading-[22px] min-w-[100px] break-words gap-y-2.5 text-center align-top border pt-1 pb-1.5 px-4 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[color(srgb_0.858824_0.85098_0.831373)]">
                        Log In
                      </button>
                    </a>
                    <a href="https://www.angi.com/create-account" className="font-medium box-border caret-transparent block min-h-0 min-w-0 ml-2 md:min-h-[auto] md:min-w-[auto] hover:text-neutral-500">
                      <button type="button" name="Sign Up" className="text-white font-bold items-center bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 transition-all duration-200 shadow-lg caret-transparent gap-x-2.5 flex h-fit justify-center min-w-[100px] break-words gap-y-2.5 text-center align-top pt-1 pb-1.5 px-4 rounded-bl rounded-br rounded-tl rounded-tr">
                        Sign Up
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
