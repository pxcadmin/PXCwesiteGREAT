import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { testimonials } from '../mock';
import { Play, Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Real Practices. <span className="text-[#FB2C15]">Real Results.</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Don't just take our word for it. Hear from medical practice owners and providers who've transformed chaos into clarity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-2 border-gray-200 hover:border-[#FB2C15] transition-all hover:shadow-xl group">
              <CardContent className="p-0">
                {/* Video Placeholder */}
                <div 
                  className="relative h-64 bg-gradient-to-br from-[#B2EBF9] to-[#AEA1EA] cursor-pointer overflow-hidden"
                  onClick={() => setSelectedVideo(testimonial.id)}
                >
                  <img 
                    src={testimonial.thumbnail} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#FB2C15] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs opacity-90">{testimonial.practice}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-6">
                  <Quote className="w-8 h-8 text-[#FB2C15] mb-3" />
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-[#FB2C15] text-[#FB2C15]" />
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}, {testimonial.practice}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Modal Placeholder */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="bg-white rounded-lg p-8 max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Video player placeholder</p>
                  <p className="text-sm text-gray-500 mt-2">Embed your testimonial video here</p>
                </div>
              </div>
              <Button 
                onClick={() => setSelectedVideo(null)}
                className="bg-[#FB2C15] hover:bg-[#d92515] text-white w-full rounded-full"
              >
                Close
              </Button>
            </div>
          </div>
        )}

        {/* Performance Metrics Visual */}
        <div className="mt-16 text-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_ai-health-transform/artifacts/wo6vu4j1_performance%20metrics%20red%20kgrnd%20-%20Copy.PNG" 
            alt="Performance Metrics" 
            className="mx-auto max-w-2xl w-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
