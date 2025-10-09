import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { heroData, painPoints, frameworks, unifiedSystem } from '../mock';
import { ArrowRight, CheckCircle, Puzzle, Award, Play, Star, Shield, TrendingUp, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScarcityBanner from '../components/ScarcityBanner';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Scarcity Banner */}
      <div className="fixed top-[80px] left-0 right-0 z-40">
        <ScarcityBanner type="sessions" />
      </div>

      {/* Hero Section */}
      <section className="pt-48 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B2EBF9]/30 via-white to-[#AEA1EA]/20 z-0" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white border-2 border-[#AEA1EA] rounded-full px-4 py-2 mb-6 shadow-sm">
                <Award className="w-4 h-4 text-[#AEA1EA]" />
                <span className="text-sm font-semibold text-[#AEA1EA] uppercase tracking-wide">{heroData.announcement}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {heroData.headline.split(' ').map((word, i) => {
                  if (word === "Broken." || word === "Is.") {
                    return <span key={i} className="text-[#FB2C15]">{word} </span>;
                  }
                  return <span key={i}>{word} </span>;
                })}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                {heroData.subheadline}
              </p>
              
              {/* Urgency Element */}
              <div className="bg-[#FB2C15]/10 border-l-4 border-[#FB2C15] p-4 rounded-r-lg mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#FB2C15] animate-pulse" />
                  <span className="font-bold text-[#FB2C15]">Limited Availability Alert</span>
                </div>
                <p className="text-sm text-gray-700">Only <strong>7 strategy sessions</strong> and <strong>2 client spots</strong> remaining this quarter</p>
              </div>
              
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                {heroData.cta} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                {heroData.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-[#B2EBF9]/10 to-[#AEA1EA]/10 border border-[#B2EBF9]/30">
                    <div className="text-4xl font-bold text-[#FB2C15] mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#B2EBF9]/30">
                <img 
                  src="https://customer-assets.emergentagent.com/job_ai-health-transform/artifacts/dxb5gt26_ADMIN%20AND%20MA.jpg" 
                  alt="Healthcare Consultant and Provider" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#AEA1EA] rounded-full blur-3xl opacity-40 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#B2EBF9] rounded-full blur-3xl opacity-40 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 px-4 bg-white border-y-2 border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Trusted by Leading Healthcare Organizations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <Shield className="w-12 h-12 text-[#AEA1EA] mx-auto mb-2" />
              <p className="text-sm font-semibold">HIPAA Compliant</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-[#B2EBF9] mx-auto mb-2" />
              <p className="text-sm font-semibold">Award-Winning</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-[#FB2C15] mx-auto mb-2" />
              <p className="text-sm font-semibold">5-Star Rated</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-[#AEA1EA] mx-auto mb-2" />
              <p className="text-sm font-semibold">Proven ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#AEA1EA]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B2EBF9]/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Does This Sound <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB2C15] to-[#AEA1EA]">Familiar?</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            You're not alone. These are the symptoms of a broken system—not a broken practice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point) => (
              <Card key={point.id} className="bg-gradient-to-br from-white/5 to-white/10 border-2 border-[#AEA1EA]/20 hover:border-[#B2EBF9] transition-all hover:scale-105 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B2EBF9] to-[#AEA1EA] rounded-lg flex items-center justify-center mb-4">
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

      {/* Video Introduction Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#B2EBF9]/10 via-white to-[#AEA1EA]/10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Jennifer & Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">The PXC Difference</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch this video to learn about the Unified PX System, what to expect in your strategy session, and how we transform medical practices.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#AEA1EA]/30 bg-gradient-to-br from-[#B2EBF9]/20 to-[#AEA1EA]/20">
            <div className="aspect-video flex items-center justify-center bg-black/80">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FB2C15] to-[#AEA1EA] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <p className="text-white font-semibold text-lg">Introduction to PXC & The Unified PX System</p>
                <p className="text-gray-300 text-sm mt-2">Click to play (Embed your video here)</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-bold rounded-full px-8"
            >
              Ready to Transform Your Practice? <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                There's a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Proven Solution</span>
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                The Unified PX System isn't another band-aid fix. It's a complete transformation framework that addresses the root causes—not just the symptoms.
              </p>
              <div className="space-y-4">
                {['Stop the chaos that is draining your practice', 'End staff burnout and turnover', 'Transform patient satisfaction ratings', 'Reclaim your time and joy in medicine'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-[#B2EBF9]/10 to-[#AEA1EA]/10 border border-[#B2EBF9]/30">
                    <CheckCircle className="w-6 h-6 text-[#AEA1EA] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://customer-assets.emergentagent.com/job_ai-health-transform/artifacts/icbqt2tz_lil%20girl%20doc.jpg" 
                alt="Young doctor with magnifying glass" 
                className="rounded-2xl shadow-2xl border-4 border-[#AEA1EA]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unified PX System Overview */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#AEA1EA]/10 via-white to-[#B2EBF9]/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Unified PX System</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            {unifiedSystem.subtitle}
          </p>
          <img 
            src="https://customer-assets.emergentagent.com/job_ai-health-transform/artifacts/3k3lk7fa_AI-Fueled%2C%20People-Powered%20PX.png" 
            alt="AI-Fueled People-Powered PX" 
            className="mx-auto mb-12 max-w-full h-auto rounded-lg shadow-2xl border-4 border-[#AEA1EA]/30"
          />
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frameworks.map((framework) => (
              <Card key={framework.id} className="border-2 hover:shadow-xl transition-all group" style={{ borderColor: framework.color }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: framework.color + '20' }}>
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
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA with Scarcity */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#B2EBF9] via-[#AEA1EA] to-[#B2EBF9] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FB2C15] rounded-full px-4 py-2 mb-6 animate-pulse">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-bold">ONLY 7 STRATEGY SESSIONS LEFT THIS QUARTER</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your free Puzzle Pyramid Strategy Session today and discover your custom roadmap to a thriving practice.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
          >
            Book Your Free Strategy Session <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          <p className="text-sm mt-4 opacity-75">⚡ 100% Risk-Free • No Obligation • Pure Value Guaranteed</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
