import React from 'react';
import { homeCareProjects } from '../../data/homeCareProjects';

export function HomeCareSection() {
  return (
    <section className="box-border caret-transparent col-end-[-1] col-start-1 w-screen md:w-full">
      <div className="box-border caret-transparent mb-12 md:mb-[72px]">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent flex flex-col pb-6 md:flex-row">
            <h2 className="text-[color(srgb_0.156863_0.156863_0.152941)] text-2xl font-bold box-border caret-transparent grow col-end-[-1] col-start-1 leading-[38px] text-left ml-6 mr-auto md:ml-0">Keep your home in tip-top shape</h2>
          </div>
          <div className="box-border caret-transparent flex col-end-[-1] col-start-1 justify-start w-full overflow-auto ml-auto">
            <ul className="box-border caret-transparent gap-x-3 flex justify-between list-none w-auto px-3 md:gap-x-6 md:w-full md:px-0">
              {homeCareProjects.map((project) => (
                <li key={project.id} className="box-border caret-transparent min-w-[328px] text-left w-full">
                  <article className="box-border caret-transparent">
                    <a href={project.href} className="box-border caret-transparent hover:text-neutral-500">
                      <div className="items-center box-border caret-transparent flex flex-col flex-wrap border-stone-300 pl-3 pr-5 py-4 rounded-tl rounded-tr border-l border-r border-t border-solid">
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
                      <div className="box-border caret-transparent border-stone-300 rounded-bl rounded-br border-l border-r border-t border-solid">
                        <img src={project.image} alt={project.imageAlt} className="box-border caret-transparent h-[253px] max-w-full object-cover w-full rounded-bl rounded-br md:h-[324px]" />
                      </div>
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
