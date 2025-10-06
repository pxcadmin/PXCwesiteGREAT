import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import { Card, CardContent } from '../components/ui/card';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#B2EBF9]/20 via-white to-[#AEA1EA]/15">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Transform</span> Your Practice
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Book your complimentary 45-60 minute Puzzle Pyramid Strategy Session and get a custom roadmap to practice excellence
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-[#B2EBF9]/30 hover:border-[#B2EBF9] hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B2EBF9] to-[#AEA1EA] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#AEA1EA]">Phone</h3>
                <a href="tel:+19412974070" className="text-gray-600 hover:text-[#AEA1EA] transition-colors">(941) 297-4070</a>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#AEA1EA]/30 hover:border-[#AEA1EA] hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#AEA1EA] to-[#B2EBF9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#B2EBF9]">Email</h3>
                <a href="mailto:impact@patientexperienceconsulting.com" className="text-gray-600 hover:text-[#B2EBF9] transition-colors text-sm">impact@patientexperienceconsulting.com</a>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#B2EBF9]/30 hover:border-[#B2EBF9] hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B2EBF9] to-[#AEA1EA] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#AEA1EA]">Location</h3>
                <p className="text-gray-600 text-sm">Manatee County, FL<br/>Serving Nationwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#B2EBF9]/10 to-[#AEA1EA]/10">
        <div className="container mx-auto max-w-4xl">
          <BookingForm />
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              What to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]">Expect</span>
            </h2>
            <p className="text-xl text-gray-600">Your journey to practice excellence starts here</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-[#AEA1EA]/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#AEA1EA] to-[#B2EBF9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#AEA1EA]">Step 1: Book Your Session</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Fill out the contact form above and complete the practice health assessment. We'll review your information and confirm your 45-60 minute virtual strategy session within 24 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#B2EBF9]/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B2EBF9] to-[#AEA1EA] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#B2EBF9]">Step 2: Deep Dive Analysis</h3>
                    <p className="text-gray-700 leading-relaxed">
                      During the call, we'll analyze your practice's bottlenecks, workflow challenges, and pain points. No sales pressure—just genuine insights and actionable solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#AEA1EA]/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#AEA1EA] to-[#B2EBF9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#AEA1EA]">Step 3: Custom Roadmap</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Walk away with a detailed transformation blueprint, quick wins you can implement immediately, and tier recommendations tailored to your practice's unique needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#B2EBF9]/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B2EBF9] to-[#AEA1EA] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#B2EBF9]">Step 4: Choose Your Path</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Decide if our services align with your goals. No obligation—whether you work with us or not, you keep the value. 30-day upgrade guarantee on all tiers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#AEA1EA]/10 to-[#B2EBF9]/10">
        <div className="container mx-auto max-w-5xl">
          <img 
            src="https://customer-assets.emergentagent.com/job_ai-health-transform/artifacts/9on3nis1_two%20nursing%20staff.jpg" 
            alt="Healthcare professionals collaborating" 
            className="rounded-2xl shadow-2xl w-full border-4 border-[#AEA1EA]/30"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
