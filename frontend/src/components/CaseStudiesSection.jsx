import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { caseStudies } from '../mock';
import { Download, CheckCircle, TrendingUp } from 'lucide-react';

const CaseStudiesSection = () => {
  const handleDownload = (link) => {
    // Placeholder for download functionality
    console.log('Downloading case study:', link);
    alert('Case study download will be linked here. Please upload your PDF and connect the link.');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#B2EBF9]/10 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <TrendingUp className="w-16 h-16 text-[#FB2C15] mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven <span className="text-[#FB2C15]">Transformations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into real-world success stories. Download detailed case studies showing exactly how we transformed struggling practices into thriving powerhouses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="border-2 border-gray-200 hover:border-[#FB2C15] transition-all hover:shadow-xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.previewImage} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-semibold">{study.specialty}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 leading-tight">{study.title}</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">Practice:</span> {study.practice}</p>
                  <p className="text-sm text-gray-600 mb-4"><span className="font-semibold">Challenge:</span> {study.challenge}</p>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-[#FB2C15] mb-2">Key Results:</p>
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FB2C15] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => handleDownload(study.downloadLink)}
                  className="w-full bg-[#FB2C15] hover:bg-[#d92515] text-white rounded-full font-medium"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Want results like these for your practice?</p>
          <Button 
            onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="bg-black hover:bg-gray-900 text-white rounded-full px-8 font-bold"
          >
            Book Your Free Strategy Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
