import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexandra Chen',
    title: 'Tech Executive, Brickell',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'My Manor Agent Sarah caught a water leak during her weekly inspection that could have cost me $50K in damage. The ROI on my membership paid for itself in one incident.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    title: 'Investment Banker, Coconut Grove',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'I travel 200+ days a year. NestiClub manages my property like a Fortune 500 CEO manages a company. Everything is documented, tracked, and handled flawlessly.',
    rating: 5
  },
  {
    name: 'Isabella Thompson',
    title: 'Family Office Principal',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    content: 'We manage 12 properties across 3 states. NestiClub\'s platform gives us the transparency and control we need, with the white-glove service our clients expect.',
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of successful individuals who trust NestiClub 
            with their most important lifestyle needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-cyan-600 mb-4" />
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
