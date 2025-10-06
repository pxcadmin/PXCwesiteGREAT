import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { heroData, painPoints, frameworks, unifiedSystem, aboutJennifer, mastercourse } from '../mock';
import { ArrowRight, CheckCircle, Puzzle, Award, BookOpen, Users } from 'lucide-react';
import TestimonialsSection from '../components/TestimonialsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import BlogSection from '../components/BlogSection';
import BookingForm from '../components/BookingForm';

const Home = () => {
  const [showBooking, setShowBooking] = useState(false);

  const scrollToBooking = () => {
    setShowBooking(true);
    setTimeout(() => {
      document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_05098993-4059-4a1d-a237-305f60e8d292/artifacts/yxfmdpsc_LOGOs%20PUZZLE%20PXC%20-%202%282%29.png" 
              alt="PXC Logo" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-[#FB2C15] transition-colors">About</a>
            <a href="#frameworks" className="text-sm font-medium hover:text-[#FB2C15] transition-colors">Frameworks</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-[#FB2C15] transition-colors">Results</a>
            <a href="#blog" className="text-sm font-medium hover:text-[#FB2C15] transition-colors">Blog</a>
            <Button 
              onClick={scrollToBooking}
              className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-medium rounded-full px-6"
            >
              Book Strategy Session
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#B2EBF9]/20 via-white to-[#AEA1EA]/10">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[#FB2C15] rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-[#FB2C15]" />
            <span className="text-sm font-semibold text-[#FB2C15] uppercase tracking-wide">{heroData.announcement}</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {heroData.headline.split(' ').map((word, i) => {
              if (word === "Broken." || word === "Is.") {
                return <span key={i} className="text-[#FB2C15]">{word} </span>;
              }
              return <span key={i}>{word} </span>;
            })}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {heroData.subheadline}
          </p>
          <Button 
            onClick={scrollToBooking}
            size="lg" 
            className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            {heroData.cta} <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {heroData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#FB2C15] mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Does This Sound <span className="text-[#FB2C15]">Familiar?</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            You're not alone. These are the symptoms of a broken system—not a broken practice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point) => (
              <Card key={point.id} className="bg-white/5 border-[#FB2C15]/30 hover:border-[#FB2C15] transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FB2C15] rounded-lg flex items-center justify-center mb-4">
                    <Puzzle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{point.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#AEA1EA]/10 via-white to-[#B2EBF9]/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            There's a <span className="text-[#FB2C15]">Proven Solution</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            The Unified PX System isn't another band-aid fix. It's a complete transformation framework that addresses the root causes—not just the symptoms.
          </p>
          <img 
            src="https://customer-assets.emergentagent.com/job_ai-health-transform/artifacts/3k3lk7fa_AI-Fueled%2C%20People-Powered%20PX.png" 
            alt="AI-Fueled People-Powered PX" 
            className="mx-auto mb-12 max-w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Frameworks Section */}
      <section id="frameworks" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            The <span className="text-[#FB2C15]">Unified PX System</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            {unifiedSystem.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {frameworks.map((framework, index) => (
              <Card key={framework.id} className="border-2 hover:border-[#FB2C15] transition-all hover:shadow-xl" style={{ borderColor: framework.color }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: framework.color + '20' }}>
                    <Puzzle className="w-8 h-8" style={{ color: framework.color }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{framework.name}</h3>
                  <p className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: framework.color }}>
                    {framework.tagline}
                  </p>
                  <p className="text-gray-600 mb-4 italic">{framework.description}</p>
                  <p className="text-gray-700 leading-relaxed">{framework.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* IMPACT Cycle Visual */}
          <div className="bg-gradient-to-br from-[#B2EBF9]/20 to-[#AEA1EA]/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8">The Continuous Excellence Cycle</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {unifiedSystem.cycle.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-[#FB2C15] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: frameworks[index % 3]?.color || '#000' }}>
                    {phase.phase}
                  </h4>
                  <p className="text-gray-700 text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <img 
                src="https://customer-assets.emergentagent.com/job_ai-health-transform/artifacts/miioujgn_book%20your%20complimentary%20strategy%20session%20now%20-%20Copy.png" 
                alt="Book Your Strategy Session" 
                className="mx-auto max-w-md w-full cursor-pointer hover:scale-105 transition-transform"
                onClick={scrollToBooking}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* About Jennifer */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-[#B2EBF9]/10 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={aboutJennifer.image} 
                alt="Jennifer Radu" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="mt-6 text-center">
                <img 
                  src={aboutJennifer.award} 
                  alt="Award" 
                  className="mx-auto w-48 h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Meet <span className="text-[#FB2C15]">Jennifer Radu</span>
              </h2>
              <p className="text-lg text-gray-600 mb-2">{aboutJennifer.title}</p>
              <p className="text-gray-700 leading-relaxed mb-6">{aboutJennifer.bio}</p>
              <div className="space-y-3">
                {aboutJennifer.credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FB2C15] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mastercourse Preview */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <BookOpen className="w-16 h-16 text-[#FB2C15] mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{mastercourse.name}</h2>
              <p className="text-xl text-[#B2EBF9] mb-6 font-semibold">{mastercourse.tagline}</p>
              <p className="text-gray-300 leading-relaxed mb-8">{mastercourse.description}</p>
              <Button 
                onClick={scrollToBooking}
                size="lg" 
                className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-bold rounded-full px-8"
              >
                Learn More in Your Strategy Session
              </Button>
            </div>
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_05098993-4059-4a1d-a237-305f60e8d292/artifacts/n3t7tlv5_One_Page_Map480559.pdf.png.PNG" 
                alt="From Patients to Profits Roadmap" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Booking Section */}
      {showBooking && (
        <section id="booking-section" className="py-20 px-4 bg-gradient-to-br from-[#AEA1EA]/20 via-white to-[#B2EBF9]/20">
          <div className="container mx-auto max-w-4xl">
            <BookingForm />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_05098993-4059-4a1d-a237-305f60e8d292/artifacts/yxfmdpsc_LOGOs%20PUZZLE%20PXC%20-%202%282%29.png" 
                alt="PXC Logo" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">AI-Fueled, People-Powered patient experience transformation for medical practices.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-[#FB2C15] text-sm transition-colors">About</a>
                <a href="#frameworks" className="block text-gray-400 hover:text-[#FB2C15] text-sm transition-colors">Frameworks</a>
                <a href="#testimonials" className="block text-gray-400 hover:text-[#FB2C15] text-sm transition-colors">Testimonials</a>
                <a href="#blog" className="block text-gray-400 hover:text-[#FB2C15] text-sm transition-colors">Blog</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Get Started</h4>
              <Button 
                onClick={scrollToBooking}
                className="bg-[#FB2C15] hover:bg-[#d92515] text-white w-full rounded-full"
              >
                Book Free Strategy Session
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Patient eXperience Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
