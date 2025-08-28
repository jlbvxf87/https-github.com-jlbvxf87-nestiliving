import React from 'react';
import { popularProjects } from '../../data/popularProjects';

export function PopularProjects() {
  return (
    <section className="box-border caret-transparent col-end-[-1] col-start-1 w-full">
      <div className="box-border caret-transparent mb-12 md:mb-[72px]">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent flex flex-col pb-6 md:flex-row">
            <h2 className="text-[color(srgb_0.156863_0.156863_0.152941)] text-2xl font-bold box-border caret-transparent grow col-end-[-1] col-start-1 leading-[38px] text-left mr-auto">Popular projects near you</h2>
          </div>
          <ul className="box-border caret-transparent gap-x-2 grid col-end-[-1] col-start-1 grid-cols-[repeat(1,minmax(0px,1fr))] list-none gap-y-2 text-left w-full pl-0 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
            {popularProjects.map((project) => (
              <li key={project.id} className="box-border caret-transparent">
                <article className="box-border caret-transparent">
                  <a href={project.href} className="box-border caret-transparent hover:text-neutral-500">
                    <div className="items-center box-border caret-transparent gap-x-2 flex h-full gap-y-2 border border-stone-300 pl-2 pr-5 py-4 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                      <div className="items-center box-border caret-transparent flex">
                        <div className="box-border caret-transparent w-12">
                          <img src={project.icon} alt={project.iconAlt} className="box-border caret-transparent max-w-full" />
                        </div>
                      </div>
                      <div className="box-border caret-transparent w-full">
                        <h3 className="text-[color(srgb_0.156863_0.156863_0.152941)] font-medium box-border caret-transparent leading-[22.4px] mb-1">{project.title}</h3>
                        <div className="text-[color(srgb_0.156863_0.156863_0.152941)] box-border caret-transparent flex ml-auto">
                          <div role="img" className="items-center box-border caret-transparent flex">
                            <img src="https://c.animaapp.com/meutrjubuG3nXl/assets/icon-6.svg" alt="Icon" className="box-border caret-transparent w-4 pt-[3px]" />
                            <div className="box-border caret-transparent flex translate-y-px pl-1">
                              <div className="text-xs font-medium box-border caret-transparent leading-[18px]">{project.rating} </div>
                              <div className="text-xs box-border caret-transparent leading-[18px]">({project.reviews})</div>
                            </div>
                          </div>
                          <div className="box-border caret-transparent flex">
                            <div className="text-xs box-border caret-transparent leading-[18px] mx-2">|</div>
                            <div className="text-xs box-border caret-transparent leading-[18px]">from {project.price}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
              </li>
            ))}
          </ul>
          <div className="text-[color(srgb_0.427451_0.427451_0.427451)] text-xs box-border caret-transparent col-end-[-1] col-start-1 leading-[18px] mr-auto pt-6">
            Price shown is the national median price of minimum job size for Angi's pre-priced offering. Actual pricing may vary.
          </div>
        </div>
      </div>
    </section>
  );
}
