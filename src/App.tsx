import React from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ServiceStack } from './components/sections/ServiceStack';
import { MembershipTiers } from './components/sections/MembershipTiers';
import { ManorAgent } from './components/sections/ManorAgent';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { MembershipCTA } from './components/sections/MembershipCTA';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <ServiceStack />
        <MembershipTiers />
        <ManorAgent />
        <TestimonialsSection />
        <MembershipCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
