import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { aboutJennifer } from '../mock';
import { CheckCircle, Award, BookOpen, Target, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#B2EBF9]/20 via-white to-[#AEA1EA]/15">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Patient eXperience Consulting</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We're not your typical consultants. We've been in the trenches, felt the burnout, and experienced the chaos firsthand. That's why we created solutions that actually work.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-2 border-[#AEA1EA]/30 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#AEA1EA] to-[#B2EBF9] rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#AEA1EA]">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To transform overwhelmed medical practices into thriving patient-staff powerhouses through AI-Fueled, People-Powered solutions that eliminate chaos, end burnout, and restore the joy of practicing medicine.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#B2EBF9]/30 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B2EBF9] to-[#AEA1EA] rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#B2EBF9]">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  A healthcare landscape where every medical practice operates at peak excellence, where staff love their work, patients receive exceptional care, and providers can focus on healing—not administrative chaos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Jennifer Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#AEA1EA]/10 to-[#B2EBF9]/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Jennifer Radu</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">{aboutJennifer.title}</p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">{aboutJennifer.bio}</p>
              
              <div className="space-y-3 mb-8">
                {aboutJennifer.credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/50 border border-[#B2EBF9]/30">
                    <CheckCircle className="w-5 h-5 text-[#AEA1EA] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{credential}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button className="bg-[#FB2C15] hover:bg-[#d92515] text-white rounded-full px-6" onClick={() => window.location.href = '/contact'}>
                  Book a Call with Jennifer
                </Button>
                <Button variant="outline" className="border-2 border-[#AEA1EA] text-[#AEA1EA] hover:bg-[#AEA1EA] hover:text-white rounded-full px-6">
                  View Published Books
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src={aboutJennifer.image} 
                  alt="Jennifer Radu" 
                  className="rounded-2xl shadow-2xl w-full border-4 border-[#AEA1EA]/30"
                />
                <div className="mt-6 text-center">
                  <img 
                    src={aboutJennifer.award} 
                    alt="Award" 
                    className="mx-auto w-48 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't believe in cookie-cutter solutions. Every practice is unique, and our frameworks adapt to your specific challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Diagnose', desc: 'We identify the root causes of your practice challenges, not just the symptoms', color: '#AEA1EA' },
              { icon: Users, title: 'Deploy', desc: 'We implement strategic solutions using the Puzzle Pyramid™ deployment model', color: '#B2EBF9' },
              { icon: BookOpen, title: 'Sustain', desc: 'We create systems that compound excellence through the AI-Fueled PX Cycle™', color: '#AEA1EA' }
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:shadow-xl transition-all group" style={{ borderColor: item.color + '40' }}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{ backgroundColor: item.color + '20' }}>
                    <item.icon className="w-10 h-10" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: item.color }}>{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#AEA1EA]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B2EBF9]/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">The Numbers <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2EBF9] to-[#AEA1EA]">Speak</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '200+', label: 'Providers Transformed' },
              { num: '20+', label: 'Years Experience' },
              { num: '16', label: 'Week Transformation' },
              { num: '94%', label: 'Client Satisfaction' }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-[#AEA1EA]/30">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B2EBF9] to-[#AEA1EA] mb-2">{stat.num}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#B2EBF9]/20 to-[#AEA1EA]/20">
        <div className="container mx-auto max-w-4xl text-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_ai-health-transform/artifacts/s10wnm17_THREE%20MED%20STAFF%20LAUGHNING.jpg" 
            alt="Happy Medical Staff" 
            className="rounded-2xl shadow-2xl mb-8 mx-auto border-4 border-[#AEA1EA]/30"
          />
          <h2 className="text-4xl font-bold mb-6">Ready to Join 200+ Transformed Practices?</h2>
          <p className="text-xl text-gray-700 mb-8">Book your free Puzzle Pyramid Strategy Session and discover your custom roadmap.</p>
          <Button 
            onClick={() => window.location.href = '/contact'}
            size="lg"
            className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-bold rounded-full px-10 py-6 text-lg"
          >
            Book Your Free Strategy Session
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
