import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScarcityBanner from '../components/ScarcityBanner';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle, ArrowRight, Star, TrendingUp, Users, Target, Zap, Award, Calendar, Sparkles, Shield, HelpCircle, Clock } from 'lucide-react';

const Services = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  const tiers = [
    {
      name: 'Starter',
      tagline: 'Perfect for practices ready to begin their transformation',
      features: [
        'Initial practice assessment & diagnosis',
        'Customized roadmap implementation',
        'Foundation building (Engage phase)',
        'Basic AI workflow integration',
        'Monthly progress check-ins',
        'Access to Practice Professionals Playground',
        'Email support'
      ],
      highlight: false,
      color: '#B2EBF9'
    },
    {
      name: 'Professional',
      tagline: 'Most Popular - Complete transformation journey',
      features: [
        'Everything in Starter, PLUS:',
        'Full 16-week From Patients to Profits program',
        'Advanced AI integration & automation',
        'Leadership development coaching',
        'Staff training & culture transformation',
        'Weekly implementation sessions',
        'Priority support & direct access',
        'All templates, resources & tools'
      ],
      highlight: true,
      color: '#AEA1EA'
    },
    {
      name: 'Elite',
      tagline: 'White-glove service for comprehensive practice excellence',
      features: [
        'Everything in Professional, PLUS:',
        'Dedicated practice transformation specialist',
        'On-site practice optimization visits',
        'Custom AI solution development',
        'Executive leadership intensive',
        '24/7 priority support',
        'Quarterly strategy sessions (ongoing)',
        'Exclusive mastermind group access'
      ],
      highlight: false,
      color: '#FB2C15'
    }
  ];

  const impactPillars = [
    {
      letter: 'I',
      title: 'Intelligent Assessment & Integration',
      description: 'AI-powered diagnostics uncover hidden inefficiencies and map opportunities for growth',
      icon: Target,
      color: '#B2EBF9'
    },
    {
      letter: 'M',
      title: 'Mindful Leadership Development',
      description: 'Train emotionally intelligent, accountable leaders who inspire teams',
      icon: Users,
      color: '#AEA1EA'
    },
    {
      letter: 'P',
      title: 'Patient-Centric Experience Optimization',
      description: 'Personalize journeys, reduce wait times, and boost loyalty at every touchpoint',
      icon: Star,
      color: '#B2EBF9'
    },
    {
      letter: 'A',
      title: 'Automated Workflow Excellence',
      description: 'Streamline operations with AI scheduling, documentation, and predictive analytics',
      icon: Zap,
      color: '#AEA1EA'
    },
    {
      letter: 'C',
      title: 'Cultural Transformation & Engagement',
      description: 'Redesign workplace culture to energize staff and retain top talent',
      icon: Sparkles,
      color: '#B2EBF9'
    },
    {
      letter: 'T',
      title: 'Transformational Results & Sustainability',
      description: 'Track ROI, maintain outcomes, and fuel continuous innovation',
      icon: TrendingUp,
      color: '#AEA1EA'
    }
  ];

  const faqs = [
    {
      q: "How quickly can I expect to see results?",
      a: "Most practices see measurable improvements within the first 4 weeks. Quick wins from the strategy session can be implemented immediately, with full transformation typically achieved within 16 weeks."
    },
    {
      q: "Do I need to have technical expertise to implement AI solutions?",
      a: "Absolutely not. We handle all technical implementation and training. Our AI solutions are designed to be user-friendly, and we provide comprehensive staff training and ongoing support."
    },
    {
      q: "What if I'm not satisfied with the services?",
      a: "We offer a 30-day money-back guarantee. If you're not completely satisfied within the first month, we'll refund your investment—no questions asked. Additionally, you can upgrade tiers within 30 days with your initial payment applied."
    },
    {
      q: "How is this different from other consulting services?",
      a: "We're not typical consultants. Jennifer has 20+ years of hands-on practice management experience. Our proprietary frameworks (Puzzle Pyramid™, IMPACT System™, AI-Fueled PX Cycle™) are proven with 200+ practices and focus on sustainable, long-term transformation—not temporary fixes."
    },
    {
      q: "Can I start with just the strategy session?",
      a: "Yes! The complimentary strategy session provides immediate value with actionable insights and a custom roadmap. There's no obligation to purchase services, though most practices choose to continue after experiencing the value."
    },
    {
      q: "Why do you only accept 4 clients per quarter?",
      a: "Quality over quantity. We provide white-glove, hands-on transformation that requires significant dedicated attention. Limiting client acceptance ensures every practice receives the personalized support needed for true, sustainable change."
    },
    {
      q: "What happens after the 16-week program?",
      a: "You'll have built sustainable systems that continue delivering results. Ongoing support options include community access, quarterly strategy sessions, and on-demand consulting for continued optimization."
    },
    {
      q: "Do you work with practices of all sizes?",
      a: "Yes. We've successfully transformed solo practices to large multi-location groups. Our frameworks scale to fit your specific needs, challenges, and growth goals."
    },
    {
      q: "Is the investment tax-deductible?",
      a: "Consulting services for business improvement are typically tax-deductible business expenses. Consult with your accountant for specific guidance based on your situation."
    },
    {
      q: "What if I need more time than 16 weeks?",
      a: "The 16-week timeframe is designed for comprehensive transformation, but we're flexible. If your practice needs extended support, we offer customized timelines and ongoing coaching options."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Scarcity Banner */}
      <div className="fixed top-[80px] left-0 right-0 z-40">
        <ScarcityBanner type="clients" />
      </div>

      {/* Hero Section */}
      <section className="pt-48 pb-16 px-4 bg-gradient-to-br from-[#B2EBF9]/20 via-white to-[#AEA1EA]/15">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#FB2C15] text-white rounded-full px-4 py-2 mb-4 animate-pulse">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-bold uppercase">Exclusive: Only 2 Client Spots Remaining</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Transform your medical practice with our proven frameworks, AI integration, and people-powered solutions
          </p>
        </div>
      </section>

      {/* Strategy Session Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#AEA1EA]/10 to-[#B2EBF9]/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9] text-white rounded-full px-4 py-2 mb-6">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">Free • No Obligation • Pure Value</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Puzzle Pyramid <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Strategy Session</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A complimentary <strong>45-60 minute virtual deep dive</strong> into your practice where we identify bottlenecks, pain points, and operational challenges that are holding you back.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold text-[#AEA1EA]">What You Will Walk Away With:</h3>
                {[
                  'Comprehensive analysis of your practice current state',
                  'Identification of critical bottlenecks and workflow issues',
                  'Custom roadmap for immediate improvement',
                  'Quick wins you can implement right away',
                  'Clear blueprint for transforming your practice',
                  'Tailored service tier recommendations (no pressure)'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/50 border border-[#B2EBF9]/30">
                    <CheckCircle className="w-5 h-5 text-[#AEA1EA] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#B2EBF9]/20 to-[#AEA1EA]/20 rounded-xl p-6 border-2 border-[#AEA1EA]/30 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-[#AEA1EA]">100% Risk-Free Guarantee:</strong> You'll receive actionable insights and a detailed transformation blueprint whether you choose to work with us or not. No high-pressure sales—just genuine value.
                </p>
              </div>

              <Button 
                onClick={() => window.location.href = '/contact'}
                size="lg"
                className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-bold rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Book Your Free Strategy Session <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>

            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_ai-health-transform/artifacts/hoxo653d_MED%20STAFF%20TALKING%20AT%20TABLE.jpg" 
                alt="Medical staff consultation" 
                className="rounded-2xl shadow-2xl border-4 border-[#AEA1EA]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 16-Week Program */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From Patients to Profits: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">The 16-Week Transformation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a thriving, sustainable patient-centered practice in less than 16 weeks without staff burnout, patient churn, or operational inefficiencies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_05098993-4059-4a1d-a237-305f60e8d292/artifacts/n3t7tlv5_One_Page_Map480559.pdf.png.PNG" 
                alt="16-Week Roadmap" 
                className="rounded-2xl shadow-2xl border-4 border-[#B2EBF9]/30"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">The Three-Phase Journey</h3>
              
              <Card className="mb-6 border-2 border-[#FB2C15]/30 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FB2C15] to-[#d92515] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-[#FB2C15]">Foundation of Patient Experience Excellence</h4>
                      <p className="text-gray-700">Patient Insight Mastery • Journey Clarity Blueprint • Engagement Excellence Framework</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-2 border-[#B2EBF9]/30 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#B2EBF9] to-[#AEA1EA] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-[#B2EBF9]">Operational Optimization & Leadership Empowerment</h4>
                      <p className="text-gray-700">Efficiency Accelerator Plan • Leadership Impact Blueprint • Team Synergy Framework</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#AEA1EA]/30 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#AEA1EA] to-[#B2EBF9] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-[#AEA1EA]">Sustained Engagement & AI Integration</h4>
                      <p className="text-gray-700">Patient Engagement Mastery • AI Integration Blueprint • Sustainability Success Framework</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT Framework */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#B2EBF9]/10 to-[#AEA1EA]/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">IMPACT System™</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six interconnected pillars that address root causes and deliver measurable transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactPillars.map((pillar, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all group" style={{ borderColor: pillar.color + '40' }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: pillar.color + '20' }}>
                    <pillar.icon className="w-8 h-8" style={{ color: pillar.color }} />
                  </div>
                  <div className="text-4xl font-bold mb-2" style={{ color: pillar.color }}>{pillar.letter}</div>
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Transformation Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              We don't believe in one-size-fits-all solutions. Every practice is unique, which is why we customize our approach and pricing during your strategy session.
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B2EBF9]/20 to-[#AEA1EA]/20 rounded-full px-6 py-3 border-2 border-[#AEA1EA]/30">
              <Award className="w-5 h-5 text-[#AEA1EA]" />
              <span className="text-sm font-semibold text-gray-700">Exact pricing determined during your complimentary strategy session</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {tiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all hover:shadow-2xl ${
                  tier.highlight 
                    ? 'border-4 border-[#AEA1EA] shadow-xl scale-105' 
                    : 'border-2 hover:scale-105'
                }`}
                style={{ borderColor: !tier.highlight ? tier.color + '40' : undefined }}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9] text-white text-center py-2 text-sm font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-8 ${tier.highlight ? 'pt-14' : ''}`}>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: tier.color }}>{tier.name}</h3>
                  <p className="text-gray-600 mb-6 min-h-[48px]">{tier.tagline}</p>
                  
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: tier.color }} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    className={`w-full rounded-full font-bold ${
                      tier.highlight 
                        ? 'bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9] hover:opacity-90 text-white' 
                        : 'bg-white hover:bg-gray-50 border-2'
                    }`}
                    style={{ borderColor: !tier.highlight ? tier.color : undefined, color: !tier.highlight ? tier.color : undefined }}
                  >
                    Book Strategy Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* DIY Option */}
          <Card className="border-4 border-[#B2EBF9]/30 bg-gradient-to-br from-[#B2EBF9]/10 to-[#AEA1EA]/10">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-[#B2EBF9]">DIY Mastercourse + Community Access</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Prefer to implement on your own timeline? Get full access to our 16-week From Patients to Profits program, templates, resources, and the Practice Professionals Playground community.
                  </p>
                  <div className="space-y-2 mb-6">
                    {[
                      'Complete 16-week video curriculum',
                      'All cheatsheets, templates & tools',
                      'Practice Professionals Playground access',
                      'Monthly group coaching calls',
                      'Peer networking & support'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#B2EBF9]" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-[#B2EBF9] hover:bg-[#9DD8E8] text-black font-bold rounded-full px-8"
                  >
                    Learn More About DIY Option
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://customer-assets.emergentagent.com/job_ai-health-transform/artifacts/phljgpa7_TWO%20FEMALE%20DOCS%20AT%20TABLE%20SMILING%20AND%20WORKING.jpg" 
                    alt="Doctors working together" 
                    className="rounded-xl shadow-xl border-4 border-[#B2EBF9]/30"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upgrade Policy */}
          <div className="mt-12 bg-gradient-to-r from-[#AEA1EA]/10 to-[#B2EBF9]/10 rounded-xl p-8 border-2 border-[#AEA1EA]/30 text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#AEA1EA]">30-Day Upgrade Guarantee</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Start with any tier or the DIY mastercourse, and if you decide to upgrade within 30 days, your initial investment rolls over—you won't lose a penny. We're committed to meeting you where you are in your transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#AEA1EA]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B2EBF9]/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2EBF9] to-[#AEA1EA]">Transformation Metrics</span>
            </h2>
            <p className="text-xl text-gray-300">Real results from practices just like yours</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: '20%', label: 'Reduction in Wait Times', color: '#B2EBF9' },
              { metric: '15%', label: 'Increased Appointment Utilization', color: '#AEA1EA' },
              { metric: '10%', label: 'Revenue Growth', color: '#B2EBF9' }
            ].map((stat, i) => (
              <Card key={i} className="bg-gradient-to-br from-white/5 to-white/10 border-2" style={{ borderColor: stat.color + '40' }}>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r" style={{ 
                    backgroundImage: `linear-gradient(to right, ${stat.color}, ${i === 1 ? '#B2EBF9' : '#AEA1EA'})` 
                  }}>
                    {stat.metric}
                  </div>
                  <p className="text-gray-300 text-lg">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_ai-health-transform/artifacts/wo6vu4j1_performance%20metrics%20red%20kgrnd%20-%20Copy.PNG" 
              alt="Performance Metrics" 
              className="mx-auto max-w-3xl w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-[#AEA1EA] mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about transforming your practice</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[#AEA1EA] transition-all">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between"
                  >
                    <span className="font-bold text-lg pr-4">{faq.q}</span>
                    <ArrowRight className={`w-5 h-5 text-[#AEA1EA] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Guarantee Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#AEA1EA]/10 to-[#B2EBF9]/10">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-4 border-[#AEA1EA]/30 shadow-2xl">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <Shield className="w-20 h-20 text-[#AEA1EA] mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4 text-[#AEA1EA]">Our Iron-Clad Guarantee</h2>
                <p className="text-xl text-gray-700">Your success is our commitment</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 border-2 border-[#B2EBF9]/30">
                  <h3 className="text-xl font-bold mb-3 text-[#B2EBF9]">30-Day Money-Back Guarantee</h3>
                  <p className="text-gray-700 mb-4">If you're not completely satisfied within the first 30 days, we'll refund your entire investment\u2014no questions asked.</p>
                  <div className="flex items-center gap-2 text-sm text-[#B2EBF9] font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>100% Risk-Free</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-[#AEA1EA]/30">
                  <h3 className="text-xl font-bold mb-3 text-[#AEA1EA]">Results Guarantee</h3>
                  <p className="text-gray-700 mb-4">We guarantee measurable improvements in efficiency, satisfaction, or profitability within 16 weeks, or we'll continue working with you at no additional cost until you see results.</p>
                  <div className="flex items-center gap-2 text-sm text-[#AEA1EA] font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Performance Backed</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Plus:</strong> Free 30-day tier upgrade option with rollover credit • Lifetime access to resources • Ongoing community support
                </p>
                <Button 
                  onClick={() => window.location.href = '/contact'}
                  size="lg"
                  className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-bold rounded-full px-10 py-6 text-lg"
                >
                  Claim Your Spot Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#B2EBF9] via-[#AEA1EA] to-[#B2EBF9] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Practice Transformation Roadmap?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your complimentary 45-60 minute Puzzle Pyramid Strategy Session and walk away with a custom blueprint for success.
          </p>
          <Button 
            onClick={() => window.location.href = '/contact'}
            size="lg"
            className="bg-[#FB2C15] hover:bg-[#d92515] text-white font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
          >
            Book Your Free Strategy Session Now <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
