import React from 'react';
import { AlertCircle, Clock } from 'lucide-react';

const ScarcityBanner = ({ type = 'sessions' }) => {
  const messages = {
    sessions: {
      text: "Limited Availability: Only 10 Strategy Sessions Per Quarter",
      subtext: "7 spots remaining this quarter",
      urgent: true
    },
    clients: {
      text: "Exclusive Client Acceptance: Only 4 New Clients Per Quarter",
      subtext: "2 spots remaining - Apply now",
      urgent: true
    }
  };

  const message = messages[type];

  return (
    <div className={`${message.urgent ? 'bg-gradient-to-r from-[#FB2C15] to-[#d92515]' : 'bg-gradient-to-r from-[#AEA1EA] to-[#B2EBF9]'} text-white py-3 px-4`}>
      <div className="container mx-auto max-w-6xl flex flex-wrap items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          {message.urgent ? <AlertCircle className="w-5 h-5 animate-pulse" /> : <Clock className="w-5 h-5" />}
          <span className="font-bold text-sm md:text-base">{message.text}</span>
        </div>
        <span className="text-xs md:text-sm opacity-90">• {message.subtext}</span>
      </div>
    </div>
  );
};

export default ScarcityBanner;
