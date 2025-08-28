import React, { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('97818');

  return (
    <section className="box-border caret-transparent col-end-[-1] col-start-1 w-full">
      <div className="box-border caret-transparent mb-12 md:mb-[72px]">
        <div className="bg-gradient-to-r from-orange-200 via-pink-200 to-cyan-200 box-border caret-transparent bg-center rounded-lg shadow-lg border border-white/50">
          <div className="[align-items:normal] box-border caret-transparent flex flex-col px-6 py-8 md:items-start md:flex-row md:px-8">
            <div className="self-auto box-border caret-transparent basis-auto grow-0 mr-0 md:self-start md:basis-[0%] md:grow md:mr-8">
              <div className="text-[color(srgb_0.156863_0.156863_0.152941)] text-xl font-bold box-border caret-transparent tracking-[-0.5px] leading-6 md:text-2xl md:tracking-[-0.75px] md:leading-7">
                Knowledge is priceless - so our cost guides are free.
              </div>
              <div className="text-[color(srgb_0.156863_0.156863_0.152941)] box-border caret-transparent leading-[22px] mt-3">
                Sign up to get free project cost info in your inbox.
              </div>
            </div>
            <div className="[align-items:normal] self-auto box-border caret-transparent block mt-5 md:items-center md:self-center md:flex md:mt-0">
              <div className="[align-items:normal] box-border caret-transparent gap-x-2 flex basis-auto flex-col grow-0 min-h-0 min-w-0 gap-y-2 text-center md:items-center md:basis-[0%] md:flex-row md:grow md:min-h-[auto] md:min-w-[auto]">
                <div className="items-center box-border caret-transparent gap-x-2 block basis-auto grow-0 gap-y-2 md:items-start md:flex md:basis-[0%] md:grow">
                  <div className="box-border caret-transparent basis-auto grow-0 max-w-none min-h-0 min-w-0 w-full mb-2 md:basis-[0%] md:grow-[3] md:max-w-[205px] md:min-h-[auto] md:min-w-[auto] md:mb-0">
                    <div className="bg-[color(srgb_1_1_1)] box-border caret-transparent gap-x-2 flex h-12 gap-y-2 border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[color(srgb_0.737255_0.72549_0.705882)]">
                      <div className="text-[color(srgb_0.427451_0.427451_0.427451)] items-center box-border caret-transparent flex h-full justify-center ml-4 py-5">
                        <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/icon-7.svg" alt="Icon" className="text-[color(srgb_0.156863_0.156863_0.152941)] box-border caret-transparent h-6 w-6 mr-0.5" />
                      </div>
                      <div className="relative box-border caret-transparent grow">
                        <label className="box-border caret-transparent grow">
                          <input 
                            placeholder="Email address" 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-[color(srgb_0.156863_0.156863_0.152941)] bg-transparent box-border caret-transparent h-full leading-4 text-start text-ellipsis text-nowrap w-full pl-0 pr-4 py-0 rounded-bl rounded-br rounded-tl rounded-tr" 
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent basis-auto grow-0 max-w-none min-h-0 md:basis-[0%] md:grow-[2] md:max-w-[133px] md:min-h-[auto]">
                    <div className="bg-[color(srgb_1_1_1)] box-border caret-transparent gap-x-2 flex h-12 gap-y-2 border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[color(srgb_0.737255_0.72549_0.705882)]">
                      <div className="text-[color(srgb_0.427451_0.427451_0.427451)] items-center box-border caret-transparent flex h-full justify-center ml-4 py-5">
                        <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/icon-8.svg" alt="Icon" className="text-[color(srgb_0.156863_0.156863_0.152941)] box-border caret-transparent h-6 w-6" />
                      </div>
                      <div className="relative box-border caret-transparent grow">
                        <label className="box-border caret-transparent grow">
                          <input 
                            placeholder="Zip code" 
                            type="number" 
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            className="text-[color(srgb_0.156863_0.156863_0.152941)] bg-transparent box-border caret-transparent h-full leading-4 text-start text-ellipsis text-nowrap w-full pl-0 pr-4 py-0 rounded-bl rounded-br rounded-tl rounded-tr" 
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button name="Sign me up" type="button" className="text-white font-bold items-center self-auto bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 transition-all duration-200 shadow-lg caret-transparent gap-x-2.5 flex h-fit justify-center max-w-none min-w-[107px] break-words gap-y-2.5 align-top w-full px-8 py-3 rounded-bl rounded-br rounded-tl rounded-tr md:self-start md:max-w-[146px] md:min-w-[146px]">
                  Sign me up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
