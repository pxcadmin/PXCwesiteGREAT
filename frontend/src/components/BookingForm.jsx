import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { intakeQuestions } from '../mock';
import { CheckCircle, Calendar, Puzzle } from 'lucide-react';

const BookingForm = () => {
  const [step, setStep] = useState(1); // 1: Contact Form, 2: Intake Form, 3: Success
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceName: ''
  });
  const [intakeData, setIntakeData] = useState({});

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactData);
    // Move to intake form
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIntakeSubmit = (e) => {
    e.preventDefault();
    console.log('Intake form submitted:', intakeData);
    // Show success message
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactChange = (field, value) => {
    setContactData(prev => ({ ...prev, [field]: value }));
  };

  const handleIntakeChange = (questionId, value) => {
    setIntakeData(prev => ({ ...prev, [questionId]: value }));
  };

  if (step === 3) {
    return (
      <Card className="border-2 border-[#FB2C15] shadow-2xl">
        <CardContent className="p-12 text-center">
          <CheckCircle className="w-24 h-24 text-[#FB2C15] mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">You're All Set!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for completing your strategy session request. Jennifer will review your practice profile and contact you within 24 hours to confirm your Puzzle Pyramid Strategy Session.
          </p>
          <div className="bg-gradient-to-br from-[#B2EBF9]/20 to-[#AEA1EA]/20 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-lg mb-4">What Happens Next?</h3>
            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#FB2C15] flex-shrink-0 mt-1" />
                <span className="text-gray-700">You'll receive a confirmation email with session details</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#FB2C15] flex-shrink-0 mt-1" />
                <span className="text-gray-700">Jennifer will review your practice assessment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#FB2C15] flex-shrink-0 mt-1" />
                <span className="text-gray-700">Your custom treatment plan will be prepared</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#FB2C15] flex-shrink-0 mt-1" />
                <span className="text-gray-700">We'll schedule your 60-minute strategy session</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-4">Check your email for next steps!</p>
          <Button 
            onClick={() => window.location.reload()}
            className="bg-[#FB2C15] hover:bg-[#d92515] text-white rounded-full px-8"
          >
            Return to Homepage
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (step === 2) {
    return (
      <Card className="border-2 border-[#FB2C15] shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-[#FB2C15] to-[#d92515] text-white">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl mb-2">Practice Health Assessment</CardTitle>
              <p className="text-white/90">Help us understand your practice so we can deliver maximum value in your strategy session</p>
            </div>
            <Puzzle className="w-12 h-12" />
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleIntakeSubmit} className="space-y-6">
            {intakeQuestions.map((question) => (
              <div key={question.id} className="space-y-2">
                <Label className="text-base font-semibold">{question.question}</Label>
                {question.type === 'select' ? (
                  <Select onValueChange={(value) => handleIntakeChange(question.id, value)}>
                    <SelectTrigger className="w-full border-2 focus:border-[#FB2C15]">
                      <SelectValue placeholder="Select an option..." />
                    </SelectTrigger>
                    <SelectContent>
                      {question.options.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Textarea 
                    placeholder={question.placeholder}
                    rows={4}
                    className="border-2 focus:border-[#FB2C15] resize-none"
                    onChange={(e) => handleIntakeChange(question.id, e.target.value)}
                  />
                )}
              </div>
            ))}

            <div className="flex gap-4 pt-6">
              <Button 
                type="button"
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1 border-2 border-gray-300 rounded-full"
              >
                Back
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-[#FB2C15] hover:bg-[#d92515] text-white rounded-full font-bold"
              >
                Complete Assessment
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-[#FB2C15] shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-[#FB2C15] to-[#d92515] text-white">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-3xl mb-2">Book Your Free Puzzle Pyramid Strategy Session</CardTitle>
            <p className="text-white/90">60 minutes that could transform your practice forever</p>
          </div>
          <Calendar className="w-12 h-12" />
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="bg-[#B2EBF9]/20 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-lg mb-3">In This Session, You'll Discover:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#FB2C15] flex-shrink-0 mt-1" />
              <span className="text-gray-700">The exact bottlenecks killing your practice efficiency</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#FB2C15] flex-shrink-0 mt-1" />
              <span className="text-gray-700">Why your current systems are causing burnout</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#FB2C15] flex-shrink-0 mt-1" />
              <span className="text-gray-700">A custom roadmap to transform your practice in 16 weeks</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#FB2C15] flex-shrink-0 mt-1" />
              <span className="text-gray-700">How AI can eliminate admin burden without replacing staff</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleContactSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input 
                id="firstName"
                required
                value={contactData.firstName}
                onChange={(e) => handleContactChange('firstName', e.target.value)}
                className="border-2 focus:border-[#FB2C15]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input 
                id="lastName"
                required
                value={contactData.lastName}
                onChange={(e) => handleContactChange('lastName', e.target.value)}
                className="border-2 focus:border-[#FB2C15]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input 
              id="email"
              type="email"
              required
              value={contactData.email}
              onChange={(e) => handleContactChange('email', e.target.value)}
              className="border-2 focus:border-[#FB2C15]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input 
              id="phone"
              type="tel"
              required
              value={contactData.phone}
              onChange={(e) => handleContactChange('phone', e.target.value)}
              className="border-2 focus:border-[#FB2C15]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="practiceName">Practice Name *</Label>
            <Input 
              id="practiceName"
              required
              value={contactData.practiceName}
              onChange={(e) => handleContactChange('practiceName', e.target.value)}
              className="border-2 focus:border-[#FB2C15]"
            />
          </div>

          {/* Go High Level Calendar Placeholder */}
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-semibold mb-2">Go High Level Calendar Integration</p>
            <p className="text-sm text-gray-500">Embed your GHL calendar widget or iframe here to allow direct scheduling</p>
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#FB2C15] hover:bg-[#d92515] text-white rounded-full font-bold text-lg py-6"
          >
            Continue to Practice Assessment
          </Button>

          <p className="text-xs text-gray-500 text-center">
            * By submitting this form, you agree to receive communication from Patient eXperience Consulting. We respect your privacy.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
