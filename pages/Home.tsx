import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import PainPoints from '../components/PainPoints';
import ValueProposition from '../components/ValueProposition';
import HowItWorks from '../components/HowItWorks';
import CaseStudy from '../components/CaseStudy';
import InvestmentBlock from '../components/InvestmentBlock';
import Testimonials from '../components/Testimonials';
import Calculator from '../components/Calculator';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0066FF] opacity-5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#8B5CF6] opacity-5 blur-[150px] rounded-full"></div>
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <SocialProof />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PainPoints />
          <ValueProposition />
          <HowItWorks />
          <CaseStudy />
          <InvestmentBlock />
          <Testimonials />
          <Calculator />
          <FAQ />
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
