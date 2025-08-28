import React from 'react';
import { serviceCategories } from '../../data/serviceCategories';

export function ServiceCategories() {
  return (
    <section className="box-border caret-transparent col-end-[-1] col-start-1 w-screen md:w-full">
      <div className="box-border caret-transparent mb-12 md:mb-[72px]">
        <div className="items-center box-border caret-transparent inline-flex justify-start text-nowrap w-full overflow-auto md:justify-evenly md:overflow-visible">
          {serviceCategories.map((service) => (
            <a key={service.id} href={service.href} className="items-center box-border caret-transparent flex flex-col justify-center min-w-[104px] text-nowrap pt-1 pb-2 rounded-lg hover:text-neutral-500">
              <img src={service.icon} alt={service.name} className="box-border caret-transparent h-12 max-w-full text-nowrap w-12" />
              <p className="text-[13px] box-border caret-transparent leading-[18.2px] text-nowrap pt-1">{service.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
